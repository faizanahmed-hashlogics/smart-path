"use client"

import { Button } from "@/components/ui/button"
import i18n from "@/lib/i18n"
import { useEffect, useState } from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Globe2, ChevronDown, Check } from "lucide-react"
import { useTranslation } from "react-i18next"

export function LanguageSwitcher() {
  const { t } = useTranslation()
  const [lang, setLang] = useState<string>("en")

  useEffect(() => {
    setLang(i18n.language || "en")
    const onLang = (lng: string) => setLang(lng)
    i18n.on("languageChanged", onLang)
    return () => i18n.off("languageChanged", onLang)
  }, [])

  const setLanguage = (lng: "en" | "ar") => {
    i18n.changeLanguage(lng)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary hover:bg-muted"
          aria-label="Language"
        >
          <Globe2 className="h-4 w-4" />
          <span className="text-sm font-medium">{lang === "ar" ? t("languageMenu.arabic", "Arabic") : t("languageMenu.english", "English")}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-70" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-[180px] rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none"
        >
          <DropdownMenu.Item
            onClick={() => setLanguage("en")}
            className="flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none transition-colors hover:bg-muted focus:bg-muted data-[highlighted]:bg-muted"
          >
            <span className="text-base">🇬🇧</span>
            <span className="flex-1">{t("languageMenu.english", "English")}</span>
            {lang === "en" && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => setLanguage("ar")}
            className="flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none transition-colors hover:bg-muted focus:bg-muted data-[highlighted]:bg-muted"
          >
            <span className="text-base">🇦🇪</span>
            <span className="flex-1">{t("languageMenu.arabic", "Arabic")}</span>
            {lang === "ar" && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
