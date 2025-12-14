import { Pricing } from "@/components/pricing"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
