import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Tablet, Users, Shield, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WomensHealthPage() {
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
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Women's Health</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Empowering Women Through Health and Education
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Every woman deserves access to essential health resources and education. We provide sanitary pads,
                health education tablets, and comprehensive support to ensure women can maintain their dignity and
                health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Support Women's Health
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/volunteer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Join Our Mission
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/women-learning-about-health-education-with-tablets.png"
                alt="Women participating in health education program"
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Women's Health Programs</h2>
            <p className="text-lg text-muted-foreground">Comprehensive health support and education for women</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Sanitary Products</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Free distribution of high-quality sanitary pads to ensure women can maintain their health and dignity
                  during menstruation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Tablet className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Health Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tablets loaded with health education content, including reproductive health, nutrition, and wellness
                  information.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Support Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Community support groups where women can share experiences, learn from each other, and build lasting
                  friendships.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Health Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">Women Supported Monthly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Sanitary Pads Distributed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Health Education Tablets</div>
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
                "ISHA's women's health program changed my life. Not only do I have access to essential products, but the
                health education tablet taught me so much about taking care of myself and my family. I now help other
                women in my community too."
              </p>
              <p className="font-semibold text-foreground">- Sunita, Program Participant</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Support Women's Health and Dignity</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your contribution can provide essential health resources and education to women who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Fund Health Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/volunteer">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                Volunteer with Women
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
