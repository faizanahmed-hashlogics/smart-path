"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, Target, Shield, Settings, TrendingUp, Rocket, ChevronRight, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { AEDIcon } from "@/components/ui/aed-icon"
import { SERVICES } from "@/lib/constants"
import { useState } from "react"
import Link from "next/link"

const iconMap = {
  building: Building,
  target: Target,
  shield: Shield,
  settings: Settings,
  "trending-up": TrendingUp,
  rocket: Rocket,
}

export function Services() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <Section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">Services</span>
          </div>
          <h2 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Administrative & Economic Consultancy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized consultancy services in administrative studies and economic feasibility analysis for informed business decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            const isExpanded = expandedCard === index
            
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-500 cursor-pointer border-2 hover:shadow-2xl hover:shadow-primary/10 ${
                  service.popular 
                    ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10' 
                    : 'border-border/50 hover:border-primary/50'
                } ${isExpanded ? 'md:col-span-2 lg:col-span-1' : ''}`}
                onMouseEnter={() => setExpandedCard(index)}
                onMouseLeave={() => setExpandedCard(null)}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl transition-all duration-300 ${
                      service.popular 
                        ? 'bg-primary/20 group-hover:bg-primary/30' 
                        : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                      <Icon className={`h-8 w-8 transition-colors duration-300 ${
                        service.popular ? 'text-primary' : 'text-primary group-hover:text-primary'
                      }`} />
                    </div>
                    <ChevronRight className={`h-5 w-5 transition-all duration-300 ${
                      isExpanded ? 'rotate-90 text-primary' : 'text-muted-foreground group-hover:text-primary'
                    }`} />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-4">
                      {/* Pricing & Duration */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <AEDIcon className="h-4 w-4" size={16} />
                          <span className="font-semibold text-foreground">{service.price}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">What's included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link href="/#contact" className="block">
                        <Button 
                          className="w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                          size="lg"
                        >
                          <span>Get Started</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold mb-4">Ready for Expert Consultancy?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our administrative consultancy and economic feasibility studies can support your business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4">
                Download Service Guide
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
