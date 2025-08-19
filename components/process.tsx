import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { PROCESS_STEPS } from "@/lib/constants"

export function Process() {
  return (
    <Section id="process">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Our Process</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology to guide your business from vision to success
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center neon-glow">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
