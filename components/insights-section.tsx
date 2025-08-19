"use client"

import type React from "react"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const insights = [
  {
    title: "UAE Business Growth Acceleration",
    description:
      "Strategic frameworks for scaling businesses in the UAE's dynamic economic landscape and emerging market opportunities",
    image: "/placeholder.svg?height=400&width=500",
    category: "Growth Strategy",
    link: "#",
  },
  {
    title: "Digital Innovation for Middle East Enterprises",
    description:
      "Transforming traditional businesses through cutting-edge technology adoption and digital-first strategies",
    image: "/placeholder.svg?height=400&width=500",
    category: "Digital Strategy",
    link: "#",
  },
  {
    title: "MENA Market Entry Excellence",
    description:
      "Comprehensive roadmap for international businesses entering Middle East markets with proven success methodologies",
    image: "/placeholder.svg?height=400&width=500",
    category: "Market Entry",
    link: "#",
  },
  {
    title: "Executive Leadership in the New Economy",
    description:
      "Building resilient leadership capabilities for navigating uncertainty and driving sustainable business growth",
    image: "/placeholder.svg?height=400&width=500",
    category: "Leadership",
    link: "#",
  },
  {
    title: "Sustainable Business Practices in the Gulf",
    description: "Implementing ESG frameworks and sustainable business models for long-term success in the Gulf region",
    image: "/placeholder.svg?height=400&width=500",
    category: "Sustainability",
    link: "#",
  },
  {
    title: "Financial Strategy & Investment Planning",
    description: "Advanced financial modeling and investment strategies for maximizing returns in emerging markets",
    image: "/placeholder.svg?height=400&width=500",
    category: "Finance",
    link: "#",
  },
]

export function InsightsSection() {
  const [isSticky, setIsSticky] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("insights-section")
      if (section) {
        const rect = section.getBoundingClientRect()
        const isInView = rect.top <= 0 && rect.bottom > 0
        setIsSticky(isInView)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % insights.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + insights.length) % insights.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart(e.clientX)
    setDragOffset(0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const offset = e.clientX - dragStart
    setDragOffset(offset)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        goToPrev()
      } else {
        goToNext()
      }
    }
    setDragOffset(0)
  }

  const getCardStyle = (index: number) => {
    const offset = index - currentIndex
    const translateX = offset * 280 + (isDragging ? dragOffset : 0)
    const rotateY = offset * 8
    const scale = Math.abs(offset) === 0 ? 0.95 : Math.max(0.75, 0.95 - Math.abs(offset) * 0.08)
    const opacity = Math.abs(offset) > 2 ? 0 : Math.max(0.4, 1 - Math.abs(offset) * 0.15)
    const zIndex = 10 - Math.abs(offset)

    return {
      transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
    }
  }

  return (
    <Section id="insights-section" className="py-20 relative overflow-hidden">
      <div
        className={`${
          isSticky ? "fixed" : "absolute"
        } top-0 left-0 right-0 z-40 h-16 bg-gradient-to-r from-accent/90 via-accent to-accent/90 backdrop-blur-sm transition-all duration-300`}
      >
        <div className="flex items-center justify-center h-full px-8">
          <h2 className="text-xl font-bold text-white">Our Strategic Insights</h2>
        </div>
      </div>

      <div className="pt-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Latest from <span className="text-accent">Smart Path</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover cutting-edge insights, strategic frameworks, and industry expertise that drive business
              transformation across the Middle East
            </p>
          </div>

          <div
            className="relative h-[500px] flex items-center justify-center overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <div
              ref={containerRef}
              className="relative w-full h-full flex items-center justify-center"
              style={{ perspective: "1000px" }}
            >
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="absolute transition-all duration-500 ease-out cursor-pointer select-none"
                  style={getCardStyle(index)}
                  onClick={() => !isDragging && goToSlide(index)}
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-border/50 hover:border-accent/30 w-[320px] h-[280px]">
                    <div className="h-36 overflow-hidden relative">
                      <img
                        src={insight.image || "/placeholder.svg"}
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <div className="p-4">
                      <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                        {insight.title}
                      </h3>
                      <p className="text-muted-foreground text-xs mb-3 line-clamp-2 leading-relaxed">
                        {insight.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-semibold border border-accent/20">
                          {insight.category}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-accent hover:text-accent-foreground hover:bg-accent p-1.5 h-auto rounded-full"
                          asChild
                        >
                          <a href={insight.link} className="flex items-center gap-1">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm border-accent/30 hover:bg-accent hover:text-accent-foreground shadow-lg"
              onClick={goToPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm border-accent/30 hover:bg-accent hover:text-accent-foreground shadow-lg"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {insights.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore All Insights
            </Button>
          </div>
        </Container>
      </div>
    </Section>
  )
}
