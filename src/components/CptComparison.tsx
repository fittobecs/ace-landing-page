"use client"
import { REQUEST_URL } from "@/data/constant"
import { sendNaverViewContent } from "@/utils/sendNaverViewContent"
import Image from "next/image"
import React, { useState } from "react"

const CptComparison: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const comparisons = [
    {
      leftOrg: "/images/logo/nasm.png",
      leftTitle: "NASM CPT",
      leftDescription:
        "교정 운동과 근육 불균형 교정에 초점을 맞추어 주로 포스트 리햅·교정 특화 트레이너에게 적합합니다.",
      rightDescription:
        "ACE는 특정 집단에 국한되지 않아 폭넓은 지도가 가능합니다. IFT 모델로 맞춤형 프로그램을 설계하고, 동기부여와 습관 형성 전략을 통한 지속 성과를 만듭니다.",
    },
    {
      leftOrg: "/images/logo/acsm.png",
      leftTitle: "ACSM CPT",
      leftDescription:
        "운동 과학적 지식·학문적 기초에 강점을 가진 교육 과정으로 특수 집단을 대상으로 한 운동 처방에 중점을 두고 있습니다.",
      rightDescription:
        "즉시 현장에서 적용 가능한 스크리닝·프로그램 템플릿을 제공하며, IFT 모델과 Mover Method®로 실제 행동 변화를 만들어내는 코칭까지 가능합니다.",
    },
    {
      leftOrg: "/images/logo/nsca.png",
      leftTitle: "NSCA CPT",
      leftDescription:
        "엘리트 선수·퍼포먼스 향상에 초점이 맞춰져 있으며, 고급 체력 훈련과 스포츠 퍼포먼스 지향적입니다.",
      rightDescription:
        "일반인과 초보 트레이너에게 진입 장벽이 낮고, 명확한 스크리닝 방법, 클라이언트 커뮤니케이션, 프로그램 템플릿으로 고객을 바로 지도할 수 있는 준비된 트레이너를 만듭니다.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % comparisons.length)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + comparisons.length) % comparisons.length
    )
  }

  const handleClick = () => {
    sendNaverViewContent()
    window.open(REQUEST_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="max-w-6xl mx-auto pt-16 md:pt-32 bg-white px-4">
      {/* 제목 섹션 */}
      <div className="relative mb-8 md:mb-12 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 relative z-10">
          다른 CPT와의 차이점?
        </h1>
        <div className="w-full max-w-md mx-auto h-1 bg-red-400 rounded-full"></div>
      </div>

      {/* 비교 컨텐츠 */}
      <div className="relative">
        {/* 데스크탑 화살표 */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors rounded-lg"
          style={{ clipPath: "polygon(25% 50%, 75% 20%, 75% 80%)" }}
        ></button>

        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors rounded-lg"
          style={{ clipPath: "polygon(25% 20%, 25% 80%, 75% 50%)" }}
        ></button>

        {/* 메인 콘텐츠 */}
        <div className="md:mx-24">
          {/* 데스크탑 레이아웃 */}
          <div className="hidden md:flex flex-row gap-5 px-10 items-start min-h-96">
            {/* ACE */}
            <div className="text-center w-[58%]">
              <div className="mb-6 flex items-center justify-center h-16">
                <Image
                  src="/images/ace_logo.png"
                  width={225}
                  height={120}
                  alt="Comparison image"
                  className="max-h-24 object-contain"
                />
              </div>

              <p
                className="text-gray-700 text-xl min-h-[250px] font-semibold leading-relaxed border-[6px] border-red-400 rounded-3xl py-8 px-6 
              flex items-center justify-center"
              >
                {comparisons[currentSlide].rightDescription}
              </p>
            </div>
            {/* 다른 기관 */}
            <div className="text-center w-[42%]">
              <div className="mb-6 flex items-center justify-center h-16">
                <Image
                  src={comparisons[currentSlide].leftOrg}
                  width={90}
                  height={45}
                  alt="Comparison image"
                  className="max-h-16 object-contain"
                />
              </div>

              <p
                className="text-gray-700 text-base min-h-[250px] leading-relaxed border-4 border-gray-400 rounded-3xl py-8 px-6
              flex items-center justify-center"
              >
                {comparisons[currentSlide].leftDescription}
              </p>
            </div>
          </div>

          {/* 모바일 레이아웃 */}
          <div className="md:hidden space-y-6">
            {/* ACE */}
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-center mb-4">
                <div className="mb-3 flex items-center justify-center h-20">
                  <Image
                    src="/images/ace_logo.png"
                    width={160}
                    height={80}
                    alt="ACE logo"
                    className="max-h-12 object-cover"
                  />
                </div>
                <div className="bg-yellow-400 rounded-full px-4 py-2 inline-block mb-3">
                  <span className="text-gray-800 font-medium text-sm">
                    ACE CPT
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                {comparisons[currentSlide].rightDescription}
              </p>
            </div>

            {/* VS 구분선 */}
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4 text-gray-500 font-semibold">VS</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            {/* 다른 기관 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-center mb-4">
                <div className="mb-6 flex items-center justify-center h-12">
                  <Image
                    src={comparisons[currentSlide].leftOrg}
                    width={100}
                    height={50}
                    alt="Comparison image"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="bg-gray-100 rounded-full px-4 py-2 inline-block mb-3">
                  <span className="text-gray-700 font-medium text-sm">
                    {comparisons[currentSlide].leftTitle}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                {comparisons[currentSlide].leftDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 화살표 버튼 */}
      <div className="md:hidden flex justify-center mt-6 space-x-10">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors rounded-lg"
          style={{ clipPath: "polygon(25% 50%, 75% 20%, 75% 80%)" }}
        ></button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors rounded-lg"
          style={{ clipPath: "polygon(25% 20%, 25% 80%, 75% 50%)" }}
        ></button>
      </div>

      {/* 인디케이터 */}
      <div className="flex justify-center mt-6 md:mt-8 space-x-2">
        {comparisons.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* 신청하기 버튼 */}
      <div className="text-center mt-8 md:mt-12">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 md:py-4 px-8 md:px-12 
        rounded-full text-base md:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          onClick={handleClick}
        >
          신청하기
        </button>
      </div>
    </section>
  )
}

export default CptComparison
