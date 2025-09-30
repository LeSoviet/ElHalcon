'use client'

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/i18n"

const DEFAULT_LOCALE: Locale = "en"

type LocaleContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  translation: (typeof translations)[Locale]
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined)

function readStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE
  }

  const stored = window.localStorage.getItem("eh-locale") as Locale | null
  if (stored === "en" || stored === "es") {
    return stored
  }

  return DEFAULT_LOCALE
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  useEffect(() => {
    window.localStorage.setItem("eh-locale", locale)
  }, [locale])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
  }

  const translation = useMemo(() => translations[locale], [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      translation,
    }),
    [locale, translation]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

function useLocaleContext() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error("useLocaleContext must be used within a LocaleProvider")
  }

  return context
}

export function useLocale() {
  const { locale, setLocale } = useLocaleContext()
  return { locale, setLocale }
}

export function useI18n() {
  const { translation } = useLocaleContext()
  return translation
}
