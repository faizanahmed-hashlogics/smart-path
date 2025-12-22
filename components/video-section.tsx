"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { useTranslation } from "react-i18next"

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { t } = useTranslation()

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
              {t("videoSection.titleLine1")} <br />
              <span className="text-primary">{t("videoSection.titleLine2")}</span>
            </h2>
            
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 animate-fade-in-up delay-200 max-w-3xl mx-auto font-light">
              {t("videoSection.subtitle")}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12 animate-fade-in-up delay-300 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              {(t("videoSection.cards", { returnObjects: true }) as { title: string; description: string }[]).map(
                (card, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold mb-3 text-primary">{card.title}</h3>
                    <p className="text-white/80 leading-relaxed">{card.description}</p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-500">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
            >
              {t("videoSection.buttons.whoWeAre")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-black px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              {t("videoSection.buttons.whatWeDo")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
