import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { InsightsSection } from "@/components/insights-section"
import { OurWorkSection } from "@/components/our-work-section"
import { CareersSection } from "@/components/careers-section"
import { TrustRow } from "@/components/trust-row"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { FAQs } from "@/components/faqs"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <TrustRow />
        <InsightsSection />
        <OurWorkSection />
        <CareersSection />
        <About />
        <Process />
        <Stats />
        <Testimonials />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
