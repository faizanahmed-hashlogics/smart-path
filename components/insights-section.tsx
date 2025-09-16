"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import CircularGallery from "@/components/circular-gallery"

const insights = [
  {
    title: "Administrative Process Optimization in the UAE",
    description:
      "Comprehensive frameworks for streamlining administrative operations and enhancing organizational efficiency in UAE businesses",
    image: "/images/hero-slide-1.jpeg",
    category: "Administrative Consultancy",
    link: "#",
  },
  {
    title: "Economic Feasibility Analysis for UAE Projects",
    description:
      "Advanced methodologies for conducting thorough economic feasibility studies and investment validation in the Middle East market",
    image: "/images/hero-slide-2.jpeg",
    category: "Economic Studies",
    link: "#",
  },
  {
    title: "Regulatory Compliance & Administrative Excellence",
    description:
      "Strategic approaches to ensuring full regulatory compliance while optimizing administrative processes for maximum efficiency",
    image: "/images/dubai-skyline.webp",
    category: "Compliance",
    link: "#",
  },
  {
    title: "Financial Modeling for Business Decisions",
    description:
      "Comprehensive financial analysis and modeling techniques to support informed business decisions and investment planning",
    image: "/images/hero-slide-1.jpeg",
    category: "Financial Analysis",
    link: "#",
  },
  {
    title: "Organizational Structure & Governance Design",
    description: "Expert guidance on designing optimal organizational structures and governance frameworks for sustainable growth",
    image: "/images/hero-slide-2.jpeg",
    category: "Organizational Design",
    link: "#",
  },
  {
    title: "Market Analysis & Economic Forecasting",
    description: "Advanced market research and economic forecasting methodologies for strategic business planning in the UAE",
    image: "/images/dubai-skyline.webp",
    category: "Market Research",
    link: "#",
  },
]

export function InsightsSection() {
  return (
    <Section id="insights-section" className="py-24 bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-accent mb-2">
            Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Expert insights on administrative and economic consultancy
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Practical guidance, frameworks, and analysis from our consultants across administrative optimization, 
            economic feasibility studies, and strategic business analysis.
          </p>
        </div>

        <div className="relative rounded-xl border border-border/60 bg-card/40 p-2 sm:p-4">
          <CircularGallery
            items={insights.map((i) => ({ image: i.image, text: i.title }))}
            bend={2.5}
            textColor="#eaeaea"
            borderRadius={0.06}
            font="600 24px Figtree"
            scrollSpeed={2}
            scrollEase={0.06}
          />
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full">
            Explore all insights
          </Button>
        </div>
      </Container>
    </Section>
  )
}
