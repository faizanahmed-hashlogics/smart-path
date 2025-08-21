"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import CircularGallery from "@/components/circular-gallery"

const insights = [
  {
    title: "UAE Business Growth Acceleration",
    description:
      "Strategic frameworks for scaling businesses in the UAE's dynamic economic landscape and emerging market opportunities",
    image: "/images/hero-slide-1.jpeg",
    category: "Growth Strategy",
    link: "#",
  },
  {
    title: "Digital Innovation for Middle East Enterprises",
    description:
      "Transforming traditional businesses through cutting-edge technology adoption and digital-first strategies",
    image: "/images/hero-slide-2.jpeg",
    category: "Digital Strategy",
    link: "#",
  },
  {
    title: "MENA Market Entry Excellence",
    description:
      "Comprehensive roadmap for international businesses entering Middle East markets with proven success methodologies",
    image: "/images/dubai-skyline.webp",
    category: "Market Entry",
    link: "#",
  },
  {
    title: "Executive Leadership in the New Economy",
    description:
      "Building resilient leadership capabilities for navigating uncertainty and driving sustainable business growth",
    image: "/images/hero-slide-1.jpeg",
    category: "Leadership",
    link: "#",
  },
  {
    title: "Sustainable Business Practices in the Gulf",
    description: "Implementing ESG frameworks and sustainable business models for long-term success in the Gulf region",
    image: "/images/hero-slide-2.jpeg",
    category: "Sustainability",
    link: "#",
  },
  {
    title: "Financial Strategy & Investment Planning",
    description: "Advanced financial modeling and investment strategies for maximizing returns in emerging markets",
    image: "/images/dubai-skyline.webp",
    category: "Finance",
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
            Latest perspectives on growth in the UAE
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Practical guidance, frameworks, and analysis from our consultants across strategy, digital, finance, and
            operations.
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
