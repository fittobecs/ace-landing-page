import { IPricing } from "@/types"

export const mobileTiers: IPricing[] = [
  {
    name: "시험 + 교재 + 연수",
    link: "https://www.fittobe.ac/course/course_view.jsp?id=201455&cid=118148&ln=ace_cpt&gn=ace_main#course-view-201455",
    previousPrice: "1,310,000원",
    price: "990,000원",
    features: [
      "연수과정(줌 실시간)은 개별 상품과 동일",
      "한국어 교재 한국 배송",
      "한국어 시험",
    ],
  },
  {
    name: "시험 + 교재",
    link: "https://www.fittobe.ac/course/course_view.jsp?id=201456&cid=118148&ln=ace_main#course-view-201456",
    price: "860,000원",
    features: ["한국어 시험", "한국어 번역 교재"],
  },
]
