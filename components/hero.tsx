"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { LiquidButton } from "@/components/animate-ui/buttons/liquid"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

export function Hero() {
  const { t } = useTranslation()
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const [enableParallax, setEnableParallax] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mql = window.matchMedia("(min-width: 768px)")
    const updateParallaxEnabled = () => setEnableParallax(mql.matches)
    updateParallaxEnabled()
    mql.addEventListener?.("change", updateParallaxEnabled)

    const handleScroll = () => {
      if (!mql.matches) return
      const scrolled = window.pageYOffset
      const parallax = scrolled * 0.5 // Adjust speed by changing multiplier
      setParallaxOffset(parallax)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      mql.removeEventListener?.("change", updateParallaxEnabled)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Section id="home" className="relative overflow-hidden min-h-[65vh] md:min-h-[75vh] py-4 md:py-0">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/dubai-skyline.webp)`,
            transform: enableParallax ? `translateY(${parallaxOffset}px) scale(1.1)` : "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Container className="relative z-10 flex items-center min-h-[20rem] sm:min-h-[24rem] md:min-h-[28rem]">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <p className="mt-4 text-base leading-7 text-gray-300 max-w-3xl mx-auto">{t("hero.description")}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <LiquidButton
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="neon-glow text-base"
            >
              {t("hero.cta.primary")}
            </LiquidButton>
            <LiquidButton
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="neon-glow text-base"
            >
              {t("hero.cta.secondary")}
            </LiquidButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}
