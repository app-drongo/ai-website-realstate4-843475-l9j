// Footer Component
// Generated: 2025-08-25T11:04:03.341Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Home,
  Award,
  Users
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Luxury Home Sales", href: "#services" },
        { name: "Property Buying", href: "#services" },
        { name: "Investment Properties", href: "#services" },
        { name: "Market Analysis", href: "#services" },
        { name: "Property Evaluation", href: "#contact" },
        { name: "Relocation Services", href: "#services" }
      ]
    },
    {
      title: "Areas",
      links: [
        { name: "Beverly Hills", href: "#about" },
        { name: "Bel Air", href: "#about" },
        { name: "Malibu", href: "#about" },
        { name: "Hollywood Hills", href: "#about" },
        { name: "Manhattan Beach", href: "#about" },
        { name: "Palos Verdes", href: "#about" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Market Reports", href: "#about" },
        { name: "Buying Guide", href: "#services" },
        { name: "Selling Guide", href: "#services" },
        { name: "Investment Tips", href: "#services" },
        { name: "Client Testimonials", href: "#about" },
        { name: "Recent Sales", href: "#about" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Amanda", href: "#about" },
        { name: "Credentials", href: "#about" },
        { name: "Awards", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/amandafosterhomes" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/amandafosterluxuryhomes" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/amandafoster" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/amandafosterre" }
  ]

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="size-12 rounded-lg bg-gradient-to-br from-emerald-600 to-blue-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">AF</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-slate-800">Amanda Foster</span>
                  <span className="text-sm text-emerald-600 font-medium tracking-wide">LUXURY HOMES</span>
                </div>
              </Link>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Beverly Hills' premier luxury real estate specialist. With over 15 years of experience, 
                I help discerning clients find their perfect luxury home in Los Angeles' most prestigious neighborhoods.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-600">amanda@fosterluxuryhomes.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-600">(310) 555-LUXURY</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-600">9200 Sunset Blvd, Beverly Hills, CA 90210</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-slate-800">Luxury Market Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
                <Button size="sm" className="px-3 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-500">
                Get exclusive market insights and new luxury listings. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-slate-800">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>© 2024 Amanda Foster Luxury Homes. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">DRE# 01234567</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Serving Beverly Hills with <Heart className="size-3 text-red-500 fill-current" />
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500 mr-2">Follow:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-slate-500 group-hover:text-emerald-600 transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-slate-100">
            <Link href="/mls-search" className="text-xs text-slate-500 hover:text-emerald-600 transition-colors">
              MLS Search
            </Link>
            <Link href="/property-alerts" className="text-xs text-slate-500 hover:text-emerald-600 transition-colors">
              Property Alerts
            </Link>
            <Link href="/market-reports" className="text-xs text-slate-500 hover:text-emerald-600 transition-colors">
              Market Reports
            </Link>
            <Link href="/equal-housing" className="text-xs text-slate-500 hover:text-emerald-600 transition-colors">
              Equal Housing Opportunity
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}