import Image from "next/image"
import React from "react"

const Hero: React.FC = () => {
  return (
    <section
      id="hero_mobile"
      className="relative flex items-center justify-center pb-0 h-[650px] pt-[77px] md:hidden"
    >
      <div className="relative w-full h-full min-[550px]:hidden">
        {/* 이미지를 감쌀 컨테이너 */}
        <Image
          src="/images/hero_mobile.png"
          fill
          alt="picture of fms-academy-header"
          className="object-fill"
        />
      </div>

      <div className="relative w-full h-full max-[549px]:hidden">
        {/* 이미지를 감쌀 컨테이너 */}
        <Image
          src="/images/hero_tablet.png"
          fill
          alt="picture of fms-academy-header"
          className="object-fill"
        />
      </div>
      {/* 검은 오버레이 (투명도 조절 가능) */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* 오버레이 텍스트 */}
      <div className="absolute flex flex-col justify-center items-center text-center px-4">
        <div className="relative w-28 h-7 mb-4 z-50">
          <Image src="/images/ace_white.png" fill alt="ACE Logo" className="" />
        </div>
        <p className="text-lg text-white drop-shadow-lg max-[450px]:hidden">
          미국 운동 협의회 (ACE: American Council on Exercise)가
        </p>
        <p className="text-lg text-white drop-shadow-lg max-[450px]:hidden">
          제공하는 세계적으로 인정받는 퍼스널 트레이너 자격인증 프로그램
        </p>

        <p className="text-lg text-white drop-shadow-lg min-[451px]:hidden">
          미국 운동 협의회 (ACE: American Council on Exercise)가 제공하는
          세계적으로 인정받는 퍼스널 트레이너 자격인증 프로그램
        </p>
      </div>
    </section>
  )
}

export default Hero
