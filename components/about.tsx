import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function About() {
  return (
    <Section id="about" className="bg-card">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-6">Clarity. Innovation. Reliability.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Headquartered in the UAE, Smart Path Consultancy helps entrepreneurs, startups, and established
              enterprises navigate regulations, enter markets, and scale with confidence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With deep regional insight and a results-driven approach, we turn business goals into reality—at every
              stage of the journey.
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
