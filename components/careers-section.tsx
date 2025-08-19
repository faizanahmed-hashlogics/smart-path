"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CareersSection() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("careers-section")
      if (section) {
        const rect = section.getBoundingClientRect()
        const isInView = rect.top <= 0 && rect.bottom > 0
        setIsSticky(isInView)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="careers-section" className="relative bg-background">
      {/* Sticky Header Bar */}
      <div
        className={`${
          isSticky ? "fixed" : "absolute"
        } top-0 left-0 right-0 z-40 h-16 bg-gradient-to-r from-accent/90 via-accent to-accent/90 backdrop-blur-sm transition-all duration-300`}
      >
        <div className="flex items-center justify-between h-full px-8">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <h2 className="text-xl font-bold text-white">Careers</h2>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Visual Content */}
          <div className="relative bg-black flex items-center justify-center overflow-hidden">
            <div className="relative z-10 text-center p-8">
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-white">You</div>
                <div className="text-4xl lg:text-5xl font-bold text-accent">Connect</div>
                <div className="text-4xl lg:text-5xl font-bold text-accent">Develop</div>
                <div className="text-4xl lg:text-5xl font-bold text-accent">Lead</div>
                <div className="text-4xl lg:text-5xl font-bold text-white">Here</div>
              </div>
            </div>

            {/* Professional Figure with Radiating Pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Radiating Pattern Background */}
                <div className="absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 origin-bottom"
                      style={{
                        height: "200px",
                        left: "50%",
                        bottom: "50%",
                        transform: `translateX(-50%) rotate(${i * 15}deg)`,
                        background: `linear-gradient(to top, 
                          hsl(${(i * 15) % 360}, 70%, 50%), 
                          hsl(${(i * 15 + 60) % 360}, 70%, 60%))`,
                        opacity: 0.8,
                      }}
                    />
                  ))}
                </div>

                {/* Professional Figure Silhouette */}
                <div className="relative z-10 w-48 h-64 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-full mx-auto">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full"></div>
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 w-20 h-32 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex items-center p-8 lg:p-16 bg-background">
            <div className="max-w-lg">
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Join us</h3>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Deciding the career for you is more than simply "landing the job." It's finding a place where you know
                you make a difference each day, where you can be your most authentic self. It's choosing your impact.
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-lg font-semibold"
                >
                  Explore careers
                </Button>

                <div className="pt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    See awards & recognition
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
