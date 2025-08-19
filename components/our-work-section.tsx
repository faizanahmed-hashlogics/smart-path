"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const workCases = [
  {
    id: 1,
    title: "Digital transformation drives 40% revenue growth",
    description:
      "A UAE manufacturing company revolutionizes operations through strategic digital integration and process optimization.",
    buttonText: "Read the full story",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Market expansion strategy opens new revenue streams",
    description:
      "How Smart Path Consultancy helped a regional retailer successfully enter three new Middle Eastern markets within 18 months.",
    buttonText: "Read the full story",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Operational excellence reduces costs by 35%",
    description:
      "Strategic process reengineering and lean methodology implementation transforms a logistics company's bottom line.",
    buttonText: "Read the full story",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function OurWorkSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % workCases.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + workCases.length) % workCases.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  return (
    <section className="relative">
      {/* Sticky Header Bar */}
      <div className="sticky top-0 z-40 w-full bg-gradient-to-r from-accent/90 via-accent to-accent/90 backdrop-blur-md border-b border-accent/20">
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <h2 className="text-xl font-bold text-white">Our Work</h2>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="relative bg-background overflow-hidden">
        <div className="relative h-[600px] md:h-[500px]">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {workCases.map((workCase, index) => (
              <div key={workCase.id} className="w-full flex-shrink-0 h-full">
                <div className="container mx-auto px-4 h-full">
                  <div className="grid lg:grid-cols-2 gap-8 items-center h-full py-12">
                    {/* Content */}
                    <div className="space-y-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{workCase.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{workCase.description}</p>
                      <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105">
                        {workCase.buttonText}
                      </Button>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                        <img
                          src={workCase.image || "/placeholder.svg"}
                          alt={workCase.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 text-foreground hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 text-foreground hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
          <div className="flex gap-2">
            {workCases.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-accent scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
