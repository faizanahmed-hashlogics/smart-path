"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { useTranslation } from "react-i18next"
import { WHY_CHOOSE_US } from "@/lib/constants"
import { CheckCircle2, Clock, Wallet, HeartHandshake, Lock, Users } from "lucide-react"

const iconMap = {
  users: Users,
  "check-circle": CheckCircle2,
  clock: Clock,
  wallet: Wallet,
  "heart-handshake": HeartHandshake,
  lock: Lock,
}

export function WhyChooseUs() {
  const { t } = useTranslation()

  return (
    <Section id="why-choose-us" className="bg-muted/30 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm backdrop-blur-md mb-6">
            <span className="text-primary font-semibold tracking-wide uppercase text-xs">Why Choose Us</span>
          </div>
          <h2 
            className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: t("whyChooseUs.title") }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
