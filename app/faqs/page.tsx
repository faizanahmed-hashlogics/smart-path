import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FAQs } from "@/components/faqs"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, Search, HelpCircle, FileQuestion } from "lucide-react"

export default function FAQsPage() {
  const heroLogo = "/images/transparent%20logo%20files-02.png" // not used in hero visual

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero: centered with search */}
        <section className="relative border-b border-border bg-card">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-card/20 to-card" />
          <Container>
            <div className="py-16 md:py-24 text-center max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">FAQs</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Questions we’re asked often</h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                From timelines and documentation to budgets and engagement models—answers for founders and enterprise leaders.
              </p>
              <div className="relative mt-8 max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search FAQs (timelines, pricing, documents)" className="pl-10" />
              </div>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {["Timelines", "Documents", "Budgets", "Engagement"].map((p) => (
                  <span key={p} className="text-xs rounded-full border border-border bg-background/70 px-3 py-1">{p}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3 justify-center">
                <Link href="#faqs">
                  <Button size="lg" className="inline-flex items-center gap-2">
                    Browse FAQs
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="inline-flex items-center gap-2">
                    Ask a question
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs Section */}
        <FAQs />
      </main>
      <Footer />
    </div>
  )
}
