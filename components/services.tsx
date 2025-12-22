"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/constants"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Services() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(SERVICES[0].id)

  return (
    <Section id="services" className="py-24 relative overflow-hidden bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm backdrop-blur-md mb-6">
            <span className="text-primary font-semibold tracking-wide uppercase text-xs">Our Expertise</span>
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl mb-6">
            {t("services.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs Navigation */}
          <div className="lg:w-1/3 space-y-2">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300",
                    activeTab === service.id 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                      : "bg-card hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <div className={cn(
                    "p-2 rounded-lg",
                    activeTab === activeTab ? "bg-white/20" : "bg-primary/10"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">{service.title}</span>
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className={cn(
                  "bg-card border border-border/50 rounded-3xl p-8 shadow-sm transition-all duration-500",
                  activeTab === service.id ? "opacity-100 translate-x-0" : "hidden opacity-0 translate-x-4"
                )}
              >
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border/50 flex justify-end">
                  <Link href="/#contact">
                    <Button className="rounded-full inline-flex items-center gap-2">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
