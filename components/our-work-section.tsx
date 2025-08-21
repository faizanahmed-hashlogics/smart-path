"use client"

import { Button } from "@/components/ui/button"

const workCases = [
  {
    id: 1,
    title: "Digital transformation drives 40% revenue growth",
    description:
      "A UAE manufacturing company revolutionizes operations through strategic digital integration and process optimization.",
    buttonText: "Read the full story",
    image: "/images/hero-slide-1.jpeg",
  },
  {
    id: 2,
    title: "Market expansion strategy opens new revenue streams",
    description:
      "How Smart Path Consultancy helped a regional retailer successfully enter three new Middle Eastern markets within 18 months.",
    buttonText: "Read the full story",
    image: "/images/hero-slide-2.jpeg",
  },
  {
    id: 3,
    title: "Operational excellence reduces costs by 35%",
    description:
      "Strategic process reengineering and lean methodology implementation transforms a logistics company's bottom line.",
    buttonText: "Read the full story",
    image: "/images/dubai-skyline.webp",
  },
]

export function OurWorkSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-accent mb-2">
            Our work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Client impact across the UAE</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Selected case studies showcasing measurable outcomes across strategy, operations, and digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workCases.map((workCase) => (
            <article
              key={workCase.id}
              className="group rounded-xl border border-border/60 bg-card/50 hover:bg-card transition-colors shadow-sm hover:shadow-md overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={workCase.image || "/placeholder.svg"}
                  alt={workCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {workCase.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{workCase.description}</p>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0 h-auto">
                  {workCase.buttonText}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full">
            View all case studies
          </Button>
        </div>
      </div>
    </section>
  )
}
