"use client"
import React from "react"
import LogoSlider from "./LogoSlider"

const TopLogos: React.FC = () => {
  return (
    <div className="w-full py-8">
      <div className=" mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 tracking-wide">
            ACE사 자격증
          </h2>
        </div>

        {/* Navigation Container */}
        <div className="relative flex items-center justify-center">
          <LogoSlider />
        </div>
      </div>
    </div>
  )
}

export default TopLogos
