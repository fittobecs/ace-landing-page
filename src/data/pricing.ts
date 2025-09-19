import { IPricing } from "@/types"

export const tiers: IPricing[] = [
  {
    name: "시험 + 교재",
    link: "https://www.fittobe.ac/course/course_view.jsp?id=184373&cid=118148#course-view-184373",
    price: "860,000원",
    features: ["한국어 시험", "한국어 번역 교재"],
  },
  {
    name: "시험 + 교재 + 연수",
    link: "https://www.fittobe.ac/course/course_view.jsp?id=184374&cid=118148#course-view-184374",
    price: "990,000원",
    features: [
      "연수과정(줌 실시간)은 개별 상품과 동일",
      "한국어 교재 한국 배송",
      "한국어 시험",
    ],
  },
  {
    name: "연수",
    link: "https://www.fittobe.ac/course/course_view.jsp?id=186913&cid=118148#course-view-186913",
    price: "300,000원",
    features: [
      "연수 과정 4주 진행 - 회당 2시간, 총 8시간",
      "시험 + 교재를 구매한 사람만 구매 가능",
      "교재 제공은 별도로 되지 않음",
    ],
  },
]
