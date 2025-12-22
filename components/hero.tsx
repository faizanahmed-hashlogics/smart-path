"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ArrowRight, TrendingUp, ShieldCheck, BarChart3, Globe2 } from "lucide-react"

export function Hero() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Section id="home" className="relative overflow-hidden min-h-[90vh] flex items-center py-0 bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/dubai-skyline.webp" 
            alt="UAE Skyline" 
            className="w-full h-full object-cover opacity-60 dark:opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-30" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm backdrop-blur-md mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="text-primary font-semibold tracking-wide uppercase text-xs">Smart Path Consultancy</span>
            </div>
            
            <h1 
              className="font-heading text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance animate-fade-in-up delay-100 leading-[1.1]"
              dangerouslySetInnerHTML={{ __html: t("hero.title") }}
            />
            
            <p className="mt-6 text-lg sm:text-xl font-medium text-primary/90 animate-fade-in-up delay-200">
              {t("hero.subtitle")}
            </p>
            
            <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-lg animate-fade-in-up delay-300">
              {t("hero.description")}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up delay-300">
              <Button
                size="lg"
                onClick={() => scrollToSection("#services")}
                className="h-14 px-8 text-base rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="h-14 px-8 text-base rounded-full border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
              >
                {t("hero.cta.secondary")}
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-muted-foreground animate-fade-in-up delay-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{t("hero.badges.certified")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{t("hero.badges.globalReach")}</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{t("hero.badges.dataDriven")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Visualization */}
          <div className="relative hidden lg:block h-[600px] w-full perspective-1000">
             {/* Kept existing visualization but could be enhanced further if needed */}
            <div className="absolute inset-0 flex items-center justify-center preserve-3d animate-float">
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 blur-3xl opacity-40 animate-pulse-glow" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 glass-card rounded-2xl border border-white/20 flex flex-col items-center justify-center p-8 transform rotate-y-12 rotate-x-6 shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="h-2 w-24 bg-border rounded-full mb-4" />
                <div className="h-2 w-32 bg-border rounded-full mb-8" />
                <div className="w-full h-32 bg-gradient-to-t from-primary/20 to-transparent rounded-lg relative overflow-hidden">
                   <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary/50" />
                   <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-around px-2 pb-2">
                      <div className="w-2 h-12 bg-primary/40 rounded-t-sm" />
                      <div className="w-2 h-20 bg-primary/60 rounded-t-sm" />
                      <div className="w-2 h-16 bg-primary/50 rounded-t-sm" />
                      <div className="w-2 h-24 bg-primary/80 rounded-t-sm" />
                      <div className="w-2 h-14 bg-primary/40 rounded-t-sm" />
                   </div>
                </div>
              </div>

              <div className="absolute top-20 right-10 w-48 h-24 glass-card rounded-xl border border-white/20 p-4 transform translate-z-20 animate-float delay-200 shadow-xl">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                       <ShieldCheck className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div className="h-2 w-20 bg-border rounded-full" />
                 </div>
                 <div className="h-1.5 w-full bg-border/50 rounded-full mt-2" />
              </div>

              <div className="absolute bottom-20 left-0 w-56 h-28 glass-card rounded-xl border border-white/20 p-4 transform -translate-z-10 animate-float delay-500 shadow-xl">
                 <div className="flex justify-between items-end h-full">
                    <div className="w-8 h-8 rounded-full bg-primary/20" />
                    <div className="w-8 h-12 rounded-full bg-primary/30" />
                    <div className="w-8 h-16 rounded-full bg-primary/40" />
                    <div className="w-8 h-10 rounded-full bg-primary/25" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
