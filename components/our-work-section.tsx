"use client"

import { Button } from "@/components/ui/button"
import { AEDIcon } from "@/components/ui/aed-icon"
import { useEffect, useRef, useState } from "react"

const workCases = [
  {
    id: 1,
    title: "Administrative process optimization saves 45% operational costs",
    description:
      "A UAE government entity streamlined administrative workflows and reduced processing time by 60% through comprehensive process redesign and automation.",
    buttonText: "Read the full story",
    image: "/images/hero-slide-1.jpeg",
  },
  {
    id: 2,
    title: "Economic feasibility study validates AED 50M investment",
    description:
      "Comprehensive economic analysis and feasibility study helped a regional developer secure funding for a major infrastructure project in the UAE.",
    buttonText: "Read the full story",
    image: "/images/hero-slide-2.jpeg",
  },
  {
    id: 3,
    title: "Regulatory compliance framework ensures 100% adherence",
    description:
      "Developed comprehensive compliance framework for a multinational corporation, ensuring full adherence to UAE regulations and reducing compliance risks.",
    buttonText: "Read the full story",
    image: "/images/dubai-skyline.webp",
  },
]

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }: { 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-serif text-[#2C5F5D] font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function OurWorkSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-accent mb-2">
            Our work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Client impact across the UAE</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Selected case studies showcasing measurable outcomes across administrative consultancy, economic feasibility studies, and regulatory compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workCases.map((workCase) => (
            <article
              key={workCase.id}
              className="group rounded-xl border border-border/60 bg-card/50 hover:bg-card transition-colors shadow-sm hover:shadow-md overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={workCase.image || "/placeholder.svg"}
                  alt={workCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {workCase.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{workCase.description}</p>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0 h-auto">
                  {workCase.buttonText}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full">
            View all case studies
          </Button>
        </div>

        {/* Numbers Section */}
        <div className="mt-24 relative overflow-hidden">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B4513] to-[#A0522D]"></div>
          
          {/* Main content */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12 lg:p-16 shadow-lg border border-green-200">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left Column - Text */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-8 h-0.5 bg-[#8B4513]"></div>
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-[#8B4513]">
                    Numbers
                  </h3>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2C5F5D] leading-tight font-light">
                  Our figures grow by the year
                </h2>
                <p className="text-[#5A7A78] text-lg leading-relaxed">
                  Delivering measurable results that speak to our commitment to excellence and client success.
                </p>
              </div>

              {/* Right Column - Statistics */}
              <div className="space-y-8">
                {/* Assets */}
                <div className="group flex justify-between items-center py-6 px-4 rounded-xl hover:bg-green-200/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#8B4513] group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-[#2C5F5D] font-sans text-lg font-medium">Assets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AEDIcon className="h-8 w-8 text-[#2C5F5D]" size={32} />
                    <AnimatedCounter end={30} suffix="M" duration={2500} />
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4C4B8] to-transparent"></div>

                {/* Clients */}
                <div className="group flex justify-between items-center py-6 px-4 rounded-xl hover:bg-green-200/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#8B4513] group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-[#2C5F5D] font-sans text-lg font-medium">Clients</span>
                  </div>
                  <AnimatedCounter end={500} suffix="+" duration={2000} />
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4C4B8] to-transparent"></div>

                {/* Rating */}
                <div className="group flex justify-between items-center py-6 px-4 rounded-xl hover:bg-green-200/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#8B4513] group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-[#2C5F5D] font-sans text-lg font-medium">Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AnimatedCounter end={4} duration={1500} />
                    <span className="text-4xl md:text-5xl font-serif text-[#2C5F5D] font-bold">.</span>
                    <AnimatedCounter end={9} duration={2000} />
                    <span className="text-4xl md:text-5xl font-serif text-[#2C5F5D] font-bold">/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
