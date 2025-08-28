"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, BookOpen, Newspaper, Shield, ArrowLeft, CreditCard, Banknote } from "lucide-react"
import Link from "next/link"

export default function DonatePage() {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("500")
  const [customAmount, setCustomAmount] = useState("")
  const [cause, setCause] = useState("general")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const predefinedAmounts = ["250", "500", "1000", "2500", "5000"]

  const causes = [
    { id: "general", name: "Where needed most", icon: Heart },
    { id: "homeless", name: "Homeless Support", icon: Users },
    { id: "education", name: "Education Programs", icon: BookOpen },
    { id: "womens-health", name: "Women's Health", icon: Shield },
    { id: "journalism", name: "Local Journalism", icon: Newspaper },
  ]

  const handleDonate = () => {
    // In a real app, this would integrate with a payment processor
    const donationAmount = amount === "custom" ? customAmount : amount
    alert(
      `Thank you for your ₹${donationAmount} ${donationType} donation to ${causes.find((c) => c.id === cause)?.name}!`,
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">ISHA</h1>
                <p className="text-xs text-muted-foreground">Ichha Sahayta Hito Anukool</p>
              </div>
            </Link>
            <Link href="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Make a Difference Today</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Your generous donation helps us provide shelter, education, health resources, and support local journalism.
            Every contribution, no matter the size, creates lasting impact in our communities.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Choose Your Donation</CardTitle>
                  <CardDescription>Select your donation amount and how you'd like to help</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Donation Type */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Donation Type</Label>
                    <RadioGroup value={donationType} onValueChange={setDonationType} className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time">One-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Monthly</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Amount Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Donation Amount (₹)</Label>
                    <RadioGroup value={amount} onValueChange={setAmount}>
                      <div className="grid grid-cols-3 gap-3">
                        {predefinedAmounts.map((amt) => (
                          <div key={amt} className="flex items-center space-x-2">
                            <RadioGroupItem value={amt} id={amt} />
                            <Label htmlFor={amt} className="cursor-pointer">
                              ₹{amt}
                            </Label>
                          </div>
                        ))}
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="custom" id="custom" />
                          <Label htmlFor="custom" className="cursor-pointer">
                            Custom
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    {amount === "custom" && (
                      <div className="mt-3">
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="max-w-xs"
                        />
                      </div>
                    )}
                  </div>

                  {/* Cause Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Support a Cause</Label>
                    <Select value={cause} onValueChange={setCause}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {causes.map((c) => (
                          <SelectItem key={c.id} value={c.id}>
                            <div className="flex items-center space-x-2">
                              <c.icon className="h-4 w-4" />
                              <span>{c.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Payment Method</Label>
                    <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="card" className="flex items-center space-x-2">
                          <CreditCard className="h-4 w-4" />
                          <span>Card</span>
                        </TabsTrigger>
                        <TabsTrigger value="upi" className="flex items-center space-x-2">
                          <Banknote className="h-4 w-4" />
                          <span>UPI</span>
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="card" className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input id="card-number" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div>
                            <Label htmlFor="card-name">Cardholder Name</Label>
                            <Input id="card-name" placeholder="John Doe" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="upi" className="space-y-4 mt-4">
                        <div>
                          <Label htmlFor="upi-id">UPI ID</Label>
                          <Input id="upi-id" placeholder="yourname@upi" />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  <Button
                    onClick={handleDonate}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Donate ₹{amount === "custom" ? customAmount || "0" : amount}{" "}
                    {donationType === "monthly" ? "Monthly" : "Now"}
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Impact Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">₹250</span>
                      <span className="text-sm">Feeds 10 people</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">₹500</span>
                      <span className="text-sm">School supplies for 1 child</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">₹1000</span>
                      <span className="text-sm">Health kit for 5 women</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">₹2500</span>
                      <span className="text-sm">Shelter for 1 person/month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Donate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 100% of donations go directly to programs</li>
                    <li>• Tax-deductible under 80G</li>
                    <li>• Transparent impact reporting</li>
                    <li>• Secure payment processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Ways to Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/volunteer">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Users className="mr-2 h-4 w-4" />
                      Volunteer with Us
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Heart className="mr-2 h-4 w-4" />
                    Share Our Mission
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
            <p className="text-muted-foreground">Join our community of donors making a real difference</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₹2.5M+</div>
              <div className="text-muted-foreground">Total Donations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-muted-foreground">Active Donors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Lives Changed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
