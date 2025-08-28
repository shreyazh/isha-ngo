import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, Mic, Camera, Heart, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function JournalismPage() {
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
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Newspaper className="h-6 w-6 text-accent" />
                </div>
                <span className="text-accent font-semibold">Local Journalism</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Strengthening Democracy Through Local Journalism
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                A well-informed community is the foundation of democracy. We support independent local journalists and
                media outlets to ensure communities have access to accurate, relevant news and information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Support Journalism
                  <Newspaper className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/volunteer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    Become a Contributor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/local-journalist-interviewing-community-members.png"
                alt="Local journalist working in the community"
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Supporting Local Media</h2>
            <p className="text-lg text-muted-foreground">Empowering independent journalism in our communities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Newspaper className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Media Grants</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Financial support for independent journalists and small media outlets to cover important local stories
                  and investigations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Equipment Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Providing cameras, recording equipment, and technology tools to help journalists produce high-quality
                  content.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Mic className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Workshops and training sessions on digital journalism, fact-checking, and ethical reporting practices.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Journalism Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Journalists Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-muted-foreground">Stories Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Media Outlets Funded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Success Story</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-muted-foreground italic">
                "ISHA's support allowed me to investigate and expose corruption in our local government. Without their
                grant and equipment support, this important story would never have been told. Local journalism matters,
                and ISHA understands that."
              </p>
              <p className="font-semibold text-foreground">- Amit, Independent Journalist</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Support Press Freedom</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Help us strengthen democracy by supporting independent local journalism in our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Fund Journalism
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/volunteer">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Submit a Story Tip
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
