"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useI18n } from "@/components/providers/locale-provider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useI18n()

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 gap-3">
          {/* Text Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-primary text-white font-bold p-2 rounded-md">EH</div>
            <span className="font-bold text-xl hidden sm:inline-block">El Halcon</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            <Link href="/experience" className="text-gray-700 hover:text-primary transition-colors font-medium">
              {t.common.nav.experience}
            </Link>
            <Link href="/quote" className="text-gray-700 hover:text-primary transition-colors font-medium">
              {t.common.nav.quote}
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <LanguageToggle />
            <Button asChild className="h-9 px-4">
              <Link href="/login">{t.common.nav.login}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/experience"
                className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.common.nav.experience}
              </Link>
              <Link
                href="/quote"
                className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.common.nav.quote}
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <LanguageToggle />
                <Button className="flex-1" asChild onClick={() => setIsMenuOpen(false)}>
                  <Link href="/login">{t.common.nav.login}</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
