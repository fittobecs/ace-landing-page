import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full pb-0 pt-32 md:pt-40">
      {/* 전체 너비 메인 컨테이너 */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* 배경 이미지1 */}
        <div className="absolute inset-0">
          <Image
            src="/images/main_hero.jpg"
            alt="ACE CPT Team Training"
            fill
            className="object-cover"
            quality={85}
            priority
          />

          {/* 이미지 위 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* 빨간색 삼각형 오버레이 - 데스크탑 */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {/* 왼쪽 상단 삼각형 */}
          <div
            className="absolute top-0 left-0 opacity-90"
            style={{
              width: "0",
              height: "0",
              borderStyle: "solid",
              borderWidth: "500px 0 0 300px",
              borderColor: "transparent transparent transparent #e53e3e",
            }}
          />

          {/* 오른쪽 상단 삼각형 */}
          <div
            className="absolute top-0 right-0 opacity-90"
            style={{
              width: "0",
              height: "0",
              borderStyle: "solid",
              borderWidth: "0 300px 500px 0",
              borderColor: "transparent #e53e3e transparent transparent",
            }}
          />
        </div>

        {/* 빨간색 삼각형 오버레이 - 모바일 */}
        <div className="absolute inset-0 pointer-events-none md:hidden">
          {/* 왼쪽 상단 삼각형 */}
          <div
            className="absolute top-0 left-0 opacity-90"
            style={{
              width: "0",
              height: "0",
              borderStyle: "solid",
              borderWidth: "400px 0 0 200px",
              borderColor: "transparent transparent transparent #e2363e",
            }}
          />

          {/* 오른쪽 상단 삼각형 */}
          <div
            className="absolute top-0 right-0 opacity-90"
            style={{
              width: "0",
              height: "0",
              borderStyle: "solid",
              borderWidth: "0 200px 400px 0",
              borderColor: "transparent #e2363e transparent transparent",
            }}
          />
        </div>

        {/* 컨텐츠 */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider drop-shadow-lg">
              ACE CPT
            </h1>
            <p className="text-lg md:text-xl leading-relaxed drop-shadow-md mb-8">
              미국운동협의회(ACE: American Council on Exercise)가
              <br className="hidden md:block" />
              제공하는 세계적으로 인정받는 퍼스널 트레이너 자격인증 프로그램
              <br className="hidden md:block" />
              <span className="font-semibold">
                (Certified Personal Trainer)
              </span>
              을 취득하여
              <br className="hidden md:block" />전 세계 90,000명 이상의
              전문가들과 함께하세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
