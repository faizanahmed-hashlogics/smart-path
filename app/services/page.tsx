import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Services } from "@/components/services"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShieldCheck, BarChart3, FileSearch, ArrowRight, CheckCircle2 } from "lucide-react"

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero: full-bleed banner with overlay */}
        <section
          className="relative min-h-[60vh] flex items-center border-b border-border"
          style={{ backgroundImage: "url(/images/dubai-skyline.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
          <Container>
            <div className="relative z-10 py-16 md:py-24">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Our Expertise</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Financial Consultancy Services</h1>
                <p className="mt-3 text-base sm:text-lg text-accent">
                  Your Financial vision, our Expertise
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                  Accounting, tax, VAT, transfer pricing, internal audit, business advisory, strategy & transformation, M&A support,
                  risk advisory, technology advisory, and financial management—tailored to your needs.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Accounting", "Tax", "VAT", "Transfer Pricing", "Internal Audit", "Advisory", "Strategy", "M&A", "Risk", "Technology", "Finance"].map((p) => (
                    <span key={p} className="text-xs rounded-full border border-border bg-background/70 px-3 py-1">{p}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="#services">
                    <Button size="lg" className="inline-flex items-center gap-2">
                      Explore Services
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button size="lg" variant="outline" className="inline-flex items-center gap-2">
                      Talk to an Expert
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Highlights */}
        <section className="border-b border-border bg-background/50">
          <Container>
            <div className="grid gap-6 md:grid-cols-3 py-10">
              <div className="rounded-xl border border-border/60 bg-card/50 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Regulatory Readiness</h3>
                </div>
                <p className="text-sm text-muted-foreground">Licensing pathways, compliance reviews, and risk controls aligned to UAE requirements.</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/50 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Data‑Driven Analysis</h3>
                </div>
                <p className="text-sm text-muted-foreground">Market sizing, financial modelling, and sensitivity testing to support investment decisions.</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/50 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FileSearch className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Transparent Deliverables</h3>
                </div>
                <p className="text-sm text-muted-foreground">Crisp reports, assumptions logs, and evidence appendices to withstand scrutiny.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <Services />
      </main>
      <Footer />
    </div>
  )
}
