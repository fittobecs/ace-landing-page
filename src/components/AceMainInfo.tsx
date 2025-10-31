const AceMainInfo: React.FC = () => {
  return (
    <div id="features" className="w-full p-8 md:p-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-3 leading-tight">
            세계적으로 인정받는 퍼스널 트레이너 자격증
          </h1>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 leading-tight">
            지금 바로 전 세계 90,000명 이상의 전문가들과 함께하세요.
          </h1>

          <div className="relative w-full gap-y-4">
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ZQsxoixJ2TE"
                title="FMS"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-center">
          {/* First Section */}
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              <br />
              Ace에 관심을 가진 모든 분들 환영합니다.
              <br />
              모두를 위한 건강한 세상을 목표로
              <br />
              <span className="font-semibold">
                &quot;과학에 기반하고, 실행 가능하며, 모든 사람이 접근할 수
                있어야 한다.&quot;
              </span>
              <br />
              라는 원칙과 함께 출발하는 ACE입니다.
            </p>
          </div>

          {/* Quote Attribution */}
          <div className="flex justify-center">
            <div className="pb-2">
              <p className="text-base md:text-lg font-medium text-gray-800 tracking-wide">
                - ACE의 비전 -
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AceMainInfo
