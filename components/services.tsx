import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Building, Target, Shield, Settings, TrendingUp, Rocket, ChevronRight } from "lucide-react"
import { SERVICES } from "@/lib/constants"

const iconMap = {
  building: Building,
  target: Target,
  shield: Shield,
  settings: Settings,
  "trending-up": TrendingUp,
  rocket: Rocket,
}

export function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive business consultancy services tailored to your growth journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="group hover:neon-glow transition-all duration-300 cursor-pointer neon-border hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
