"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { TESTIMONIALS } from "@/lib/constants"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <Section id="testimonials" className="bg-card">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Success stories from businesses we've helped grow
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="neon-border">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl font-medium mb-8 text-balance">
                  "{TESTIMONIALS[currentIndex].quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-lg">{TESTIMONIALS[currentIndex].name}</div>
                  <div className="text-muted-foreground">
                    {TESTIMONIALS[currentIndex].role}, {TESTIMONIALS[currentIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="neon-border bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextTestimonial} className="neon-border bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
