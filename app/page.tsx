import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, BookOpen, Users, Newspaper, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">ISHA</h1>
                <p className="text-xs text-muted-foreground">Ichha Sahayta Hito Anukool</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#causes" className="text-foreground hover:text-primary transition-colors">
                Our Causes
              </a>
              <a href="#impact" className="text-foreground hover:text-primary transition-colors">
                Impact
              </a>
              <a href="#volunteer" className="text-foreground hover:text-primary transition-colors">
                Volunteer
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Link href="/donate">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Donate Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                  Empowering Lives,
                  <span className="text-primary"> Building Hope</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  ISHA works tirelessly to support homeless individuals, educate children, provide essential health
                  resources to women, and strengthen local journalism in our communities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Join Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Communities</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img
                  src="/diverse-group-of-children-and-adults-smiling-toget.png"
                  alt="ISHA community members"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">Our Mission</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            At ISHA (Ichha Sahayta Hito Anukool), we believe every person deserves dignity, opportunity, and hope. We
            work across four key areas to create lasting change: supporting homeless individuals with shelter and
            resources, providing quality education to underprivileged children, ensuring women have access to essential
            health products, and empowering local journalism to strengthen our communities.
          </p>
        </div>
      </section>

      {/* Our Causes Overview */}
      <section id="causes" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Causes</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Four pillars of change that drive our mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/causes/homeless">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Homeless Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    Providing shelter, meals, and essential resources to help homeless individuals rebuild their lives
                    with dignity and hope.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/causes/education">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Education for All</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    Breaking the cycle of poverty through quality education, school supplies, and learning opportunities
                    for underprivileged children.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/causes/womens-health">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Women's Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    Ensuring women have access to sanitary pads, tablets for health education, and resources for better
                    health outcomes.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/causes/journalism">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Newspaper className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Local Journalism</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    Supporting independent local journalism to keep communities informed and strengthen democratic
                    participation.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stories Preview */}
      <section id="impact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Stories of Hope</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Real stories from real people whose lives have been transformed through our programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <blockquote className="text-lg text-foreground mb-6 italic leading-relaxed">
                  "ISHA didn't just give me shelter; they gave me hope and the tools to rebuild my life completely.
                  Today, I have my own apartment and a steady job."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Rajesh Kumar</p>
                    <p className="text-sm text-muted-foreground">Former Program Participant</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">Homeless Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-accent/40 mb-4" />
                <blockquote className="text-lg text-foreground mb-6 italic leading-relaxed">
                  "The education program opened doors I never knew existed. I'm now the first in my family to attend
                  college and pursuing my dreams."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">College Student</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-accent">Education</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/impact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Read More Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Join us in creating positive change in our communities. Every contribution, big or small, helps us build a
            better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Donate Today
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-bold text-foreground">ISHA</h3>
                  <p className="text-xs text-muted-foreground">Ichha Sahayta Hito Anukool</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering communities through compassionate action and sustainable change.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Our Causes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Homeless Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Women's Health
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Local Journalism
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Partner with Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@isha.org</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: Mumbai, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ISHA - Ichha Sahayta Hito Anukool. <a href="https://www.linkedin.com/in/shreyashsrivastva">Designed By Shreyash Srivastva.</a> All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
