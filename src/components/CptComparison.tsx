"use client"
import { REQUEST_URL } from "@/data/constant"
import React, { useState } from "react"

const CptComparison: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const comparisons = [
    {
      leftOrg: "/images/nasm_logo.png",
      leftTitle: "NASM CPT",
      leftDescription:
        "NASM(National Academy of Sports Medicine)은 부상 예방, 교정운동, 기능성 훈련에 중점을 두고 있습니다.",
      rightDescription:
        "ACE는 Integrated Functionality Training(IF-T) 모델을 통해 고객의 현재 능력과 목적에 맞춰 프로그램을 통합적으로 조정하는데 중점을 두고 있습니다.",
    },
    {
      leftOrg: "/images/acsm_logo.png",
      leftTitle: "ACSM CPT",
      leftDescription:
        "ACSM은 주로 임상 환자, 고위험군, 심혈관 질환자 등 특수 집단을 대상으로 한 운동 처방에 중점을 두고 있습니다.",
      rightDescription:
        "ACE CPT는 일반인의 일상 습관 개선, 비만 예방, 웰빙 코칭에 특화되어 있어 커뮤니티, 기업, 의료기관 등 다양한 현장에서 넓은 응용 가능성을 갖고 있습니다.",
    },
    {
      leftOrg: "/images/nsca_logo.jpg",
      leftTitle: "NSCA CPT",
      leftDescription:
        "NSCA의 CSCS 자격은 주로 운동선수의 퍼포먼스 향상과 고강도 훈련에만 특화되어 있습니다.",
      rightDescription:
        "ACE는 개인 트레이닝, 그룹 트레이닝, 커뮤니티 프로그램 등 다양한 현장에서 활용 가능합니다.",
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
          <div className="hidden md:grid grid-cols-2 gap-16 items-start min-h-96">
            {/* ACE */}
            <div className="text-center">
              <div className="mb-6 flex items-center justify-center h-16">
                <img
                  src="/images/ace_logo.png"
                  width={125}
                  height={70}
                  alt="Comparison image"
                  className="max-h-16 object-contain"
                />
              </div>

              <div className="bg-yellow-400 rounded-full px-6 py-3 inline-block mb-8">
                <span className="text-gray-800 font-medium">ACE CPT</span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                {comparisons[currentSlide].rightDescription}
              </p>
            </div>
            {/* 다른 기관 */}
            <div className="text-center">
              <div className="mb-6 flex items-center justify-center h-16">
                <img
                  src={comparisons[currentSlide].leftOrg}
                  width={125}
                  height={70}
                  alt="Comparison image"
                  className="max-h-16 object-contain"
                />
              </div>

              <div className="bg-gray-100 rounded-full px-6 py-3 inline-block mb-8">
                <span className="text-gray-700 font-medium">
                  {comparisons[currentSlide].leftTitle}
                </span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                {comparisons[currentSlide].leftDescription}
              </p>
            </div>

            {/* 가운데 세로 구분선 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-48 bg-gray-200"></div>
          </div>

          {/* 모바일 레이아웃 */}
          <div className="md:hidden space-y-6">
            {/* ACE */}
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-center mb-4">
                <div className="mb-3 flex items-center justify-center h-12">
                  <img
                    src="/images/ace_logo.png"
                    width={100}
                    height={50}
                    alt="ACE logo"
                    className="max-h-12 object-contain"
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
                <div className="mb-3 flex items-center justify-center h-12">
                  <img
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
