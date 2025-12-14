"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      console.log("[v0] Video element found, attempting to load...")

      const handleLoadedData = () => {
        console.log("[v0] Video loaded successfully")
        video.play().catch((e) => console.log("[v0] Video autoplay failed:", e))
      }

      const handleError = (e: any) => {
        console.log("[v0] Video error:", e)
      }

      video.addEventListener("loadeddata", handleLoadedData)
      video.addEventListener("error", handleError)

      // Force load the video
      video.load()

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData)
        video.removeEventListener("error", handleError)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2015875-hd_1920_1080_30fps-LITudn1Oeb0ZpfWKUu1PJhO1lYRajZ.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay for better text readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
      </div>

      <Container className="relative z-20 py-12 md:py-0">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-12 space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up delay-100 drop-shadow-lg">
              Connecting the dots. <br/>
              <span className="text-primary">It&apos;s what we do.</span>
            </h2>
            
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 animate-fade-in-up delay-200 max-w-3xl mx-auto font-light">
              Transform your business vision into measurable results with strategic guidance that drives sustainable
              growth and competitive advantage.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12 animate-fade-in-up delay-300 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Data-Driven Insights</h3>
                <p className="text-white/80 leading-relaxed">
                  Our proven methodologies help businesses navigate complex challenges while maximizing opportunities in today&apos;s dynamic market.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Industry Expertise</h3>
                <p className="text-white/80 leading-relaxed">
                  Partner with experts who understand the nuances of scaling operations, optimizing processes, and building resilient foundations.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-500">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
            >
              Who We Are
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-black px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              What We Do
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
