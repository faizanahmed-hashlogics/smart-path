"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CheckCircle2, Target, Lightbulb, Heart, Shield, Award } from "lucide-react"
import { useTranslation } from "react-i18next"

export function About({ detailed = false }: { detailed?: boolean }) {
  const { t } = useTranslation()

  const values = [
    { icon: Shield, key: "integrity" },
    { icon: Target, key: "accuracy" },
    { icon: Heart, key: "confidentiality" },
    { icon: CheckCircle2, key: "commitment" },
    { icon: Award, key: "excellence" },
  ]

  return (
    <Section id="about" className="bg-card relative overflow-hidden py-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm backdrop-blur-md mb-6">
              <span className="text-primary font-semibold tracking-wide uppercase text-xs">{t("about.badge")}</span>
            </div>
            <h2 
              className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t("about.title") }}
            />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("about.description1")}
            </p>

            <div className="space-y-8">
              {/* Who We Are & What We Do */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-background/50 p-6 rounded-2xl border border-border/50">
                  <h3 className="font-bold text-xl mb-3">{t("about.whoWeAre.title")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t("about.whoWeAre.description")}</p>
                </div>
                <div className="bg-background/50 p-6 rounded-2xl border border-border/50">
                  <h3 className="font-bold text-xl mb-3">{t("about.whatWeDo.title")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t("about.whatWeDo.description")}</p>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t("about.mission.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.mission.description")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t("about.vision.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.vision.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Visuals */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden glass-card border-0 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
              
              <h3 className="relative text-2xl font-bold mb-8 text-center">{t("about.values.title")}</h3>
              
              <div className="relative grid gap-4">
                {(t("about.values.items", { returnObjects: true }) as string[]).map((item, index) => {
                  const Icon = values[index]?.icon || CheckCircle2
                  return (
                    <div key={index} className="flex items-center p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 rtl:ml-4 rtl:mr-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-lg">{item}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {detailed && (
        <>
          {/* Our Approach Section */}
          <div className="bg-background/50 py-24 mt-24 border-y border-border/50">
            <Container>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">{t("about.approach.title")}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{t("about.approach.subtitle")}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {(t("about.approach.steps", { returnObjects: true }) as any[]).map((step, index) => (
                  <div key={index} className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group">
                    <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-xl mb-3 mt-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </Container>
          </div>

          {/* Team Expertise Section */}
          <Container className="py-24">
            <div className="rounded-3xl bg-primary/5 border border-primary/10 p-8 md:p-12 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-3xl font-bold mb-6">{t("about.team.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("about.team.description")}
              </p>
            </div>
          </Container>

          {/* CTA Section */}
          <div className="bg-primary text-primary-foreground py-20">
            <Container>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <h2 className="font-heading text-3xl font-bold sm:text-4xl text-center md:text-left">
                  {t("about.cta.title")}
                </h2>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-xl bg-background text-foreground px-8 py-4 text-base font-bold shadow-lg hover:bg-background/90 transition-all hover:scale-105"
                >
                  {t("about.cta.button")}
                </a>
              </div>
            </Container>
          </div>
        </>
      )}
    </Section>
  )
}
