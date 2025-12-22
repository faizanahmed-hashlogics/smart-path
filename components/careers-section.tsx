"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase } from "lucide-react"
import { useTranslation } from "react-i18next"
import Link from "next/link"

export function CareersSection() {
  const { t } = useTranslation()

  return (
    <Section id="careers" className="bg-muted/30 relative overflow-hidden">
      <Container>
        <div className="relative z-10 bg-card border border-border/50 rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>

          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl mb-6">
            {t("careers.title")}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {t("careers.subtitle")}
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            {t("careers.description")}
          </p>

          <Link href="/#contact">
            <Button size="lg" className="h-12 px-8 rounded-full text-base inline-flex items-center gap-2">
              {t("careers.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
