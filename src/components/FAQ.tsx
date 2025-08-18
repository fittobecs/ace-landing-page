"use client"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { BiMinus, BiPlus } from "react-icons/bi"

import { faqs } from "@/data/faq"
import SectionTitle from "./SectionTitle"

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="">
          <p className="hidden lg:block text-foreground-accent">FAQ&apos;S</p>
          <SectionTitle>
            <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">
              자주 묻는 질문(FAQ)
            </h2>
          </SectionTitle>
          <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
            문의 사항은 카카오톡으로 부탁드립니다.
          </p>
          <a
            href="https://pf.kakao.com/_dGnxgxj/chat"
            target="_blank"
            className="mt-3 block text-xl lg:text-4xl text-[#e2363e] font-semibold hover:underline text-center lg:text-left"
          >
            카카오톡 문의 바로가기
          </a>
        </div>

        <div className="w-full lg:max-w-2xl mx-auto border-b">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                      <span className="text-2xl font-semibold">
                        {faq.question}
                      </span>
                      {open ? (
                        <BiMinus className="w-5 h-5 text-[#e2363e]" />
                      ) : (
                        <BiPlus className="w-5 h-5 text-[#e2363e]" />
                      )}
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                      {faq.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 text-center">
        <a
          href="https://www.fittobe.ac/board/index.jsp?code=faq"
          target="_blank"
          className="inline-flex items-center text-lg text-[#e2363e] font-semibold hover:underline"
        >
          <BiPlus className="w-5 h-5 mr-2" />
          더보기
        </a>
      </div>
    </section>
  )
}

export default FAQ
