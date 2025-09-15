"use client"

import { REQUEST_URL } from "@/data/constant"
import React from "react"

interface CertificationData {
  organization: string
  certifications: string[]
}

const NCCACertificationComponent: React.FC = () => {
  const certificationData: CertificationData[] = [
    {
      organization: "ACE",
      certifications: [
        "ACE - CPT (Personal Trainer)",
        "ACE - CMES (Certified Medical Exercise Specialist)",
        "ACE - GFI (Group Fitness Instructor)",
        "ACE - HCC (Health Coach Certification)",
      ],
    },
    {
      organization: "NASM",
      certifications: ["NASM - CPT (Certified Personal Trainer)"],
    },
    {
      organization: "ACSM",
      certifications: [
        "ACSM - CPT (Certified Personal Trainer)",
        "ACSM - EP (Exercise Physiologist)",
        "ACSM - CEP (Certified Clinical Exercise Physiologist)",
      ],
    },
    {
      organization: "NSCA",
      certifications: [
        "NSCA - CPT (Certified Personal Trainer)",
        "NSCA - CSCS (Certified Strength and Conditioning Specialist)",
        "NSCA - TSAC-F (Tactical Strength and Conditioning - Facilitator)",
      ],
    },
  ]
  const handleClick = () => {
    window.open(REQUEST_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="max-w-6xl mx-auto pt-16 md:pt-32 bg-white px-4">
      {/* 제목 */}
      <div className="bg-gray-100 border border-gray-300 p-4">
        <h1 className="text-xl font-bold text-center text-gray-800">
          미국 국가 자격 인증 위원회 (NCCA) 인증 자격증
        </h1>
      </div>

      {/* 자격증 표 */}
      <div className="border border-gray-300 mb-8">
        {certificationData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 last:border-b-0">
            <div className="flex">
              {/* 기관명 */}
              <div className="bg-gray-50 border-r border-gray-300 p-4 w-32 flex items-center justify-center">
                <span className="font-semibold text-gray-700 text-lg">
                  {item.organization}
                </span>
              </div>

              {/* 자격증 목록 */}
              <div className="p-4 flex-1">
                {item.certifications.map((cert, certIndex) => (
                  <div key={certIndex} className="mb-2 last:mb-0">
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 설명 섹션 */}
      <div className="space-y-4 text-gray-700">
        <div>
          <h2 className="font-bold text-lg mb-2">
            *미국국가 자격 인증 위원회
            <br />
            (NCCA, National Commision for Certifying Agencies)
          </h2>
        </div>

        <div className="space-y-3 text-sm leading-relaxed">
          <p>
            NCCA는 자격증의 공신력을 판단하는 위원회로, 미국에서 전문 자격
            프로그램의 품질과 신뢰성을 보장하기 위해 인증하는 독립적인
            기관입니다.
          </p>

          <p>
            NCCA는 기관을 인증하는 것이 아니라, 그 기관이 발급하는
            &apos;자격증&apos; 자체를 인증하는 것으로 공신력을 보증하며, 한 기관
            내에 인증 되는 자격증과 인증을 받지 못한 자격증이 함께 있을 수
            있습니다.<br></br>그렇기에 NCCA의 인증을 받은 자격증은 높은 수준의
            전문성을 갖춘 것으로 인정받습니다.
          </p>

          <p className="font-semibold">
            ACE는 기관 내 전 과정을 NCCA의 엄격한 인증을 받았습니다.
          </p>
        </div>
      </div>

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

export default NCCACertificationComponent
