// Abouthome Component
// Generated: 2025-08-25T11:04:03.341Z
// Template: about-c001
// Context: Home
// Position: pages.0.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Award, 
  Users, 
  TrendingUp, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  Home,
  Heart,
  Shield
} from "lucide-react"

export default function Abouthome() {
  const values = [
    {
      icon: Shield,
      title: "Discretion & Privacy",
      description: "Confidential transactions and utmost privacy for high-profile clients. Your personal information and property details remain secure throughout the entire process."
    },
    {
      icon: Award,
      title: "Unmatched Expertise",
      description: "Over 14 years specializing exclusively in Beverly Hills luxury properties, with deep knowledge of market trends, property values, and neighborhood dynamics."
    },
    {
      icon: Heart,
      title: "White-Glove Service",
      description: "Personalized attention and concierge-level service tailored to your unique needs. Every detail is handled with precision and care."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive connections with international buyers, luxury property developers, and exclusive off-market opportunities worldwide."
    }
  ]

  const stats = [
    { value: "2010", label: "Established", icon: Award },
    { value: "200+", label: "Luxury Sales", icon: Home },
    { value: "$500M+", label: "Sales Volume", icon: TrendingUp },
    { value: "15+", label: "Countries Served", icon: Globe }
  ]

  const credentials = [
    {
      name: "Amanda Foster",
      role: "Luxury Real Estate Specialist",
      image: "AF",
      bio: "Licensed California Realtor, Certified Luxury Home Marketing Specialist (CLHMS)"
    },
    {
      name: "Michael Chen",
      role: "Investment Advisor", 
      image: "MC",
      bio: "Former Goldman Sachs analyst specializing in luxury real estate investments"
    },
    {
      name: "Isabella Rodriguez",
      role: "Client Relations Director",
      image: "IR",
      bio: "Multilingual specialist in international luxury property transactions"
    },
    {
      name: "James Wellington",
      role: "Market Research Analyst",
      image: "JW",
      bio: "Beverly Hills market expert with 20+ years of luxury property analysis"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-emerald-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-emerald-600/20 text-emerald-700">
            About Amanda Foster
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Beverly Hills Luxury
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Real Estate Expert
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dedicated to providing exceptional service to discerning clients seeking the finest luxury properties in Beverly Hills and surrounding prestigious neighborhoods.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Since 2010, I've had the privilege of representing Beverly Hills' most distinguished properties and working with an exclusive clientele of high-net-worth individuals, celebrities, and international investors.
              </p>
              <p>
                My passion for luxury real estate began with a deep appreciation for architectural excellence and the unique lifestyle that Beverly Hills offers. This passion, combined with my commitment to discretion and personalized service, has earned me the trust of the most discerning clients.
              </p>
              <p>
                With over $500 million in luxury sales, I bring unparalleled market knowledge, exclusive access to off-market properties, and a network of trusted professionals to every transaction.
              </p>
            </div>
            <Button className="group bg-emerald-600 hover:bg-emerald-700">
              View My Credentials
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-emerald-200/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-emerald-600/20 via-background to-blue-600/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-emerald-600/20 flex items-center justify-center">
                      <Quote className="size-8 text-emerald-600" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Luxury is in each detail, and every client deserves nothing less than perfection."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Amanda Foster, Founder</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-emerald-200/50 hover:border-emerald-600/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-emerald-600/10 flex items-center justify-center">
                    <Icon className="size-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Amanda Foster</h3>
            <p className="text-muted-foreground">
              The principles that guide my approach to luxury real estate and client service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-emerald-200/50 hover:border-emerald-600/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-emerald-600/10 flex items-center justify-center group-hover:bg-emerald-600/20 transition-colors">
                        <Icon className="size-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              Experienced professionals dedicated to providing exceptional luxury real estate services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {credentials.map((member, index) => (
              <Card key={index} className="border-emerald-200/50 hover:border-emerald-600/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-emerald-600 mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              View All Credentials
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-emerald-600/20 bg-gradient-to-br from-emerald-600/5 to-blue-600/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-emerald-600 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Amanda's expertise and discretion made our $15M Beverly Hills purchase seamless. Her knowledge of the luxury market is unmatched, and her service is truly exceptional."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center text-white font-bold">
                  RH
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Harrison</div>
                  <div className="text-sm text-muted-foreground">Tech Executive & Investor</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}