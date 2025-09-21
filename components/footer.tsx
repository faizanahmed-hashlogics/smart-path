"use client"

import { Container } from "@/components/ui/container"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

const footerLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
  { name: "Privacy", href: "#privacy" },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <div className="font-heading text-xl font-bold text-primary mb-2">{SITE_CONFIG.name}</div>
              <p className="text-sm text-muted-foreground max-w-md">
                Expert Guidance for a secure Tomorrow
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mb-8 md:mb-0">
              {footerLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            <div>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
