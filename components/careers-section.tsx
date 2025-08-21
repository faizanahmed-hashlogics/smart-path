"use client"

import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function CareersSection() {
  return (
    <Section id="careers-section" className="py-24 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 shadow-sm">
              <img
                src="/images/dubai-skyline.webp"
                alt="Careers at Smart Path"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-accent mb-2">
              Careers
            </span>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Build your impact in the UAE</h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Join a consultancy focused on real outcomes for clients across the Middle East. Grow with mentorship,
              diverse teams, and work that matters.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-sm text-foreground">Client-first work with measurable results</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-sm text-foreground">Structured learning and mentorship</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-sm text-foreground">Inclusive, multicultural team culture</span>
              </li>
            </ul>

            <div className="flex items-center gap-6">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full">
                Explore careers
              </Button>
              <a href="#" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium">
                See awards & recognition
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
