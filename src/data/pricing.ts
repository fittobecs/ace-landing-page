import { IPricing } from "@/types"

export const tiers: IPricing[] = [
  {
    name: "시험 + 교재",
    price: "860,000원",
    features: [],
  },
  {
    name: "시험 + 교재 + 연수",
    price: "990,000원",
    features: ["연수 과정(줌 실시간)은 개별 상품과 동일"],
  },
  {
    name: "연수",
    price: "300,000원",
    features: [
      "연수 과정 4주 진행 - 회당 1.5시간, 총 6시간",
      "시험 + 교재를 구매한 사람만 구매 가능",
      "교재 제공은 별도로 되지 않음",
    ],
  },
]
