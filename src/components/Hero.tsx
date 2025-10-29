import Image from "next/image"
import React from "react"

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 md:h-[650px] sm:h-[350px] h-[300px] pt-[77px] md:pt-[140px]"
    >
      <div className="relative w-full h-full">
        {/* 이미지를 감쌀 컨테이너 */}
        <Image
          src="/images/main_logo_no.png"
          fill
          alt="picture of fms-academy-header"
          className="object-cotain" // 또는 object-contain
        />
      </div>

      {/* 오버레이 텍스트 */}
      <div className="absolute left-1 md:left-11 flex flex-col justify-left items-left text-left px-4">
        <div className="relative w-20 h-7 md:w-60 md:h-16  mb-4">
          <Image
            src="/images/ace_white.png"
            fill
            alt="DVRT Logo"
            className=""
          />
        </div>
        <p className="text-sm md:text-xl text-white drop-shadow-lg">
          미국 운동 협의회 (ACE: American Council on Exercise)가
        </p>
        <p className="text-sm md:text-xl text-white drop-shadow-lg">
          제공하는 세계적으로 인정받는 퍼스널 트레이너 자격인증 프로그램
        </p>
      </div>
    </section>
  )
}

export default Hero
