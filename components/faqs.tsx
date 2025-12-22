"use client"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQS } from "@/lib/constants"
import { useTranslation } from "react-i18next"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

export function FAQs() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = FAQS.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Section id="faqs" className="bg-muted/30">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t("faq.subtitle")}
          </p>

          <div className="relative mt-8 max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("faq.search_placeholder", "Search FAQs (timelines, pricing, documents)")}
              className="pl-10 h-12 text-base"
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {["Timelines", "Documents", "Budgets", "Engagement"].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setSearchQuery(p)}
                className="text-xs rounded-full border border-border bg-background/70 px-3 py-1 hover:bg-background transition-colors"
              >
                {p}
              </button>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 justify-center">
            <Link href="#faqs">
              <Button size="lg" className="inline-flex items-center gap-2">
                {t("faq.browse_cta", "Browse FAQs")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="inline-flex items-center gap-2">
                {t("faq.ask_cta", "Ask a question")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>{t("faq.no_results", "No results found matching your search.")}</p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => (
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
            )))}
          </Accordion>
        </div>
      </Container>
    </Section>
  )
}
