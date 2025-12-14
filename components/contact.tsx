"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { MessageSquare, Phone, Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send message")
      }
      setIsSubmitted(true)
      // Optionally clear form
      setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <Section id="contact" className="bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <Container>
          <div className="max-w-2xl mx-auto text-center glass-card rounded-3xl p-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We’d love to hear from you — we’ll reach you soon. Our team will get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
              Send Another Message
            </Button>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section id="contact" className="relative overflow-hidden py-24">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-background -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm backdrop-blur-md mb-6">
            <span className="text-primary font-semibold tracking-wide uppercase text-xs">Contact Us</span>
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl mb-6">Get Started Today</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to accelerate your business growth? Let&apos;s discuss how we can help you succeed in the UAE market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="glass-card rounded-3xl p-8 lg:p-10 border-t border-white/20 shadow-2xl shadow-primary/5">
            <div className="mb-8">
              <h3 className="font-heading text-2xl font-bold mb-2">Send us a message</h3>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours. Your information is kept strictly confidential.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone (UAE)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+971-50-1234567"
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl resize-none"
                  placeholder="Tell us about your business goals and how we can help..."
                />
              </div>

              {error && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl p-4">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full h-12 text-base rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and consent to being contacted about our services.
              </p>
            </form>
          </div>

          <div className="space-y-10 lg:pt-10">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start h-14 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  asChild
                >
                  <a href={SITE_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <span className="text-base">WhatsApp Us</span>
                  </a>
                </Button>

              </div>
              </div>

              <div className="mt-8 space-y-6">
                 <h3 className="font-heading text-xl font-bold mb-4">Contact Information</h3>
                 
                 <div className="flex items-start space-x-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <MapPin className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <p className="font-medium">Location</p>
                     <p className="text-muted-foreground">{SITE_CONFIG.contact.location}</p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <Phone className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <p className="font-medium">Phone</p>
                     <p className="text-muted-foreground" dir="ltr">{SITE_CONFIG.contact.phone}</p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <Mail className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <p className="font-medium">Email</p>
                     <p className="text-muted-foreground">{SITE_CONFIG.contact.email}</p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <Clock className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <p className="font-medium">Working Hours</p>
                     <p className="text-muted-foreground">Sunday – Friday | 9:00 AM – 6:00 PM</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

      </Container>
    </Section>
  )
}
