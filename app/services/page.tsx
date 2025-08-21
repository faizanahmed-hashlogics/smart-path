import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Services } from "@/components/services"
import { Container } from "@/components/ui/container"
import { SITE_CONFIG } from "@/lib/constants"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-card">
          <Container>
            <div className="py-16 md:py-24 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Our Expertise</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Services</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {SITE_CONFIG.description}
              </p>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <Services />
      </main>
      <Footer />
    </div>
  )
}
