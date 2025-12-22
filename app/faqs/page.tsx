import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FAQs } from "@/components/faqs"

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* FAQs Section */}
        <FAQs />
      </main>
      <Footer />
    </div>
  )
}
