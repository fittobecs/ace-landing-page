import AceInfo1 from "@/components/AceInfo1"
import AceInfo2 from "@/components/AceInfo2"
import Container from "@/components/Container"
import CptComparison from "@/components/CptComparison"
import CTA from "@/components/CTA"
import FAQ from "@/components/FAQ"
import Hero from "@/components/Hero"
import ImageBlocks from "@/components/ImageBlocks"
import Logos from "@/components/Logos"
import NCCACertificationComponent from "@/components/NCCACertification"
import Pricing from "@/components/Pricing/Pricing"
import Section from "@/components/Section"

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <AceInfo1 />
        <AceInfo2 />
        <CptComparison />
        <NCCACertificationComponent />
        <ImageBlocks />
        <Logos />
        <Section
          id="pricing"
          title="가격 구성"
          description="콤보 구매시 할인 구매 가능"
        >
          <Pricing />
          <div className="w-full max-lg:text-center lg:text-right mt-3">
            <span>*단체 시험 별도 문의 부탁드립니다.</span>
          </div>
        </Section>
        <FAQ />
        <CTA />
      </Container>
    </>
  )
}

export default HomePage
