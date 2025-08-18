import React from "react"

const AceInfo2: React.FC = () => {
  return (
    <section id="AceArticle2" className="max-w-4xl mx-auto pt-24 bg-white">
      {/* ACE CPT 섹션 */}
      <div className="mt-20">
        {/* ACE CPT 제목 */}
        <div className="relative mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 relative z-10 text-center">
            ACE CPT의 특별함?
          </h1>
          <div className="w-full max-w-md mx-auto h-1 bg-red-400 rounded-full"></div>
        </div>

        {/* ACE CPT 특징들 */}
        <div className="space-y-8">
          {/* 첫 번째 특징 */}
          <div className="bg-white rounded-lg p-6">
            <div className="bg-red-500 text-white px-4 py-2 rounded-md inline-block mb-4 font-bold">
              1. 전 세계 어디서나 인정받을 수 있습니다.
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              - 미국 국가자격인증 위원회(National Commission for Certifying
              Agencies)가 인증하는 자격 인증 프로그램입니다. 국제적으로 인증
              받아 국내, 국외에서 전부 사용 가능합니다.
            </p>
          </div>

          {/* 두 번째 특징 */}
          <div className="bg-white rounded-lg p-6">
            <div className="bg-red-500 text-white px-4 py-2 rounded-md inline-block mb-4 font-bold">
              2. 모든 고객 수준에 맞춤 솔루션이 가능합니다.
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              - 특정 분야나 고객 층에 초점을 맞추지 않고 초심자부터 선수까지
              모두 다룰 수 있는 프로그램입니다. 실전에서 바로 활용 가능한 실무
              중심의 커리큘럼으로 구성되어있습니다.
            </p>
          </div>

          {/* 세 번째 특징 */}
          <div className="bg-white rounded-lg p-6">
            <div className="bg-red-500 text-white px-4 py-2 rounded-md inline-block mb-4 font-bold">
              3. 고객의 행동을 변화시킬 수 있습니다.
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              - 해부/생리/역학 등 일반 내용은 물론 고객을 실제로 변화시키기 위한
              커뮤니케이션 능력을 학습하여 행동과 인지를 변화 시키는 등의 라이프
              스타일 코치 역할을 할 수 있게 합니다.
            </p>
          </div>
        </div>

        {/* 두 번째 섹션 신청하기 버튼 */}
        <div className="text-center mt-12">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            신청하기
          </button>
        </div>
      </div>
    </section>
  )
}

export default AceInfo2
