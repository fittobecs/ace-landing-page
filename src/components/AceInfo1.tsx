import React from "react"

const AceInfo1: React.FC = () => {
  return (
    <section id="AceArticle1" className="max-w-4xl mx-auto pt-32 bg-white">
      {/* 제목 섹션 */}
      <div className="relative mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 relative z-10 text-center">
          ACE는 어떤 단체인가요?
        </h1>
        <div className="w-full max-w-md mx-auto h-1 bg-red-400 rounded-full"></div>
      </div>

      {/* 콘텐츠 섹션 */}
      <div className="space-y-8">
        {/* 첫 번째 항목 */}
        <div className="flex items-start gap-6">
          <img src="/images/ace_icon_1.png" width={80} height={80}></img>
          <p className="text-lg text-gray-800 leading-relaxed flex-1 pt-2">
            <span className="font-semibold">
              ACE(American Council on Exercise)
            </span>
            는{" "}
            <span className="font-semibold">
              1983년에 설립된 미국의 비영리 피트니스 교육 기관
            </span>
            입니다.
          </p>
        </div>

        {/* 두 번째 항목 */}
        <div className="flex items-start gap-6">
          <img src="/images/ace_icon_2.png" width={80} height={80}></img>
          <p className="text-lg text-gray-800 leading-relaxed flex-1 pt-2">
            ACE는{" "}
            <span className="font-semibold">
              과학적 근거 기반의 접근을 중시
            </span>
            하며, 이를 통해 인류의 건강 증진과 삶의 질 향상을 위한 교육과 자원을
            제공하고 있습니다.
          </p>
        </div>

        {/* 세 번째 항목 */}
        <div className="flex items-start gap-6">
          <img src="/images/ace_icon_3.png" width={80} height={80}></img>
          <p className="text-lg text-gray-800 leading-relaxed flex-1 pt-2">
            ACE는{" "}
            <span className="font-semibold">
              전통적인 헬스클럽뿐 아니라 각종 커뮤니티, 공공기관, 기업, 의료시설
              등 다양한 장소
            </span>
            에서 사람들이 건강한 라이프스타일을 실천할 수 있도록 다양한
            프로그램과 자원을 제공합니다.
          </p>
        </div>

        {/* 네 번째 항목 */}
        <div className="flex items-start gap-6">
          <img src="/images/ace_icon_4.png" width={80} height={80}></img>
          <p className="text-lg text-gray-800 leading-relaxed flex-1 pt-2">
            ACE는{" "}
            <span className="font-semibold">
              세계보건기구(WHO)와 협력하여 규모 있는 건강 증진 캠페인을 진행
            </span>
            하고, 지역사회와 의료기관, 기업 등과의 파트너십을 통해 건강한
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
