// Navigation Component
// Generated: 2025-08-25T11:04:03.341Z
// Template: navigation-c001
// Context: layout
// Position: layout.header.0

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="size-10 rounded-lg bg-gradient-to-br from-emerald-600 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">AF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-slate-800">Amanda Foster</span>
                <span className="text-xs text-emerald-600 font-medium tracking-wide">LUXURY HOMES</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-emerald-50 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-emerald-600">
              <Phone className="mr-2 size-4" />
              Contact Agent
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg group">
              <Calendar className="mr-2 size-4 transition-transform group-hover:scale-110" />
              Schedule Viewing
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-slate-600"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-emerald-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-emerald-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start text-slate-600 hover:text-emerald-600">
                <Phone className="mr-2 size-4" />
                Contact Agent
              </Button>
              <Button className="justify-start bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white group">
                <Calendar className="mr-2 size-4 transition-transform group-hover:scale-110" />
                Schedule Viewing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}