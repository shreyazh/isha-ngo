import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Home, Utensils, Heart, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomelessSupportPage() {
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
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Donate Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Homeless Support</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Providing Shelter and Hope to Those in Need
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Every person deserves a safe place to sleep and the dignity of basic necessities. Our homeless support
                program provides immediate relief and long-term solutions to help individuals rebuild their lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Support This Cause
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/volunteer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Volunteer with Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/homeless-shelter-volunteers-serving-meals.png"
                alt="Volunteers helping homeless individuals"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How We Help</h2>
            <p className="text-lg text-muted-foreground">Comprehensive support for homeless individuals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Emergency Shelter</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Safe, clean temporary housing with basic amenities including beds, bathrooms, and security for those
                  without homes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Daily Meals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nutritious breakfast, lunch, and dinner served daily to ensure no one goes hungry in our community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Support Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Job placement assistance, mental health support, and life skills training to help individuals achieve
                  independence.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">People Sheltered Monthly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4,500+</div>
              <div className="text-muted-foreground">Meals Served Monthly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Successfully Rehoused</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Success Story</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-muted-foreground italic">
                "ISHA gave me more than just a bed and meals. They gave me hope and the tools to rebuild my life. Today,
                I have my own apartment and a steady job. I'm forever grateful."
              </p>
              <p className="font-semibold text-foreground">- Rajesh, Former Program Participant</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Help Us Make a Difference</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your support can provide shelter, meals, and hope to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Donate to Homeless Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/volunteer">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                Volunteer at Shelter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
