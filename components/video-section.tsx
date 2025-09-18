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
          className="absolute inset-0 w-full h-full object-cover"
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
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      <Container className="relative z-20 py-4 md:py-0">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-12 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Connecting the dots. It's what we do.</h2>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Transform your business vision into measurable results with strategic guidance that drives sustainable
              growth and competitive advantage.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-80">
              Our proven methodologies and data-driven insights help businesses navigate complex challenges while
              maximizing opportunities in today's dynamic market.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-80">
              Partner with industry experts who understand the nuances of scaling operations, optimizing processes, and
              building resilient business foundations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-semibold px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              What We Are
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              What We Do
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
