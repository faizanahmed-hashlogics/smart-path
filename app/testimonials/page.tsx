import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export default function TestimonialsPage() {
  const heroLogo = "/images/transparent%20logo%20files-02.png" // not used in hero visual

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero (two-column like About) */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-card border-b border-border">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-card/20 to-card" />
          <Container>
            <div className="py-16 md:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text column */}
                <div className="order-2 lg:order-1 text-center lg:text-start">
                  <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Client stories</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Proven results across the UAE</h1>
                  <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground">
                    Hear from founders and enterprise leaders we have supported—from market entry and licensing to
                    feasibility, audits, and operational excellence.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                    <Link href="#testimonials">
                      <Button size="lg" className="inline-flex items-center gap-2">
                        Read testimonials
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/#contact">
                      <Button size="lg" variant="outline" className="inline-flex items-center gap-2">
                        Start a conversation
                      </Button>
                    </Link>
                  </div>
                </div>
                {/* Visual column: stacked testimonial previews */}
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-2xl border border-border/60 bg-gradient-to-br from-background/70 to-muted/40 shadow-sm p-6 md:p-10 overflow-hidden">
                    <div className="absolute -top-12 -right-12 size-40 rounded-full bg-primary/10 blur-2xl" />
                    <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-primary/10 blur-2xl" />
                    <div className="relative grid gap-4">
                      {[
                        { name: "Sarah Ahmed", role: "CEO, TechStart", text: "De-risked our market entry and validated investment with a clear business case." },
                        { name: "Michael Chen", role: "Founder, GrowthCorp", text: "Their feasibility work and modelling helped us secure stakeholder alignment." },
                        { name: "Fatima Al-Rashid", role: "COO, Regional Dynamics", text: "Process audit delivered measurable OPEX savings and better KPIs." },
                      ].map((t, i) => (
                        <div key={i} className={`rounded-xl border border-border/60 bg-background/80 p-4 shadow-sm ${i % 2 === 1 ? 'translate-x-3' : ''}`}>
                          <div className="flex items-center gap-1 text-primary mb-1" aria-label="rating">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-sm text-foreground">“{t.text}”</p>
                          <p className="mt-2 text-xs text-muted-foreground">{t.name} • {t.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
