"use client"

import { useEffect } from "react"
import i18n from "@/lib/i18n"

function applyHtmlAttributes(lang: string) {
  const html = document.documentElement
  html.setAttribute("lang", lang)
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr")
}

export function LanguageHydrator() {
  useEffect(() => {
    // Initialize language from localStorage (no URL-based routing)
    let initial: "en" | "ar" = "en"
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang")
      if (stored === "ar" || stored === "en") initial = stored
    }

    if (i18n.language !== initial) {
      i18n.changeLanguage(initial)
    }
    applyHtmlAttributes(initial)

    const onLangChanged = (lng: string) => {
      try {
        localStorage.setItem("lang", lng)
      } catch {}
      applyHtmlAttributes(lng)
    }

    i18n.on("languageChanged", onLangChanged)
    return () => {
      i18n.off("languageChanged", onLangChanged)
    }
  }, [])

  return null
}
