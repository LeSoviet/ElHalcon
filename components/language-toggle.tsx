"use client"

import { Globe } from "lucide-react"
import { useLocale, useI18n } from "@/components/providers/locale-provider"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { locale, setLocale } = useLocale()
  const t = useI18n()

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "es" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={toggleLanguage}
      title={t.common.languageToggle.label}
    >
      <Globe className="h-4 w-4" />
      <span className="ml-1 text-xs font-semibold">{locale.toUpperCase()}</span>
      <span className="sr-only">{t.common.languageToggle.label}</span>
    </Button>
  )
}
