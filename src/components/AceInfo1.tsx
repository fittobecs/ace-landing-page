"use client"
import { REQUEST_URL } from "@/data/constant"
import { sendNaverViewContent } from "@/utils/sendNaverViewContent"
import React from "react"

const AceInfo1: React.FC = () => {
  const handleClick = () => {
    sendNaverViewContent()
    window.open(REQUEST_URL, "_blank", "noopener,noreferrer")
  }
  return (
    <section id="AceArticle1" className="max-w-4xl mx-auto pt-32 bg-white">
      {/* 제목 섹션 */}
      <div className="relative mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 relative z-10 text-center">
          ACE란?
        </h1>
        <div className="w-full max-w-md mx-auto h-1 bg-red-400 rounded-full"></div>
      </div>

      {/* 콘텐츠 섹션 */}
      <div className="space-y-8">
        {/* 첫 번째 항목 */}
        <div className="flex items-start gap-6">
          <img src="/images/ace_icon_1.png" width={80} height={80}></img>
          <div className="flex items-center h-20">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed flex-1">
              ACE(American Council on Exerise)는 1985년에 설립된{" "}
              <span className="font-bold">
                미국의 비영리 피트니스 교육 기관
              </span>
              입니다.
            </p>
          </div>
        </div>

        {/* 두 번째 항목 */}
        <div className="flex items-start gap-6">
          <img src="/images/ace_icon_2.png" width={80} height={80}></img>
          <div className="flex items-center h-20">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed flex-1">
              <span className="font-bold">과학적 근거 기반</span>을 통해 인류의
              건강 증진과 삶의 질 향상을 위한{" "}
              <span className="font-bold">교육과 자원을 제공</span>합니다.
            </p>
          </div>
        </div>

        {/* 세 번째 항목 */}
        <div className="flex items-start gap-6">
          <img src="/images/ace_icon_3.png" width={80} height={80}></img>
          <div className="flex items-center h-20">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed flex-1">
              <span className="font-bold">
                헬스클럽뿐 아니라 커뮤니티, 공공기관, 기업, 의료 시설
              </span>{" "}
              등에서 다양한 프로그램과 자원을 제공합니다.
            </p>
          </div>
        </div>

        {/* 네 번째 항목 */}
        <div className="flex items-start gap-6">
          <img src="/images/ace_icon_4.png" width={80} height={80}></img>
          <div className="flex items-center h-20">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed flex-1">
              ACE는{" "}
              <span className="font-bold">
                지역 사회와 의료 기관, 기업 등과의 파트너십
              </span>
              을 통해 건강한 생활 습관을 촉진하고자 노력합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 첫 번째 섹션 신청하기 버튼 */}
      <div className="text-center mt-12">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-full text-lg
         transition-colors duration-300 shadow-lg hover:shadow-xl"
          onClick={handleClick}
        >
          신청하기
        </button>
      </div>
    </section>
  )
}

export default AceInfo1
