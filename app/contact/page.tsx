"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Clock, Shield } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { useTranslation } from "react-i18next"

export default function ContactPage() {
  const { t } = useTranslation()
  const chips = t("contactPage.chips", { returnObjects: true }) as string[]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero: centered gradient banner (unique) */}
        <section className="relative border-b border-border bg-card">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_20%_20%,theme(colors.primary/15),transparent)]" />
          <Container>
            <div className="relative z-10 py-16 md:py-24 text-center max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
                {t("contactPage.badge")}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                {t("contactPage.title")}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                {t("contactPage.subtitle")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {chips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 text-xs rounded-full border border-border bg-background/70 px-3 py-1"
                  >
                    {idx === 0 && <Clock className="h-3.5 w-3.5 text-primary" />}
                    {idx === 1 && <Shield className="h-3.5 w-3.5 text-primary" />}
                    {idx === 2 && <MapPin className="h-3.5 w-3.5 text-primary" />}
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3 justify-center">
                <Link href="#contact">
                  <Button size="lg" className="inline-flex items-center gap-2">
                    {t("contactPage.buttons.primary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                  <Button size="lg" variant="outline" className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" /> {t("contactPage.buttons.secondary")}
                  </Button>
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <a
                  href={SITE_CONFIG.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <MessageSquare className="h-4 w-4" /> {t("contactPage.quickLinks.whatsapp")}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <Mail className="h-4 w-4" /> {t("contactPage.quickLinks.email")}
                </a>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <Phone className="h-4 w-4" /> {t("contactPage.quickLinks.phone")}
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
