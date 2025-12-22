"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { useTranslation } from "react-i18next"
import { INDUSTRIES } from "@/lib/constants"
import { ShoppingBag, HardHat, Factory, Utensils, Truck, Building2, Stethoscope, Laptop, Rocket } from "lucide-react"

const iconMap = {
  "shopping-bag": ShoppingBag,
  "hard-hat": HardHat,
  factory: Factory,
  utensils: Utensils,
  truck: Truck,
  "building-2": Building2,
  stethoscope: Stethoscope,
  laptop: Laptop,
  rocket: Rocket,
}

export function Industries() {
  const { t } = useTranslation()

  return (
    <Section id="industries" className="bg-background relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm backdrop-blur-md mb-6">
            <span className="text-primary font-semibold tracking-wide uppercase text-xs">Industries</span>
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl mb-6 leading-tight">
            {t("industries.title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(t("industries.items", { returnObjects: true }) as string[]).map((label, index) => {
            const industry = INDUSTRIES[index]
            if (!industry) return null
            const Icon = iconMap[industry.icon as keyof typeof iconMap]
            return (
              <div
                key={industry.name}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-medium text-lg">{label}</h3>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
