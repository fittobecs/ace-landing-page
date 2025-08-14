"use client"

import React from "react"

const Logos: React.FC = () => {
  const certifications = [
    {
      id: "fms-l1",
      name: "FMS L1",
      url: "/certifications/fms-l1",
      logo: "FMS L1",
    },
    {
      id: "fms-l2",
      name: "FMS L2",
      url: "/certifications/fms-l2",
      logo: "FMS L2",
    },
    {
      id: "sfma",
      name: "SFMA",
      url: "/certifications/sfma",
      logo: "SFMA",
    },
    {
      id: "dvrt-l1",
      name: "DVRT L1",
      url: "/certifications/dvrt-l1",
      logo: "DVRT L1",
    },
    {
      id: "dvrt-l2",
      name: "DVRT L2",
      url: "/certifications/dvrt-l2",
      logo: "DVRT L2",
    },
  ]

  const handleLogoClick = (url: string) => {
    window.location.href = url
  }

  return (
    <section className="py-16 px-5 bg-white">
      {/* 제목 */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          ACE 인정 지속교육 과정(CEC)
        </h2>
      </div>

      {/* 로고 컨테이너 */}
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden">
          {/* 애니메이션 컨테이너 */}
          <div className="flex flex-nowrap animate-scroll-x">
            {/* 첫 번째 세트 */}
            <div className="flex flex-nowrap items-center justify-center">
              {certifications.map((cert) => (
                <div
                  key={`first-${cert.id}`}
                  className="flex-shrink-0 mx-8 max-md:mx-3 max-md:w-[16vw] max-md:min-w-[80px] w-40 cursor-pointer transform transition-transform duration-300 hover:scale-110"
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 h-24 flex items-center justify-center border border-gray-200">
                    <span className="text-gray-600 font-medium text-center text-sm">
                      {cert.logo}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 두 번째 세트 (무한 반복용) */}
            <div className="flex flex-nowrap items-center justify-center">
              {certifications.map((cert) => (
                <div
                  key={`second-${cert.id}`}
                  className="flex-shrink-0 mx-8 max-md:mx-3 max-md:w-[16vw] max-md:min-w-[80px] w-40 cursor-pointer transform transition-transform duration-300 hover:scale-110"
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 h-24 flex items-center justify-center border border-gray-200">
                    <span className="text-gray-600 font-medium text-center text-sm">
                      {cert.logo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 설명 텍스트 */}
      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm max-w-3xl mx-auto">
          ACE(American Council on Exercise)가 공식 인정하는 지속교육 과정입니다.
          각 과정을 통해 전문성을 향상시키고 자격증을 유지하세요.
        </p>
      </div>

      {/* Tailwind CSS를 사용한 애니메이션 클래스 */}
      <style jsx global>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-x {
          animation: scroll-x 20s linear infinite;
        }

        .animate-scroll-x:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-x {
            animation: none;
          }
        }

        @media (max-width: 767px) {
          .animate-scroll-x {
            animation-duration: 15s; /* 모바일에서 적당히 느린 애니메이션 */
          }
        }

        @media (max-width: 400px) {
          .animate-scroll-x {
            animation-duration: 18s; /* 매우 좁은 화면에서 더 느린 애니메이션 */
          }
        }
      `}</style>
    </section>
  )
}

export default Logos
