"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Menu, X, MapPin, Clock, Phone, Facebook, Instagram, Twitter, Linkedin, Sun, Moon, ChevronRight } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { cn } from "@/lib/utils"
import { SERVICES, PRICING_PACKAGES, SITE_CONFIG } from "@/lib/constants"
import { Shield, Target, Users, Award } from "lucide-react"

const navigation = [
  { key: "home", href: "/", sectionId: "home" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "pricing", href: "/pricing" },
  { key: "faqs", href: "/faqs", sectionId: "faqs" },
  { key: "contact", href: "/contact", sectionId: "contact" },
]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584917881316", label: "Facebook" },
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
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scrollspy: on homepage, observe sections by ID and map to routes for active highlight
  useEffect(() => {
    if (pathname !== "/") return

    const map: { id: string; href: string }[] = [
      { id: "home", href: "/" },
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
      <header className="relative bg-background/50 backdrop-blur-sm border-b border-border/40 z-40">
        <div>
          <Container>
            <div className="flex items-center justify-between py-2">
              <div className="hidden xl:flex items-center space-x-6 text-xs font-medium text-muted-foreground w-full justify-end">
                <Link
                  href="/#contact"
                  className="flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>{t("navbar.location.line1")}</span>
                </Link>

                <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  <span>{t("navbar.hours.line1")}</span>
                </div>

                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  <span>{t("navbar.phone.number")}</span>
                </a>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <div
        className={cn(
          "sticky top-4 z-50 transition-all duration-500 ease-in-out px-4"
        )}
      >
        <div className={cn(
          "mx-auto max-w-7xl rounded-full transition-all duration-500 border",
          scrolled 
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-white/20 shadow-lg shadow-black/5 py-2 px-6" 
            : "bg-transparent border-transparent py-4 px-0"
        )}>
          <nav className="relative flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
              aria-label={`${t("navbar.brand.primary")} ${t("navbar.brand.secondary")}`}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/images/navbar-logo-black-color.png"
                  alt="Smart Path Consultancy"
                  width={200}
                  height={56}
                  className="relative h-10 sm:h-12 md:h-14 w-auto dark:invert transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex items-baseline hidden sm:flex">
                <span className="text-lg sm:text-xl leading-tight font-bold text-foreground">
                  {t("navbar.brand.primary")}
                </span>
                <span className="text-lg sm:text-xl leading-tight font-bold text-primary ml-1.5">
                  {t("navbar.brand.secondary")}
                </span>
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="text-foreground hover:bg-muted rounded-full"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            {/* Desktop Navigation */}
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => {
                const label = t(`navbar.nav.${item.key}`)
                const active = isActive(item.href)
                const hasDropdown = ["services", "about", "pricing"].includes(item.key)
                
                if (hasDropdown) {
                  return (
                    <div key={item.key} className="relative group">
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 py-4",
                          active ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                        )}
                      >
                        <span>{label}</span>
                        <ChevronRight className="h-4 w-4 rotate-90 transition-transform duration-300 group-hover:-rotate-90" />
                        {active && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                        )}
                      </Link>

                      {/* Mega Menu Dropdown */}
                      <div className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50",
                        item.key === "services" ? "w-[800px]" : "w-[600px]"
                      )}>
                        <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-6">
                          
                          {/* Services Dropdown */}
                          {item.key === "services" && (
                            <>
                              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                {SERVICES.map((service) => (
                                  <Link 
                                    key={service.id} 
                                    href={`/services?tab=${service.id}`}
                                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors group/item"
                                  >
                                    <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                      <service.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-sm mb-1 group-hover/item:text-primary transition-colors">{service.title}</h4>
                                      <p className="text-xs text-muted-foreground line-clamp-2">{service.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
                                <div className="text-xs text-muted-foreground">
                                  Need a custom solution?
                                </div>
                                <Link href="/contact" className="text-xs font-semibold text-primary hover:underline">
                                  Talk to an expert &rarr;
                                </Link>
                              </div>
                            </>
                          )}

                          {/* About Dropdown */}
                          {item.key === "about" && (
                            <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Company</h4>
                                <Link href="/about" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group/item">
                                  <div className="p-2 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                    <Shield className="h-4 w-4" />
                                  </div>
                                  <span className="font-medium">Who We Are</span>
                                </Link>
                                <Link href="/about" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group/item">
                                  <div className="p-2 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                    <Target className="h-4 w-4" />
                                  </div>
                                  <span className="font-medium">Mission & Vision</span>
                                </Link>
                              </div>
                              <div className="space-y-4">
                                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Team & Approach</h4>
                                <Link href="/about" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group/item">
                                  <div className="p-2 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                    <Users className="h-4 w-4" />
                                  </div>
                                  <span className="font-medium">Our Team</span>
                                </Link>
                                <Link href="/about" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group/item">
                                  <div className="p-2 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                    <Award className="h-4 w-4" />
                                  </div>
                                  <span className="font-medium">Our Approach</span>
                                </Link>
                              </div>
                            </div>
                          )}

                          {/* Pricing Dropdown */}
                          {item.key === "pricing" && (
                            <div className="grid grid-cols-3 gap-4">
                              {PRICING_PACKAGES.map((pkg) => (
                                <Link 
                                  key={pkg.name} 
                                  href="/pricing"
                                  className="block p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-muted/30 transition-all group/item"
                                >
                                  <h4 className="font-bold text-sm mb-1 group-hover/item:text-primary transition-colors">{pkg.name}</h4>
                                  <div className="text-lg font-bold text-primary mb-2">{pkg.price}<span className="text-xs font-normal text-muted-foreground">{pkg.period}</span></div>
                                  <p className="text-xs text-muted-foreground line-clamp-2">{pkg.description}</p>
                                </Link>
                              ))}
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium tracking-wide transition-colors duration-200",
                      active
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{label}</span>
                    {active && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-foreground hover:text-primary hover:bg-muted rounded-full w-9 h-9"
                aria-label="Toggle theme"
              >
                {mounted ? (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />) : <span className="inline-block h-4 w-4" />}
              </Button>
              <div className="h-4 w-px bg-border mx-2" />
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-full hover:scale-110 transform duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="fixed right-4 top-4 bottom-4 z-[60] w-full max-w-sm bg-card/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transform transition-transform duration-300 translate-x-0 overflow-y-auto overscroll-contain animate-in slide-in-from-right-10 duration-300 flex flex-col">
              <div className="flex items-center justify-between px-6 py-5 border-b border-border/50">
                <span className="text-lg font-bold text-foreground">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="hover:bg-muted rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="px-3 py-6 space-y-1 flex-1">
                {navigation.map((item) => {
                  const label = t(`navbar.nav.${item.key}`)
                  const active = isActive(item.href)
                  return (
                    <Link 
                      key={item.key} 
                      href={item.href} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className={cn(
                        "flex items-center justify-between w-full text-left px-4 py-3 rounded-2xl text-lg font-medium transition-all duration-200 cursor-pointer group",
                        active
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      )}
                    >
                      <span>{label}</span>
                      <ChevronRight className={cn(
                        "h-5 w-5 transition-transform duration-300",
                        active ? "text-primary translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      )} />
                    </Link>
                  )
                })}
              </nav>

              <div className="px-6 py-6 border-t border-border/50 bg-secondary/30 mt-auto rounded-b-3xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={toggleTheme}
                      className="rounded-full border-border/50 bg-background/50"
                    >
                      {mounted ? (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />) : <span className="inline-block h-4 w-4" />}
                    </Button>
                    <LanguageSwitcher />
                  </div>
                  <div className="flex gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-background/50 border border-border/50 text-foreground hover:text-primary transition-colors"
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
                
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-4 py-4 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all active:scale-[0.98]"
                >
                  {t("navbar.contact_cta")}
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
