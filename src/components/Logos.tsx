"use client"

import { DVRT_L1_URL, NORMAL_LOG_URL } from "@/data/constant"
import Image from "next/image"
import React from "react"

const Logos: React.FC = () => {
  const certifications = [
    {
      id: "fms-l1",
      name: "FMS L1",
      url: NORMAL_LOG_URL,
      logo: "FMS L1",
      img: "/images/FMS L1.png",
    },
    {
      id: "dvrt-l1",
      name: "DVRT L1",
      url: DVRT_L1_URL,
      logo: "DVRT L1",
      img: "/images/DVRT L1.png",
    },
    {
      id: "fms-breathing",
      name: "FMS Breathing",
      url: NORMAL_LOG_URL,
      logo: "fms-breathing",
      img: "/images/FMS Breathing.png",
    },
    {
      id: "fms-l2",
      name: "FMS L2",
      url: NORMAL_LOG_URL,
      logo: "FMS L2",
      img: "/images/FMS L2.png",
    },
    {
      id: "fcs",
      name: "FCS",
      url: NORMAL_LOG_URL,
      logo: "FCS",
      img: "/images/FCS.png",
    },
  ]

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
                  className="flex-shrink-0 mx-8 w-40 transform transition-transform duration-300 hover:scale-110"
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${cert.name} 페이지로 이동`}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 h-24 flex items-center justify-center border border-gray-200"
                  >
                    <Image
                      src={cert.img}
                      width={160}
                      height={96}
                      alt={cert.name}
                      className="max-w-full h-auto mt-4"
                    />
                  </a>
                </div>
              ))}
            </div>

            {/* 두 번째 세트 (무한 반복용) */}
            <div className="flex flex-nowrap items-center justify-center">
              {certifications.map((cert) => (
                <div
                  key={`second-${cert.id}`}
                  className="flex-shrink-0 mx-8 w-40 transform transition-transform duration-300 hover:scale-110"
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${cert.name} 페이지로 이동`}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 h-24 flex items-center justify-center border border-gray-200"
                  >
                    <Image
                      src={cert.img}
                      width={160}
                      height={96}
                      alt={cert.name}
                      className="max-w-full h-auto mt-4"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 설명 텍스트 */}
      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm max-w-3xl mx-auto">
          핏투비아카데미에서 FMS아카데미 구입 시 FMS L1, L2, FCS, Breathing을
          포함한 자격 과정을 145만원에 1년간 무제한 수강 가능합니다.
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

        @media (max-width: 768px) {
          @keyframes scroll-x {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-224px * 5));
            }
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
            animation-duration: 10s; /* 모바일에서 더 빠른 애니메이션 */
          }
        }

        @media (max-width: 400px) {
          .animate-scroll-x {
            animation-duration: 12s; /* 매우 좁은 화면에서 빠른 애니메이션 */
          }
        }
      `}</style>
    </section>
  )
}

export default Logos
