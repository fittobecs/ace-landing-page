"use client"

import { useEffect, useRef } from "react"

import "./ace-landing.css"
import { aceLandingMarkup } from "./markup"

const AceLanding: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    // StrictMode 등에서 effect가 다시 실행돼도 리스너가 중복되지 않도록 정리
    const controller = new AbortController()
    const { signal } = controller

    // 모바일 메뉴
    const menuButton = root.querySelector<HTMLButtonElement>("#mobile-menu")
    const mobileNav = root.querySelector<HTMLElement>("#mobile-nav")
    if (menuButton && mobileNav) {
      const closeMenu = () => {
        mobileNav.hidden = true
        menuButton.setAttribute("aria-expanded", "false")
        menuButton.setAttribute("aria-label", "메뉴 열기")
      }
      menuButton.addEventListener(
        "click",
        () => {
          mobileNav.hidden = !mobileNav.hidden
          menuButton.setAttribute("aria-expanded", String(!mobileNav.hidden))
          menuButton.setAttribute(
            "aria-label",
            mobileNav.hidden ? "메뉴 열기" : "메뉴 닫기"
          )
        },
        { signal }
      )
      mobileNav.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", closeMenu, { signal })
      })
    }

    // 학습 목적 탭
    const scenarioButtons = Array.from(
      root.querySelectorAll<HTMLButtonElement>("[data-scenario]")
    )
    const showScenario = (button: HTMLButtonElement) => {
      scenarioButtons.forEach((b) =>
        b.setAttribute("aria-selected", String(b === button))
      )
      root.querySelectorAll<HTMLElement>(".scenario-panel").forEach((p) => {
        p.hidden = p.id !== button.getAttribute("aria-controls")
      })
    }
    scenarioButtons.forEach((button, index) => {
      button.addEventListener("click", () => showScenario(button), { signal })
      button.addEventListener(
        "keydown",
        (event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault()
            const step = event.key === "ArrowRight" ? 1 : -1
            const next =
              scenarioButtons[
                (index + step + scenarioButtons.length) % scenarioButtons.length
              ]
            showScenario(next)
            next.focus()
          }
        },
        { signal }
      )
    })

    // 커리큘럼 전체 펼치기 / 접기
    root
      .querySelectorAll<HTMLButtonElement>("[data-curriculum]")
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            root
              .querySelectorAll<HTMLDetailsElement>(".curriculum details")
              .forEach((detail) => {
                detail.open = button.dataset.curriculum === "expand"
              })
          },
          { signal }
        )
      })

    // FAQ 카테고리 필터
    const faqButtons = root.querySelectorAll<HTMLButtonElement>("[data-faq]")
    faqButtons.forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          faqButtons.forEach((b) =>
            b.setAttribute("aria-pressed", String(b === button))
          )
          root
            .querySelectorAll<HTMLDetailsElement>(".faq-list details")
            .forEach((detail) => {
              detail.hidden =
                button.dataset.faq !== "전체" &&
                detail.dataset.category !== button.dataset.faq
            })
        },
        { signal }
      )
    })

    // 응시 준비 체크리스트
    const checks = Array.from(
      root.querySelectorAll<HTMLInputElement>("[data-ready]")
    )
    const checkResult = root.querySelector<HTMLElement>(".check-result")
    checks.forEach((check) => {
      check.addEventListener(
        "change",
        () => {
          const count = checks.filter((c) => c.checked).length
          if (checkResult) {
            checkResult.textContent =
              count === 3
                ? "3 / 3 확인 완료 · CPR 제출 후 시험을 신청하세요."
                : `준비된 항목을 체크해주세요. ${count} / 3`
          }
        },
        { signal }
      )
    })

    // 시험 희망일 계산 (설문 제출일 + 4주)
    const dateInput = root.querySelector<HTMLInputElement>("#ace-submit-date")
    const output = root.querySelector<HTMLElement>("#ace-date-result")
    if (dateInput && output) {
      const updateDate = () => {
        if (!dateInput.value) {
          output.textContent = "설문 제출 예정일을 선택해주세요."
          return
        }
        const [y, m, d] = dateInput.value.split("-").map(Number)
        const date = new Date(Date.UTC(y, m - 1, d, 12))
        if (!Number.isFinite(date.getTime())) {
          output.textContent = "올바른 날짜를 선택해주세요."
          return
        }
        date.setUTCDate(date.getUTCDate() + 28)
        output.textContent =
          new Intl.DateTimeFormat("ko-KR", {
            timeZone: "UTC",
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(date) + " 이후"
      }
      try {
        dateInput.value = new Intl.DateTimeFormat("sv-SE", {
          timeZone: "Asia/Seoul",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date())
      } catch {
        // 날짜 기본값 설정 실패 시 빈 값 유지
      }
      dateInput.addEventListener("input", updateDate, { signal })
      updateDate()
    }

    // 페이지 내 앵커 부드러운 스크롤
    root
      .querySelectorAll<HTMLAnchorElement>('a[href^="#ace-"]')
      .forEach((link) => {
        link.addEventListener(
          "click",
          (event) => {
            const href = link.getAttribute("href")
            const target = href ? root.querySelector(href) : null
            if (target) {
              event.preventDefault()
              target.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "auto"
                  : "smooth",
                block: "start",
              })
            }
          },
          { signal }
        )
      })

    return () => controller.abort()
  }, [])

  return (
    <div id="ace-preview" ref={rootRef}>
      <div
        className="ace-shell"
        dangerouslySetInnerHTML={{ __html: aceLandingMarkup }}
      />
    </div>
  )
}

export default AceLanding
