import React from "react"

const ImageBlocks: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto pt-32 bg-white">
      <div className="space-y-16">
        {/* 섹션 1: 이미지1 + 글1 (ACE CPT 응시 자격) */}
        <div className="flow-root">
          <div className="my-4">
            <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 w-full">
              <div className="flex-1">
                <img
                  src="/images/ace_test_1.jpg"
                  alt="Personal Training Session"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                  ACE CPT 응시 자격
                </h1>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">만 18세 이상</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">CPR 자격증</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">
                      고등학생 이상의 학력
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-gray-600 text-sm">
                  (시험 신청 시 유효한 CPR 자격증 업로드 필수)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 섹션 2: 글2 + 이미지2 (ACE CPT 시험) */}
        <div className="flow-root">
          <div className="my-4">
            <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 w-full">
              <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 max-md:pt-6 md:pt-0">
                  ACE CPT 시험
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">
                      TOEFL 시험처럼 정해진 장소에서 응시
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">
                      원하는 날짜, 시간에 응시 가능
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">
                      총 150문항, 약 3시간 소요
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">
                      800점 만점에 500점 이상 통과
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">
                      본사 사이트 및 메일로 결과 확인
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <img
                  src="/images/ace_test_2.jpg"
                  alt="Calculator and hands typing"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 섹션 3: 이미지3 + 글3 (ACE CPT 유효기간 및 연장) */}
        <div className="flow-root">
          <div className="my-4">
            <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 w-full">
              <div className="flex-1">
                <img
                  src="/images/ace_test_3.jpg"
                  alt="Woman exercising outdoors"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  ACE CPT 유효기간 및 연장
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">
                      2년간 유효하며 아래 사항을 통해 연장 가능
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">
                      ACE가 인정하는 지속교육과정(CEC)*20시간 수료
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">
                      CPR 자격증 갱신
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">
                      갱신 수수료 납부(129달러)
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-gray-600 text-sm leading-relaxed">
                  <p>*지속 교육 과정은 CEC(Continuing Education Credit)</p>
                  <p className="mt-1">
                    혹은 CEU(Continuing Education Unit)을 의미하며,
                  </p>
                  <p className="mt-1">핏투비 아카데미에서 신청 가능합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 신청 버튼 */}
        <div className="flow-root">
          <div className="text-center py-8">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              ACE CPT 신청하기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageBlocks
