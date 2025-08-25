// Herohome Component
// Generated: 2025-08-25T11:04:03.341Z
// Template: hero-s001
// Context: Home
// Position: pages.0.sections.0

// components/hero/SplitHero.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Play } from "lucide-react"
import Image from "next/image"

export default function Herohome() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* LEFT: Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-600/10 px-3 py-1.5 text-sm font-medium text-emerald-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-600"></span>
              Beverly Hills Luxury Specialist
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Discover Beverly Hills
              <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Luxury Real Estate
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Amanda Foster brings unparalleled expertise to Beverly Hills' most prestigious properties. Experience white-glove service for discerning luxury home buyers and sellers.
            </p>

            {/* Feature list */}
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Exclusive property access",
                "Market expertise since 2010",
                "Confidential transactions",
                "$500M+ in luxury sales",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group px-7 text-base bg-emerald-600 hover:bg-emerald-700">
                Schedule Private Consultation
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base border-blue-600 text-blue-600 hover:bg-blue-50">
                <Play className="mr-2 size-5" /> View Property Portfolio
              </Button>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            {/* Mockup container */}
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1920&auto=format&fit=crop"
                  alt="Luxury Beverly Hills mansion with pool and city views"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Tag overlay */}
              <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium shadow">
                Just Sold - $12.5M
              </div>
            </div>

            {/* Floating accents */}
            <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Average Sale Price</p>
              <p className="text-sm">
                <span className="font-semibold">$8.2M</span> Beverly Hills
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Client Satisfaction</p>
              <p className="text-sm">
                <span className="font-semibold">100%</span> 5-star reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}