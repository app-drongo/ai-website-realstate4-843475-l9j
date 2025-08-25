// Services Component
// Generated: 2025-08-25T11:04:03.341Z
// Template: services-c002
// Context: Home
// Position: pages.0.sections.2

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Home,
  TrendingUp,
  Search,
  Shield,
  Users,
  Calculator,
  BarChart3,
  Key
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "luxury-home-buying",
      title: "Luxury Home Buying",
      description: "Exclusive access to Beverly Hills' finest properties",
      longDescription: "Navigate the luxury real estate market with confidence. I provide access to exclusive listings, off-market opportunities, and guide you through every step of acquiring your dream Beverly Hills property.",
      icon: Home,
      benefits: [
        "Exclusive off-market property access",
        "Comprehensive market analysis",
        "Negotiation expertise for luxury properties",
        "White-glove concierge service"
      ],
      pricing: "Buyer representation at no cost",
      timeline: "30-90 days typical process",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "luxury-home-selling",
      title: "Luxury Home Selling",
      description: "Maximum value through strategic luxury marketing",
      longDescription: "Achieve the highest possible sale price for your luxury property through sophisticated marketing strategies, professional staging, and access to qualified high-net-worth buyers worldwide.",
      icon: TrendingUp,
      benefits: [
        "Professional luxury property staging",
        "International marketing exposure",
        "Confidential and discreet transactions",
        "Premium photography and videography"
      ],
      pricing: "Competitive commission structure",
      timeline: "60-120 days average sale time"
    },
    {
      id: "investment-properties",
      title: "Investment Properties",
      description: "Strategic luxury real estate investment guidance",
      longDescription: "Identify and acquire high-value investment opportunities in Beverly Hills and surrounding luxury markets. Comprehensive analysis of ROI potential, market trends, and long-term appreciation prospects.",
      icon: BarChart3,
      benefits: [
        "Investment property analysis",
        "Market trend forecasting",
        "Portfolio diversification strategies",
        "Rental income optimization"
      ],
      pricing: "Custom investment consultation",
      timeline: "Ongoing advisory relationship"
    },
    {
      id: "property-evaluation",
      title: "Property Valuation",
      description: "Comprehensive luxury property market analysis",
      longDescription: "Receive detailed property valuations based on current market conditions, comparable sales, and unique property features. Essential for insurance, estate planning, or sale preparation.",
      icon: Calculator,
      benefits: [
        "Detailed comparative market analysis",
        "Property condition assessment",
        "Market positioning recommendations",
        "Insurance and estate planning support"
      ],
      pricing: "Complimentary for potential clients",
      timeline: "48-72 hours delivery",
      badge: "Free Service"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-emerald-600/20 text-emerald-700">
            Luxury Real Estate Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Services for
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Luxury Property Clients
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tailored real estate solutions designed specifically for Beverly Hills luxury properties and discerning clientele
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-emerald-600/20 bg-gradient-to-r from-emerald-600/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-emerald-600/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-emerald-600/10 text-emerald-600'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"} className={service.featured ? "bg-emerald-600" : ""}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className={`group/btn ${service.featured ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'}`}
                        >
                          Schedule Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-blue-50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Explore Beverly Hills Luxury Properties?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your luxury real estate goals and how I can help you achieve them with personalized service and market expertise.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Book Private Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}