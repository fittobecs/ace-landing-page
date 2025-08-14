"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer: React.FC = () => {
  const handleKakaoChannel = () => {
    // 카카오톡 채널 추가 함수 (기존 addChannel 함수와 동일한 기능)
    window.open("https://pf.kakao.com/_dGnxgxj/chat", "_blank")
  }

  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl w-full mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 회사 정보 */}
          <div className="copy">
            <div className="mb-4">
              <p className="text-lg font-bold mb-2">
                고객센터 : fmskorea@fittobe.com
              </p>
            </div>

            <div className="text-sm text-gray-600 leading-relaxed space-y-1">
              <p>주식회사 핏투비 | 대표 : 배익준</p>
              <p>
                사업자등록번호 : 143-87-02397 | 통신판매업신고번호 :
                2022-서울서초-1625호
              </p>
              <p>
                주소 : (06739) 서울특별시 서초구 남부순환로364길 8-15,
                3층(양재동, 동일빌딩)
              </p>
              <p>개인정보관리책임자 : 배익준</p>
              <p>전화번호 : 070-4632-3651 | 전자우편 : fmskorea@fittobe.com</p>
            </div>
          </div>

          {/* 문의하기 */}
          <div className="foot_info">
            <h2 className="text-xl font-semibold mb-4">문의하기</h2>

            <div className="space-y-3">
              <p className="text-gray-600">우측 하단 카톡 버튼을 누르세요.</p>

              <a
                href="mailto:fmskorea@fittobe.com"
                className="block text-blue-600 hover:text-blue-800 font-medium"
              >
                fmskorea@fittobe.com
              </a>

              <p className="text-sm text-gray-600">
                평일 09:00-18:00 / 점심시간 12:30-13:30 (주말 및 공휴일 휴무)
              </p>
            </div>

            {/* SNS 링크 */}
            <div className="mt-6">
              <ul className="flex items-center gap-4">
                <li>
                  <Link
                    href="https://www.youtube.com/@FMS_KOREA"
                    target="_blank"
                    aria-label="YouTube"
                    className="inline-flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/fmskorea/"
                    target="_blank"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://blog.naver.com/fmskorea_"
                    target="_blank"
                    aria-label="Naver Blog"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 text-white rounded-full hover:bg-gray-300 transition-colors"
                  >
                    <Image
                      src="/images/naver_icon.png"
                      width={24}
                      height={24}
                      alt={"naver_icon"}
                    />
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleKakaoChannel}
                    aria-label="KakaoTalk Channel"
                    className="inline-flex items-center justify-center w-10 h-10 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 4.388 0 9.818c0 3.736 2.615 6.985 6.377 8.433l-.839 3.07c-.096.35.133.719.516.653l4.756-2.544C11.202 19.508 11.596 19.527 12 19.527c6.627 0 12-4.388 12-9.818S18.627 0 12 0z" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
