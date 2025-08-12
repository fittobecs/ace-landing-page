import React from "react"

const AceInfo1: React.FC = () => {
  return (
    <section id="AceArticle1" className="max-w-4xl mx-auto pt-32 bg-white">
      {/* 제목 섹션 */}
      <div className="relative mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 relative z-10">
          ACE는 어떤 단체인가요?
        </h1>
        <div className="w-full h-1 bg-red-400 rounded-full"></div>
      </div>

      {/* 콘텐츠 섹션 */}
      <div className="space-y-8">
        {/* 첫 번째 항목 */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
            <div className="text-white">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 21h18" />
                <path d="M5 21V7l8-4v18" />
                <path d="M19 21V11l-6-4" />
                <path d="M9 9v.01" />
                <path d="M9 12v.01" />
                <path d="M9 15v.01" />
                <path d="M9 18v.01" />
              </svg>
            </div>
          </div>
          <p className="text-lg text-gray-800 leading-relaxed flex-1">
            <span className="font-semibold">
              ACE(American Council on Exercise)
            </span>
            는 1983년에 설립된 미국의 비영리 피트니스 교육 기관입니다.
          </p>
        </div>

        {/* 두 번째 항목 */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
            <div className="text-white">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
                <line x1="8" x2="16" y1="22" y2="22" />
              </svg>
            </div>
          </div>
          <p className="text-lg text-gray-800 leading-relaxed flex-1">
            ACE는 과학적 근거 기반의 접근을 중시하며, 이를 통해 인류의 건강
            증진과 삶의 질 향상을 위한 교육과 자원을 제공하고 있습니다.
          </p>
        </div>

        {/* 세 번째 항목 */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
            <div className="text-white">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                <line x1="12" x2="12" y1="22.08" y2="12" />
              </svg>
            </div>
          </div>
          <p className="text-lg text-gray-800 leading-relaxed flex-1">
            ACE는 전문적인 헬스클럽뿐 아니라 각종 커뮤니티, 공공기관, 기업,
            의료시설 등 다양한 장소에서 사람들이 건강한 라이프스타일을 실천할 수
            있도록 다양한 프로그램과 자원을 제공합니다.
          </p>
        </div>

        {/* 네 번째 항목 */}
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
            <div className="text-white">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </div>
          </div>
          <p className="text-lg text-gray-800 leading-relaxed flex-1">
            ACE는 세계보건기구(WHO)와 협력하여 규모 있는 건강 증진 캠페인을
            진행하고, 지역사회와 의료기관, 기업 등과의 파트너십을 통해 건강한
            생활습관을 촉진하는 다양한 프로젝트를 운영 중입니다.
          </p>
        </div>
      </div>

      {/* 첫 번째 섹션 신청하기 버튼 */}
      <div className="text-center mt-12">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
          신청하기
        </button>
      </div>
    </section>
  )
}

export default AceInfo1
