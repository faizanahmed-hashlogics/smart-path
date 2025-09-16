"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ClipboardCheck, PieChart, ShieldCheck, Building2, BarChart3, ArrowRight } from "lucide-react"

// Small intersection observer hook
function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true)
        })
      },
      { root: null, rootMargin: "0px", threshold: 0.2, ...(options || {}) }
    )
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [options])

  return { ref, inView }
}

// Lightweight parallax hook (translateY based on scroll)
function useParallax(ref: React.RefObject<HTMLElement>, speed = 0.2) {
  const [y, setY] = useState(0)
  useEffect(() => {
    const handle = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const viewportH = window.innerHeight || document.documentElement.clientHeight
      const progress = 1 - Math.min(Math.max((rect.top + rect.height) / (viewportH + rect.height), 0), 1)
      setY(progress * 100 * speed)
    }
    handle()
    window.addEventListener("scroll", handle, { passive: true })
    window.addEventListener("resize", handle)
    return () => {
      window.removeEventListener("scroll", handle)
      window.removeEventListener("resize", handle)
    }
  }, [ref, speed])
  return y
}

export default function AboutPage() {
  // Assets
  const heroLogo = useMemo(() => "/images/transparent%20logo%20files-02.png", [])
  const gridImages = useMemo(
    () => [
      { src: "/images/hero-slide-1.jpeg", alt: "Advisory 1" },
      { src: "/images/hero-slide-2.jpeg", alt: "Advisory 2" },
      { src: "/images/dubai-skyline.webp", alt: "Dubai skyline" },
    ],
    []
  )

  // Parallax refs
  const textParallaxRef = useRef<HTMLDivElement | null>(null)
  const textY = useParallax(textParallaxRef as React.RefObject<HTMLElement>, 0.35)

  const peopleRefLeft = useRef<HTMLDivElement | null>(null)
  const peopleRefRight = useRef<HTMLDivElement | null>(null)
  const peopleYLeft = useParallax(peopleRefLeft as React.RefObject<HTMLElement>, 0.25)
  const peopleYRight = useParallax(peopleRefRight as React.RefObject<HTMLElement>, 0.15)
  const peopleRefCenter = useRef<HTMLDivElement | null>(null)
  const peopleYCenter = useParallax(peopleRefCenter as React.RefObject<HTMLElement>, 0.2)

  // Reveal hooks
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>()
  const { ref: ceoRef, inView: ceoInView } = useInView<HTMLDivElement>()
  const { ref: capsRef, inView: capsInView } = useInView<HTMLDivElement>()
  const { ref: methodRef, inView: methodInView } = useInView<HTMLDivElement>()
  const { ref: casesRef, inView: casesInView } = useInView<HTMLDivElement>()
  const { ref: accRef, inView: accInView } = useInView<HTMLDivElement>()

  // On mount, smoothly scroll to the About Us text section
  useEffect(() => {
    const t = window.setTimeout(() => {
      // Respect user motion preferences
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const el = document.getElementById("about-us")
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 800)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero: Brand + value proposition */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-card border-b border-border/60">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-card/20 to-card" />
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Text column */}
              <div className="order-2 lg:order-1 text-center lg:text-start">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  Trusted advisory for audits, feasibility and business cases
                </h1>
                <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground">
                  We help leaders validate investments, de‑risk market entry, and unlock operational value with
                  independent assessment and defensible analysis.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                  <Link href="#capabilities">
                    <Button size="lg" className="inline-flex items-center gap-2">
                      Explore capabilities
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button size="lg" variant="outline" className="inline-flex items-center gap-2">
                      Talk to an expert
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
                  {[{k:"15+ years", s:"Advisory"},{k:"200+", s:"Projects"},{k:"AED 500M+", s:"Advised"}].map((it)=> (
                    <div key={it.k} className="rounded-lg border border-border/60 bg-background/60 p-4 text-center">
                      <div className="text-lg md:text-xl font-extrabold text-primary">{it.k}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{it.s}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Visual column */}
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl border border-border/60 bg-background/60 shadow-sm p-6 md:p-10 overflow-hidden">
                  <div className="absolute -top-12 -right-12 size-40 rounded-full bg-primary/10 blur-2xl" />
                  <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-primary/10 blur-2xl" />
                  <div className="relative flex items-center justify-center">
                    <img
                      src={heroLogo}
                      alt="Smart Path Logo"
                      className="w-[180px] sm:w-[240px] md:w-[300px] opacity-95 select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax text section */}
        <section
          id="about-us"
          ref={textParallaxRef}
          className="relative py-24 md:py-32 bg-background border-b border-border/60 scroll-mt-24 md:scroll-mt-32"
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <div
              style={{ transform: `translateY(${textY}px)` }}
              className="transition-transform duration-300 will-change-transform"
            >
              <p className="text-center text-sm uppercase tracking-[0.2em] text-accent mb-4">About us</p>
              <h1 className="text-center text-3xl md:text-5xl font-bold mb-6">
                Clarity. Innovation. Reliability.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed">
                Headquartered in the UAE, Smart Path Consultancy helps entrepreneurs, startups, and enterprises
                navigate regulations, enter markets, and scale with confidence. With deep regional insight and a
                results-driven approach, we turn business goals into reality—at every stage of the journey.
              </p>
            </div>
          </div>
        </section>

        {/* Three pictures with animation */}
        <section className="py-20 md:py-24 bg-card border-b border-border/60">
          <div className="container mx-auto px-4">
            <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gridImages.map((img, idx) => (
                <div
                  key={img.src}
                  className={`overflow-hidden rounded-xl border border-border/60 bg-background/40 aspect-[4/3] shadow-sm transition-all duration-700 ${
                    gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our CEO */}
        <section className="py-20 md:py-24 bg-background border-b border-border/60">
          <div ref={ceoRef} className="container mx-auto px-4 max-w-4xl">
            <div
              className={`flex flex-col items-center text-center ${
                ceoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } transition-all duration-700`}
            >
              <div className="relative mb-6">
                <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-accent/40">
                  <img src="/placeholder-user.jpg" alt="Our CEO" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -inset-2 rounded-full -z-10 bg-accent/10 blur-xl" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">Ayesha Khan</h2>
              <p className="text-accent font-medium mb-3">Chief Executive Officer</p>
              <p className="text-muted-foreground max-w-2xl">
                With 15+ years advising organizations across the Middle East, Ayesha leads Smart Path with a focus on
                strategic clarity, execution rigor, and measurable client impact.
              </p>
            </div>
          </div>
        </section>

        {/* Our People with subtle parallax cards */}
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">Our people</p>
              <h3 className="text-3xl md:text-5xl font-bold">A team built for impact</h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div
                ref={peopleRefLeft}
                style={{ transform: `translateY(${peopleYLeft}px)` }}
                className="rounded-xl border border-border/60 bg-background/60 p-6 shadow-sm transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/placeholder-user.jpg"
                    alt="Consultant"
                    className="w-16 h-16 rounded-full object-cover ring-1 ring-border"
                  />
                  <div>
                    <p className="font-semibold">Omar Farooq</p>
                    <p className="text-sm text-muted-foreground">Principal Consultant</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Omar specializes in market entry and operational excellence, helping clients unlock sustainable growth
                  across the GCC.
                </p>
              </div>

              <div
                ref={peopleRefRight}
                style={{ transform: `translateY(${peopleYRight * -1}px)` }}
                className="rounded-xl border border-border/60 bg-background/60 p-6 shadow-sm transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/placeholder-user.jpg"
                    alt="Consultant"
                    className="w-16 h-16 rounded-full object-cover ring-1 ring-border"
                  />
                  <div>
                    <p className="font-semibold">Sara Al Mansoori</p>
                    <p className="text-sm text-muted-foreground">Engagement Manager</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Sara leads digital transformation programs, aligning technology investment with business outcomes.
                </p>
              </div>

              <div
                ref={peopleRefCenter}
                style={{ transform: `translateY(${peopleYCenter}px)` }}
                className="rounded-xl border border-border/60 bg-background/60 p-6 shadow-sm transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/placeholder-user.jpg"
                    alt="Consultant"
                    className="w-16 h-16 rounded-full object-cover ring-1 ring-border"
                  />
                  <div>
                    <p className="font-semibold">David Chen</p>
                    <p className="text-sm text-muted-foreground">Strategy Consultant</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  David partners with founders and enterprise leaders on growth strategy, GTM, and performance analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities for Audit / Feasibility / Case Studies */}
        <section id="capabilities" ref={capsRef} className="py-20 md:py-24 bg-background border-b border-border/60">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">Capabilities</p>
              <h3 className="text-3xl md:text-5xl font-bold">What we do best</h3>
              <p className="text-muted-foreground mt-3">Independent audit, rigorous feasibility studies, and evidence-led case work designed for confident decisions.</p>
            </div>
            <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${capsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {[
                { icon: ClipboardCheck, title: "Operational Audits", desc: "Process, compliance and performance audits against policy and regulation." },
                { icon: PieChart, title: "Feasibility Studies", desc: "Market sizing, demand analysis, cost models and sensitivity testing." },
                { icon: BarChart3, title: "Financial Modelling", desc: "3-statement models, cashflow scenarios, ROI and payback analyses." },
                { icon: Building2, title: "Market Entry & Licensing", desc: "Regulatory mapping, entity setup, and licensing pathways in the UAE." },
                { icon: ShieldCheck, title: "Risk & Controls", desc: "Risk assessment, mitigation planning and internal controls design." },
                { icon: CheckCircle2, title: "Implementation Support", desc: "PMO, change enablement and KPI tracking to realize value." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-border/60 bg-card/50 p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section ref={methodRef} className="py-20 md:py-24 bg-card border-b border-border/60">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">Methodology</p>
              <h3 className="text-3xl md:text-5xl font-bold">A clear, defendable approach</h3>
            </div>
            <ol className={`grid gap-6 md:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${methodInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {[
                { step: 1, title: "Frame", desc: "Define objectives, stakeholders and constraints. Establish success metrics." },
                { step: 2, title: "Evidence", desc: "Collect qualitative and quantitative inputs from market and internal sources." },
                { step: 3, title: "Analyse", desc: "Model scenarios, test assumptions and quantify sensitivities and risks." },
                { step: 4, title: "Recommend", desc: "Synthesize insights into clear options, roadmaps and investment cases." },
              ].map((s) => (
                <li key={s.step} className="rounded-xl border border-border/60 bg-background p-6">
                  <div className="text-2xl font-extrabold text-primary mb-2">{s.step.toString().padStart(2, "0")}</div>
                  <h4 className="font-semibold mb-1">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Case Studies */}
        <section ref={casesRef} className="py-20 md:py-24 bg-background border-b border-border/60">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">Case Studies</p>
              <h3 className="text-3xl md:text-5xl font-bold">Proven results, measurable impact</h3>
            </div>
            <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${casesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {[
                { title: "Retail Feasibility", outcome: "Validated AED 12M CAPEX with 24-month payback", detail: "Triangulated demand via traffic counts, surveys and competitor scans; stress-tested rent and margin assumptions." },
                { title: "Healthcare Licensing", outcome: "Fast-tracked licensing in free zone", detail: "De-risked pathway across authorities, aligned clinical scope and staffing ratios, and sequenced submissions." },
                { title: "Industrial Audit", outcome: "15% OPEX reduction", detail: "Process audit uncovered bottlenecks; implemented lean practices and vendor consolidation." },
              ].map((c, i) => (
                <div key={i} className="rounded-xl border border-border/60 bg-card/50 p-6 shadow-sm hover:shadow-md transition">
                  <h4 className="font-semibold text-lg mb-1">{c.title}</h4>
                  <p className="text-primary text-sm font-medium mb-2">{c.outcome}</p>
                  <p className="text-sm text-muted-foreground">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations & Partners */}
        <section ref={accRef} className="py-16 md:py-20 bg-card border-b border-border/60">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">Accreditations</p>
              <h3 className="text-2xl md:text-4xl font-bold">Trusted by regulators and partners</h3>
            </div>
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center transition-all duration-700 ${accInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {["/placeholder-logo.png", "/placeholder-logo.svg", "/images/big-logo.png", "/placeholder-logo.png", "/placeholder-logo.png"].map((src, i) => (
                <div key={i} className="opacity-80 hover:opacity-100 transition">
                  <img src={src} alt="Partner logo" className="h-10 w-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl border border-border/60 bg-card/50 p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
              <h3 className="text-2xl md:text-4xl font-bold mb-3">Ready to validate your next decision?</h3>
              <p className="text-muted-foreground mb-6">Speak with our consultants about audits, feasibility studies, or a defensible business case tailored to your goals.</p>
              <Link href="/#contact">
                <Button size="lg" className="inline-flex items-center gap-2">
                  Start a conversation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
