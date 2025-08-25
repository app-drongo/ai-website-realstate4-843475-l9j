// Contacthome Component
// Generated: 2025-08-25T11:04:03.341Z
// Template: contact-c001
// Context: Home
// Position: pages.0.sections.5

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Home,
  Calendar
} from "lucide-react"

export default function Contacthome() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Amanda",
      description: "Direct line for immediate assistance",
      contact: "(310) 555-LUXURY",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Amanda",
      description: "Professional real estate inquiries",
      contact: "amanda@amandafosterluxury.com",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Text Message",
      description: "Quick questions and updates",
      contact: "(310) 555-TEXT",
      action: "Send Text"
    }
  ]

  const serviceAreas = [
    {
      area: "Beverly Hills",
      address: "9200 Sunset Blvd, Suite 315",
      specialty: "Luxury Estates & Mansions"
    },
    {
      area: "Bel Air",
      address: "Serving exclusive properties",
      specialty: "Private Gated Communities"
    },
    {
      area: "Holmby Hills",
      address: "Premium residential focus",
      specialty: "Historic Luxury Homes"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50/30 to-slate-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-emerald-200 text-emerald-700">
            Contact Amanda Foster
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Find Your
            <span className="block bg-gradient-to-r from-emerald-600 to-slate-600 bg-clip-text text-transparent">
              Dream Home?
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Let's discuss your luxury real estate needs. Whether buying, selling, or investing 
            in Beverly Hills properties, Amanda is here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-slate-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-slate-800">
                <Send className="size-6 text-emerald-600" />
                Schedule Your Consultation
              </CardTitle>
              <CardDescription className="text-slate-600">
                Complete the form below and Amanda will contact you within 2 hours during business hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                      placeholder="(310) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium mb-2 text-slate-700">
                      Interest Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="buying">Buying a Home</option>
                      <option value="selling">Selling a Property</option>
                      <option value="investment">Investment Property</option>
                      <option value="consultation">Market Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                    Tell Amanda About Your Needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Describe your ideal property, budget range, timeline, or any specific requirements..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group bg-emerald-600 hover:bg-emerald-700">
                  Request Consultation
                  <Calendar className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-slate-800">
                <Phone className="size-5 text-emerald-600" />
                Reach Amanda Directly
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Card key={index} className="border-slate-200 hover:border-emerald-300 transition-colors cursor-pointer group shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                            <Icon className="size-6 text-emerald-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 text-slate-800">{method.title}</h4>
                            <p className="text-sm text-slate-600 mb-2">{method.description}</p>
                            <p className="font-medium text-emerald-600">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Service Areas */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-slate-800">
                <MapPin className="size-5 text-emerald-600" />
                Service Areas
              </h3>
              <div className="space-y-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="p-4 border border-slate-200 rounded-lg bg-white/50">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-800">{area.area}</h4>
                        <p className="text-sm text-slate-600 mt-1">{area.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                        {area.specialty}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-slate-800">
                  <Clock className="size-5 text-emerald-600" />
                  Availability
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="text-slate-800">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Saturday</span>
                    <span className="text-slate-800">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sunday</span>
                    <span className="text-slate-800">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-sm text-emerald-700 font-medium flex items-center gap-2">
                    <Home className="size-4" />
                    Emergency property showings available by appointment
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}