"use client"

import { Transition } from "@headlessui/react"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { HiBars3, HiOutlineXMark } from "react-icons/hi2"

import { REQUEST_URL } from "@/data/constant"
import { menuItems } from "@/data/menuItems"
import Container from "./Container"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // --------------------------------------
  // 네이버 공통 스크립트 (PV 이벤트)
  // --------------------------------------
  useEffect(() => {
    const ACCOUNT_ID = "s_123456789abcdef" // 예시 ID, 실제 ID로 교체 필요
    const PRIMARY_DOMAIN = "ace.fittobe.ac"
    if (!window.wcs_add) {
      window.wcs_add = {}
    }
    window.wcs_add["wa"] = ACCOUNT_ID

    const script = document.createElement("script")
    script.src = "https://wcs.naver.net/wcslog.js"
    script.async = true

    script.onload = () => {
      if (window.wcs) {
        window.wcs.inflow(PRIMARY_DOMAIN)
        window.wcs_do()
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
      <Container className="!px-0">
        <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/ace_main_logo.gif"
              className="logo"
              alt="로고 이미지"
              width={90}
              height={61}
            ></img>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-foreground-accent transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li key="공식 파트너사">
              <a
                href="https://www.acefitness.org/resources/partners/international-partners/"
                className="text-foreground hover:text-foreground-accent transition-colors"
                target="_blank"
              >
                공식 파트너사
              </a>
            </li>
            <li>
              <a
                href={REQUEST_URL}
                target="_blank"
                className="text-black bg-white border-4 border-[#e2363e] hover:bg-gray-100 px-8 py-3 rounded-full transition-colors"
              >
                <span className="font-bold text-lg">ACE </span>
                <span className="font-bold text-[17px]">신청</span>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-foreground-accent block"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li key="공식 파트너사">
              <a
                href="https://www.acefitness.org/resources/partners/international-partners/"
                className="text-foreground hover:text-foreground-accent transition-colors"
                target="_blank"
              >
                공식 파트너사
              </a>
            </li>
            <li>
              <a
                href={REQUEST_URL}
                target="_blank"
                className="text-black bg-white border-2 border-[#e2363e] hover:bg-gray-100 px-8 py-2 rounded-full transition-colors"
              >
                <span className="font-semibold">ACE 신청</span>
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  )
}

export default Header
