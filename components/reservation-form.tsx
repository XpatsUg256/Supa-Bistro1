"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ReservationForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Reservation Request Received!",
      description: "We'll contact you shortly to confirm your booking.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Reserve a Table</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Book your dining experience at Supa Bistro. We look forward to serving you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Reservation Form */}
          <Card>
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
              <CardDescription>Fill in your information to reserve a table</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    <User className="inline h-4 w-4 mr-2" />
                    Full Name
                  </Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    <Mail className="inline h-4 w-4 mr-2" />
                    Email
                  </Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    <Phone className="inline h-4 w-4 mr-2" />
                    Phone Number
                  </Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+256 700 000 000" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">
                      <Calendar className="inline h-4 w-4 mr-2" />
                      Date
                    </Label>
                    <Input id="date" name="date" type="date" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">
                      <Clock className="inline h-4 w-4 mr-2" />
                      Time
                    </Label>
                    <Input id="time" name="time" type="time" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">
                    <Users className="inline h-4 w-4 mr-2" />
                    Number of Guests
                  </Label>
                  <Input id="guests" name="guests" type="number" min="1" max="20" placeholder="2" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Special Requests (Optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Any dietary restrictions or special occasions?"
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Reserve Table"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Location & Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mukwano Mall
                    <br />
                    Kampala, Uganda
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Thursday: 10:00 AM - 10:00 PM</p>
                    <p>Friday - Saturday: 10:00 AM - 11:00 PM</p>
                    <p>Sunday: 10:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Phone: +256 700 000 000</p>
                    <p>Email: info@supabistro.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reservation Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  <li>• Reservations are held for 15 minutes past the booking time</li>
                  <li>• For groups of 8 or more, please call us directly</li>
                  <li>• Cancellations should be made 24 hours in advance</li>
                  <li>• We'll confirm your reservation via phone or email</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
