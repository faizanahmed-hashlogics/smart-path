"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Menu, X, MapPin, Clock, Phone, Facebook, Instagram, Twitter, Linkedin, Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="bg-card border-b border-border">
      <div className="bg-card border-b border-border">
        <Container>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <div className="relative">
                <span className="text-2xl font-bold text-foreground">Smart Path</span>
                <span className="text-2xl font-bold text-primary ml-2">Consultancy</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <div className="text-sm">
                  <div className="font-medium">Business Bay, Dubai</div>
                  <div>United Arab Emirates</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <div className="text-sm">
                  <div className="font-medium">Sun - Thu 9.00 - 18.00</div>
                  <div>Friday & Saturday CLOSED</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <div className="text-sm">
                  <div className="font-medium">+971-4-123-4567</div>
                  <div>Free consultation</div>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-foreground hover:text-primary hover:bg-secondary"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-secondary">
        <Container>
          <nav className="flex items-center justify-between py-4">
            <div className="flex lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="text-foreground hover:bg-muted"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </nav>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-border">
              <div className="space-y-2 py-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <span>{item.name}</span>
                  </button>
                ))}

                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-base font-medium text-foreground">Theme</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="text-foreground hover:text-primary hover:bg-muted"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </div>

                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 px-3 pt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </header>
  )
}
