import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function About() {
  return (
    <Section id="about" className="bg-card">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-6">Administrative Excellence. Economic Insight. Strategic Growth.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Headquartered in the UAE, Smart Path Consultancy specializes in administrative consultancy and economic feasibility studies, 
              helping organizations optimize operations, validate investments, and make data-driven decisions with confidence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With deep expertise in administrative process optimization and comprehensive economic analysis, we transform 
              complex business challenges into clear, actionable strategies for sustainable growth.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Your Strategic Partner</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
