import { IMenuItem, ISocials } from "@/types"

export const footerDetails: {
  subheading: string
  quickLinks: IMenuItem[]
  email: string
  telephone: string
  socials: ISocials
} = {
  subheading:
    "미국운동협의회(ACE: American Council on Exercise)가 제공하는 세계적으로 인정받는 퍼스널 트레이너 자격인증 프로그램을(Certified Personal Trainer) 취득하여 전 세계 90,000명 이상의 전문가들과 함께하세요.",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
  ],
  email: "fmskorea@fittobe.com",
  telephone: "070-4632-3651",
  socials: {
    youtube: "https://www.youtube.com/@FMS_KOREA",
    instagram: "https://www.instagram.com/fmskorea/",
    blog: "https://facebook.com",
    linkedin: "https://www.linkedin.com",
  },
}
