"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQS } from "@/lib/constants"
import { useTranslation } from "react-i18next"

export function FAQs() {
  const { t } = useTranslation()

  return (
    <Section id="faqs" className="bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-6">
            {t("faq.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  )
}
