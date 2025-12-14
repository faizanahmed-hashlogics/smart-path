"use client"

import { Container } from "@/components/ui/container"
import Link from "next/link"
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-white/10 bg-black/95 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
         <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="font-heading text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">SP</span>
              </div>
              {SITE_CONFIG.name}
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Expert Guidance for a secure Tomorrow. We provide top-tier administrative and economic consultancy to help your business thrive.
            </p>
            <div className="flex gap-4">
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* Add other social links if available in SITE_CONFIG, otherwise placeholders */}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => link.href.startsWith("#") ? scrollToSection(link.href) : window.location.href = link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => link.href.startsWith("#") ? scrollToSection(link.href) : window.location.href = link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <span className="block text-white font-medium mb-1">Email</span>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-primary transition-colors">{SITE_CONFIG.contact.email}</a>
              </li>
              <li>
                <span className="block text-white font-medium mb-1">Phone</span>
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-primary transition-colors">{SITE_CONFIG.contact.phone}</a>
              </li>
              <li>
                <span className="block text-white font-medium mb-1">Location</span>
                {SITE_CONFIG.contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
