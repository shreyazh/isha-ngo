"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Users, BookOpen, Newspaper, Shield, ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    age: "",
    occupation: "",
    experience: "",
    interests: [] as string[],
    availability: [] as string[],
    skills: [] as string[],
    motivation: "",
    emergencyContact: "",
    emergencyPhone: "",
  })

  const volunteerOpportunities = [
    {
      id: "homeless",
      title: "Homeless Support",
      icon: Users,
      description: "Help at shelters, serve meals, provide support services",
      activities: ["Meal service", "Shelter assistance", "Counseling support", "Job placement help"],
    },
    {
      id: "education",
      title: "Education Programs",
      icon: BookOpen,
      description: "Tutor children, assist with learning programs, organize activities",
      activities: ["Tutoring", "Reading programs", "Educational activities", "Mentorship"],
    },
    {
      id: "womens-health",
      title: "Women's Health",
      icon: Shield,
      description: "Support health education, distribute resources, lead workshops",
      activities: ["Health workshops", "Resource distribution", "Support groups", "Education sessions"],
    },
    {
      id: "journalism",
      title: "Local Journalism",
      icon: Newspaper,
      description: "Help with media production, research, community outreach",
      activities: ["Content creation", "Research assistance", "Community interviews", "Social media"],
    },
  ]

  const availabilityOptions = [
    "Weekday mornings",
    "Weekday afternoons",
    "Weekday evenings",
    "Weekend mornings",
    "Weekend afternoons",
    "Weekend evenings",
  ]

  const skillsOptions = [
    "Teaching/Tutoring",
    "Counseling",
    "Cooking",
    "Healthcare",
    "Technology",
    "Writing/Journalism",
    "Social Media",
    "Event Planning",
    "Translation",
    "Photography",
    "Administrative",
    "Fundraising",
  ]

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const handleAvailabilityChange = (time: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      availability: checked ? [...prev.availability, time] : prev.availability.filter((a) => a !== time),
    }))
  }

  const handleSkillsChange = (skill: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      skills: checked ? [...prev.skills, skill] : prev.skills.filter((s) => s !== skill),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to a backend
    alert("Thank you for your interest in volunteering! We'll contact you within 48 hours.")
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
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <Link href="/donate">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Donate Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Join Our Volunteer Community
          </h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Make a meaningful difference in your community. Whether you have a few hours a week or a day a month, your
            time and skills can help transform lives.
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-muted-foreground">Choose from various ways to help our community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {volunteerOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <opportunity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {opportunity.activities.map((activity, index) => (
                      <li key={index}>• {activity}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Volunteer Registration</CardTitle>
              <CardDescription>
                Fill out this form to join our volunteer community. We'll match you with opportunities that fit your
                interests and schedule.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Select
                        value={formData.age}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, age: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18-25">18-25</SelectItem>
                          <SelectItem value="26-35">26-35</SelectItem>
                          <SelectItem value="36-45">36-45</SelectItem>
                          <SelectItem value="46-55">46-55</SelectItem>
                          <SelectItem value="56-65">56-65</SelectItem>
                          <SelectItem value="65+">65+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input
                        id="occupation"
                        value={formData.occupation}
                        onChange={(e) => setFormData((prev) => ({ ...prev, occupation: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                {/* Volunteer Interests */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Areas of Interest</h3>
                  <p className="text-sm text-muted-foreground">
                    Select all areas where you'd like to volunteer (check at least one)
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {volunteerOpportunities.map((opportunity) => (
                      <div key={opportunity.id} className="flex items-start space-x-2">
                        <Checkbox
                          id={opportunity.id}
                          checked={formData.interests.includes(opportunity.id)}
                          onCheckedChange={(checked) => handleInterestChange(opportunity.id, checked as boolean)}
                        />
                        <div className="space-y-1">
                          <Label htmlFor={opportunity.id} className="text-sm font-medium cursor-pointer">
                            {opportunity.title}
                          </Label>
                          <p className="text-xs text-muted-foreground">{opportunity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Availability</h3>
                  <p className="text-sm text-muted-foreground">When are you available to volunteer?</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {availabilityOptions.map((time) => (
                      <div key={time} className="flex items-center space-x-2">
                        <Checkbox
                          id={time}
                          checked={formData.availability.includes(time)}
                          onCheckedChange={(checked) => handleAvailabilityChange(time, checked as boolean)}
                        />
                        <Label htmlFor={time} className="text-sm cursor-pointer">
                          {time}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Skills & Experience</h3>
                  <p className="text-sm text-muted-foreground">What skills can you bring to our organization?</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {skillsOptions.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={formData.skills.includes(skill)}
                          onCheckedChange={(checked) => handleSkillsChange(skill, checked as boolean)}
                        />
                        <Label htmlFor={skill} className="text-sm cursor-pointer">
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience & Motivation */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="experience">Previous Volunteer Experience</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about any previous volunteer work or relevant experience..."
                      value={formData.experience}
                      onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="motivation">Why do you want to volunteer with ISHA? *</Label>
                    <Textarea
                      id="motivation"
                      required
                      placeholder="Share what motivates you to volunteer and how you hope to contribute..."
                      value={formData.motivation}
                      onChange={(e) => setFormData((prev) => ({ ...prev, motivation: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Emergency Contact</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                      <Input
                        id="emergencyContact"
                        required
                        value={formData.emergencyContact}
                        onChange={(e) => setFormData((prev) => ({ ...prev, emergencyContact: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        required
                        value={formData.emergencyPhone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, emergencyPhone: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                {/* Agreement */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="agreement" required />
                    <Label htmlFor="agreement" className="text-sm cursor-pointer">
                      I agree to undergo a background check if required and commit to ISHA's volunteer guidelines and
                      code of conduct. *
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Submit Volunteer Application
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What to Expect</h2>
            <p className="text-lg text-muted-foreground">Your journey as an ISHA volunteer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Application Review</h3>
              <p className="text-muted-foreground">
                We'll review your application and contact you within 48 hours to discuss opportunities that match your
                interests.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Orientation & Training</h3>
              <p className="text-muted-foreground">
                Attend our volunteer orientation and receive training specific to your chosen area of service.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Start Making Impact</h3>
              <p className="text-muted-foreground">
                Begin your volunteer journey and start making a meaningful difference in your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Questions About Volunteering?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our volunteer coordinator is here to help you find the perfect opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>volunteer@isha.org</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
