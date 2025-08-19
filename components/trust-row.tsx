import { Container } from "@/components/ui/container"

export function TrustRow() {
  const logos = [
    "TechStart UAE",
    "GrowthCorp",
    "Regional Dynamics",
    "UAE Ventures",
    "Emirates Business",
    "Gulf Innovations",
  ]

  return (
    <div className="py-12 border-y border-border">
      <Container>
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">Trusted by founders across the UAE</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 text-muted-foreground/60 font-medium text-sm"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
