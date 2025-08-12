import AceInfo1 from "@/components/AceInfo1"
import AceInfo2 from "@/components/AceInfo2"
import Certificate from "@/components/Certificate"
import Container from "@/components/Container"
import CptComparison from "@/components/CptComparison"
import CTA from "@/components/CTA"
import FAQ from "@/components/FAQ"
import Hero from "@/components/Hero"
import ImageBlocks from "@/components/ImageBlocks"
import Logos from "@/components/Logos"

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <AceInfo1 />
        <AceInfo2 />
        <CptComparison />
        <Certificate />
        <ImageBlocks />
        <Logos />
        <FAQ />
        <CTA />
      </Container>
    </>
  )
}

export default HomePage
