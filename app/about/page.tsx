"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
        {/* Hero: Big logo */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-card border-b border-border/60">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-card/20 to-card" />
          <img
            src={heroLogo}
            alt="Smart Path Logo"
            className="relative z-10 w-[220px] sm:w-[280px] md:w-[340px] opacity-95 select-none"
          />
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
      </main>
      <Footer />
    </div>
  )
}
