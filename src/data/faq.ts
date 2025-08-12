import { IFAQ } from "@/types"
import { siteDetails } from "./siteDetails"

export const faqs: IFAQ[] = [
  {
    question: `시험 문항이 몇 문항 인가요?`,
    answer:
      "Absolutely. We use bank-level encryption to protect your data and never store your login information. Plus, our biometric authentication adds an extra layer of security.",
  },
  {
    question: `재시험 비용이 어떻게 되나요? 할인 있나요?`,
    answer:
      "Absolutely! Your Finwise account syncs seamlessly across all your devices - smartphone, tablet, and computer.",
  },
  {
    question: "환불 규정이 어떻게 되나요?",
    answer: `Yes! ${siteDetails.siteName} supports connections with over 10,000 financial institutions worldwide. Simply log in through our secure portal to link your accounts.`,
  },
  {
    question: "fms 아카데미 회원인데 할인이 있나요?",
    answer:
      "Not at all! Our expert-curated portfolios and educational resources make investing accessible to everyone, regardless of experience level.",
  },
  {
    question: "교재 PDF 파일로 받을 수 있나요?",
    answer:
      "Our dedicated support team is available 24/7 via chat or email. Plus, we offer extensive in-app tutorials and a comprehensive knowledge base to help you make the most of Finwise.",
  },
]
