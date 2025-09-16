import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Process } from "@/components/process"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ClipboardCheck, PieChart, BarChart3, ShieldCheck } from "lucide-react"

export default function ProcessPage() {
  const heroLogo = "/images/transparent%20logo%20files-02.png" // not used in hero; visual uses step cards

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
                  <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">How we work</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Proven, transparent process</h1>
                  <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground">
                    From framing objectives to evidence collection, analysis and clear recommendations—our method ensures
                    decisions withstand scrutiny and deliver results.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                    <Link href="#process">
                      <Button size="lg" className="inline-flex items-center gap-2">
                        Explore the steps
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/#contact">
                      <Button size="lg" variant="outline" className="inline-flex items-center gap-2">
                        Start a project
                      </Button>
                    </Link>
                  </div>
                </div>
                {/* Visual column: staggered step cards */}
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-2xl border border-border/60 bg-gradient-to-br from-background/70 to-muted/40 shadow-sm p-6 md:p-10 overflow-hidden">
                    <div className="absolute -top-12 -right-12 size-40 rounded-full bg-primary/10 blur-2xl" />
                    <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-primary/10 blur-2xl" />
                    <div className="relative grid gap-4">
                      {[
                        { n: '01', title: 'Frame', desc: 'Objectives & metrics', Icon: ClipboardCheck },
                        { n: '02', title: 'Evidence', desc: 'Market & internal data', Icon: PieChart },
                        { n: '03', title: 'Analyse', desc: 'Models & scenarios', Icon: BarChart3 },
                        { n: '04', title: 'Recommend', desc: 'Options & roadmap', Icon: ShieldCheck },
                      ].map((s, i) => (
                        <div key={s.n} className={`rounded-xl border border-border/60 bg-background/80 p-4 flex items-start gap-3 shadow-sm ${i % 2 === 1 ? 'translate-x-4' : ''}`}>
                          <s.Icon className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <div className="text-xs text-primary font-semibold">{s.n}</div>
                            <div className="text-sm font-semibold">{s.title}</div>
                            <div className="text-xs text-muted-foreground">{s.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <Process />
      </main>
      <Footer />
    </div>
  )
}
