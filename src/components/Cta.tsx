// Cta Component
// Generated: 2025-08-25T11:04:03.341Z
// Template: cta-c001
// Context: Home
// Position: pages.0.sections.6

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, TrendingUp, Award, Phone } from "lucide-react"

export default function Cta() {
  const stats = [
    { value: "$2.5B+", label: "Properties Sold", icon: Home },
    { value: "98%", label: "Client Satisfaction", icon: Award },
    { value: "150+", label: "Luxury Sales", icon: TrendingUp },
    { value: "24/7", label: "Client Support", icon: Phone }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-background to-blue-50/50 dark:from-emerald-950/20 dark:via-background dark:to-blue-950/20" />
      <div className="absolute top-0 left-1/4 size-96 bg-emerald-500/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <Card className="border-emerald-200/50 dark:border-emerald-800/50 bg-background/90 backdrop-blur-sm shadow-2xl shadow-emerald-500/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-blue-50/30 dark:from-emerald-950/20 dark:via-transparent dark:to-blue-950/20" />
          
          <CardContent className="relative p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-full text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-8">
                <Award className="size-4 mr-2" />
                Beverly Hills Luxury Specialist
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Ready to Find Your
                <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Dream Luxury Home?
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Experience white-glove service with Beverly Hills' premier luxury real estate expert. 
                Let Amanda Foster guide you to your perfect luxury property investment.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button size="lg" className="group text-base px-8 py-4 bg-emerald-600 hover:bg-emerald-700">
                  Schedule Private Consultation
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-4 border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950/30">
                  Get Property Valuation
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mb-12">
                <p className="text-sm text-muted-foreground mb-6">
                  Trusted by Beverly Hills' most discerning clients
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {/* Luxury brand placeholders */}
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="h-8 w-24 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded opacity-50"
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="size-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 flex items-center justify-center">
                        <Icon className="size-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center mb-3">
                <div className="size-6 rounded-full bg-emerald-500" />
              </div>
              <h3 className="font-semibold">Complimentary Consultation</h3>
              <p className="text-sm text-muted-foreground">
                Free market analysis and property evaluation
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-3">
                <Award className="size-6 text-blue-500" />
              </div>
              <h3 className="font-semibold">Proven Track Record</h3>
              <p className="text-sm text-muted-foreground">
                Top 1% luxury realtor with exclusive listings
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-3">
                <Phone className="size-6 text-purple-500" />
              </div>
              <h3 className="font-semibold">Concierge Service</h3>
              <p className="text-sm text-muted-foreground">
                White-glove support throughout your journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}