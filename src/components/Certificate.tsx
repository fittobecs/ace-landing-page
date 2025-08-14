import React from "react"

const Certificate: React.FC = () => {
  const leftCareers = [
    "Virtual Coach/Online Trainer",
    "Athletic Coach",
    "Fitness Director",
    "Gym Owner/Self-Employed",
    "Corrective Exercise & Injury Prevention Specialist",
  ]

  const rightCareers = [
    "Gym/Health Club",
    "Fitness Studio",
    "Healthcare/Outpatient Clinic",
    "Community Center",
    "University/Campus",
  ]
  return (
    <section className="max-w-7xl mx-auto pt-16 md:pt-32 bg-white px-4">
      {/* 카드 형태의 활용 분야 섹션 */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* 왼쪽 카드: 할 수 있는 것 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ACE CPT 자격증으로 할 수 있는 것
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-5">
            {leftCareers.map((career, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r  bg-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg leading-relaxed font-medium group-hover:text-gray-900 transition-colors">
                  {career}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽 카드: 일할 수 있는 곳 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ACE CPT 일할 수 있는 곳
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r bg-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-5">
            {rightCareers.map((workplace, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r bg-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg leading-relaxed font-medium group-hover:text-gray-900 transition-colors">
                  {workplace}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificate
