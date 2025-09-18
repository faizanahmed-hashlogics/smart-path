"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Menu, X, MapPin, Clock, Phone, Facebook, Instagram, Twitter, Linkedin, Sun, Moon, ChevronRight } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"

const navigation = [
  { key: "home", href: "/", sectionId: "home" },
  { key: "process", href: "/process", sectionId: "process" },
  { key: "testimonials", href: "/testimonials", sectionId: "testimonials" },
  { key: "faqs", href: "/faqs", sectionId: "faqs" },
  { key: "contact", href: "/contact", sectionId: "contact" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" }
]

export function Navbar() {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [currentHash, setCurrentHash] = useState<string>("")
  const [currentSectionRoute, setCurrentSectionRoute] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu on route change and allow closing with ESC
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    const originalHtmlOverflow = document.documentElement.style.overflow
    const originalBodyOverflow = document.body.style.overflow
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = originalHtmlOverflow || ""
      document.body.style.overflow = originalBodyOverflow || ""
    }
    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow
      document.body.style.overflow = originalBodyOverflow
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash
      if (pathname === "/" && (!hash || hash === "")) {
        setCurrentHash("#home")
      } else {
        setCurrentHash(hash)
      }
    }
    onHash()
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scrollspy: on homepage, observe sections by ID and map to routes for active highlight
  useEffect(() => {
    if (pathname !== "/") return

    const map: { id: string; href: string }[] = [
      { id: "home", href: "/" },
      { id: "process", href: "/process" },
      { id: "testimonials", href: "/testimonials" },
      { id: "faqs", href: "/faqs" },
      { id: "contact", href: "/contact" },
    ]

    const elements = map
      .map((m) => ({ m, el: document.getElementById(m.id) }))
      .filter((x): x is { m: { id: string; href: string }; el: HTMLElement } => !!x.el)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          const id = (visible[0].target as Element).id
          const found = map.find((m) => m.id === id)
          if (found) setCurrentSectionRoute(found.href)
        }
      },
      {
        root: null,
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    elements.forEach(({ el }) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      try {
        window.history.pushState(null, "", href)
        setCurrentHash(href)
      } catch {}
      setMobileMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const isActive = (href: string) => {
    if (pathname === "/" && currentSectionRoute) {
      return currentSectionRoute === href
    }
    return pathname === href
  }

  return (
    <>
      <header className="relative bg-background">
        <div>
          <Container>
            <div className="flex items-center justify-between py-3">
              <Link href="/" className="flex items-center">
                <div className="relative">
                  <span className="text-xl sm:text-2xl leading-tight font-bold text-foreground">{t("navbar.brand.primary")}</span>
                  <span className="text-xl sm:text-2xl leading-tight font-bold text-primary ml-2">{t("navbar.brand.secondary")}</span>
                </div>
              </Link>

              <div className="hidden xl:flex items-center space-x-8">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div className="text-sm">
                    <div className="font-medium">{t("navbar.location.line1")}</div>
                    <div>{t("navbar.location.line2")}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <div className="text-sm">
                    <div className="font-medium">{t("navbar.hours.line1")}</div>
                    <div>{t("navbar.hours.line2")}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <div className="text-sm">
                    <div className="font-medium">{t("navbar.phone.number")}</div>
                    <div>{t("navbar.phone.line2")}</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <div
        className={`sticky top-0 z-50 border-b border-border bg-background transition-shadow ${
          scrolled ? "shadow-sm" : "shadow-none"
        }`}
      >
        <Container>
          <nav className="relative flex items-center justify-center py-3 min-h-14">
            <div className="flex lg:hidden absolute right-0 top-1/2 -translate-y-1/2">
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
              {navigation.map((item) => {
                const label = t(`navbar.nav.${item.key}`)
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`inline-flex items-center h-10 px-3 rounded-sm text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <span>{label}</span>
                  </Link>
                )
              })}
            </div>

            <div className="hidden lg:flex items-center space-x-3 absolute right-0 top-1/2 -translate-y-1/2">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-foreground hover:text-primary hover:bg-muted"
                aria-label="Toggle theme"
              >
                {mounted ? (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />) : <span className="inline-block h-4 w-4" />}
              </Button>
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
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />
              {/* Off-canvas panel */}
              <div className="fixed right-0 top-0 bottom-0 z-50 w-80 max-w-[90vw] bg-card border-l border-border shadow-xl transform transition-transform duration-300 translate-x-0 overflow-y-auto overscroll-contain">
                <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-baseline">
                    <span className="text-xl font-bold text-foreground">{t("navbar.brand.primary")}</span>
                    <span className="text-xl font-bold text-primary ml-2">{t("navbar.brand.secondary")}</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="hover:bg-muted"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="px-2 py-4 space-y-1">
                  {navigation.map((item) => {
                    const label = t(`navbar.nav.${item.key}`)
                    const commonClasses = `flex items-center justify-between w-full text-left px-3 py-3 rounded-md text-base font-medium transition-colors cursor-pointer ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`
                    return (
                      <Link key={item.key} href={item.href} onClick={() => setMobileMenuOpen(false)} className={commonClasses}>
                        <span>{label}</span>
                        <ChevronRight className="h-4 w-4 opacity-70" />
                      </Link>
                    )
                  })}
                </nav>

                <div className="px-4 py-3 border-t border-border space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-foreground">{t("navbar.theme")}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleTheme}
                      className="text-foreground hover:text-primary hover:bg-muted"
                      aria-label="Toggle theme"
                    >
                      {mounted ? (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : <span className="inline-block h-5 w-5" />}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-foreground">{t("navbar.language")}</span>
                    <LanguageSwitcher />
                  </div>
                </div>
                {/* Compact contact info on mobile */}
                <div className="px-4 py-3 border-t border-border space-y-2">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">{t("navbar.location.line1")}</div>
                      <div>{t("navbar.location.line2")}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">{t("navbar.hours.line1")}</div>
                      <div>{t("navbar.hours.line2")}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">{t("navbar.phone.number")}</div>
                      <div>{t("navbar.phone.line2")}</div>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-4 border-t border-border">
                  <Link
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
                  >
                    {t("navbar.contact_cta")}
                  </Link>
                  <div className="flex items-center space-x-4 mt-4">
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
            </>
          )}
        </Container>
      </div>
    </>
  )
}
