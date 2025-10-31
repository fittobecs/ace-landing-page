import Image from "next/image"

const AceWhatType: React.FC = () => {
  return (
    <section id="AceWhatType" className="max-w-4xl mx-auto pt-24 bg-white px-4">
      {/* ACE CPT 제목 */}
      <div className="relative mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative z-10 text-center">
          ACE 자격증 종류?
        </h1>
        <div className="w-full max-w-md mx-auto h-1 bg-red-400 rounded-full"></div>
      </div>

      <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <Image
          src="/images/red_mark.png"
          alt="red_mark"
          width={150}
          height={150}
          className="items-center justify-center mx-auto"
        />
        <Image
          src="/images/green_mark.png"
          alt="green mark"
          width={150}
          height={150}
          className="items-center justify-center mx-auto"
        />
        <Image
          src="/images/black_mark.png"
          alt="black mark"
          width={150}
          height={150}
          className="items-center justify-center mx-auto"
        />
        <Image
          src="/images/blue_mark.png"
          alt="blue mark"
          width={150}
          height={150}
          className="items-center justify-center mx-auto"
        />
      </div>

      <div className="relative flex items-center">
        <Image
          src="/images/Personal Trainer.png"
          alt="Personal Trainer"
          width={500}
          height={300}
          className="mx-auto w-full max-w-md h-auto"
        />
      </div>
      <div>
        {/* 설명 섹션 */}
        <p className="text-3xl md:text-4xl text-gray-800 leading-relaxed mt-10 text-center px-4 font-bold">
          한국에서는 현재 ACE의 대표 자격증인 ACE-CPT(Certified Personal
          Trainer) 교육을 제공 합니다.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mt-8 text-center px-4">
          이 과정은 고객의 전반적인 웰빙(신체적 건강, 심리적 동기부여, 생활습관
          개선 등)을 중심적으로 다루며, <br className="hidden md:block" />
          실전에서 바로 활용할 수 있는 실무 중심의 커리큘럼을 구성하고 있습니다.
        </p>
      </div>
      <div>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mt-8 text-center px-4">
          <span className="font-semibold">준비기간 | </span>약 2~3개월로 비교적
          짧음 (신규 진입자도 효율적으로 자격 취득가능)
        </p>
      </div>
      {/* 이미지 섹션 - 반응형 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10 px-4">
        {/* 이미지 1 */}
        <div className="relative">
          <Image
            src="/images/Health Coach Black.png"
            alt="Health Coach"
            width={220}
            height={140}
            className="mx-auto w-full max-w-[220px] h-auto rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-semibold text-lg drop-shadow-lg text-center">
              Preparing <br />
              for the launch
            </p>
          </div>
        </div>

        {/* 이미지 2 */}
        <div className="relative">
          <Image
            src="/images/Group Fitness Instructor Black.png"
            alt="Group Fitness Instructor"
            width={220}
            height={140}
            className="mx-auto w-full max-w-[220px] h-auto rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-semibold text-lg drop-shadow-lg text-center">
              Preparing <br />
              for the launch
            </p>
          </div>
        </div>

        {/* 이미지 3 */}
        <div className="relative">
          <Image
            src="/images/Medical Exercise Specialist Black.png"
            alt="Medical Exercise Specialist"
            width={220}
            height={140}
            className="mx-auto w-full max-w-[220px] h-auto rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-semibold text-lg drop-shadow-lg text-center">
              Preparing <br />
              for the launch
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AceWhatType
