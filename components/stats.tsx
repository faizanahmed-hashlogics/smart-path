import { Container } from "@/components/ui/container"
import { STATS } from "@/lib/constants"

export function Stats() {
  return (
    <div className="py-16 bg-card">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {STATS.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">*Figures shown are illustrative.</p>
      </Container>
    </div>
  )
}
