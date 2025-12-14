import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Industries } from "@/components/industries"
import { VideoSection } from "@/components/video-section"
import { Pricing } from "@/components/pricing"
import { FAQs } from "@/components/faqs"
import { Contact } from "@/components/contact"
import { CareersSection } from "@/components/careers-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Industries />
        <VideoSection />
        <Pricing />
        <FAQs />
        <CareersSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
