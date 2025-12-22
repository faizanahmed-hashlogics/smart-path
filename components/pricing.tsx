"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
import { PRICING_PACKAGES } from "@/lib/constants"

export function Pricing() {
  const { t } = useTranslation()

  return (
    <Section id="pricing" className="bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm backdrop-blur-md mb-6">
            <span className="text-primary font-semibold tracking-wide uppercase text-xs">{t("pricing.badge")}</span>
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PACKAGES.map((pkg, index) => {
            const localizedPackages = t("pricing.packages", { returnObjects: true }) as {
              name: string
              description: string
              cta: string
              features: string[]
            }[]
            const lp = localizedPackages[index]
            const name = lp?.name ?? pkg.name
            const description = lp?.description ?? pkg.description
            const features = lp?.features ?? pkg.features
            const cta = lp?.cta ?? pkg.cta
            return (
            <Card 
              key={index} 
              className={cn(
                "flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-2xl p-8 border-t border-white/20",
                pkg.popular 
                  ? "bg-background/60 backdrop-blur-xl border-primary/50 shadow-xl shadow-primary/10 scale-105 z-10" 
                  : "bg-background/40 backdrop-blur-md border-border/50 hover:bg-background/60 hover:border-primary/30"
              )}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md">
                  {t("pricing.mostPopular")}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold mb-3">{name}</h3>
                <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">{description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm font-medium">{pkg.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3 text-sm group">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Check className="h-3 w-3 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={cn(
                  "w-full rounded-xl h-12 text-base font-bold transition-all duration-300 shadow-lg",
                  pkg.popular 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-primary/25 hover:scale-[1.02]" 
                    : "bg-card hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary text-foreground hover:shadow-lg hover:scale-[1.02]"
                )}
              >
                {cta}
              </Button>
            </Card>
          )})}
        </div>
      </Container>
    </Section>
  )
}
