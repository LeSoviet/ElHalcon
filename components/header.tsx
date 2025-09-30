"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Text Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-white font-bold p-2 rounded-md">EH</div>
            <span className="font-bold text-xl hidden sm:inline-block">El Halcon</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/experience" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Experience
            </Link>
            <Link href="/quote" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Get a Quote
            </Link>
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
                Experience
              </Link>
              <Link
                href="/quote"
                className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
              <Button className="w-full mt-2" asChild onClick={() => setIsMenuOpen(false)}>
                <Link href="/login">Login</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
