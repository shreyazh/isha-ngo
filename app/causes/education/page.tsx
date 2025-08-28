import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Users, Heart, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EducationPage() {
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
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <span className="text-accent font-semibold">Education for All</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Breaking the Cycle of Poverty Through Education
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Education is the most powerful tool for breaking the cycle of poverty. We provide quality learning
                opportunities, school supplies, and support to ensure every child has the chance to build a brighter
                future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Support Education
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/volunteer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    Become a Tutor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/children-in-classroom-learning-with-teacher.png"
                alt="Children learning in classroom"
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Educational Programs</h2>
            <p className="text-lg text-muted-foreground">Comprehensive support for underprivileged children</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Learning Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  After-school learning centers providing homework help, tutoring, and educational activities in safe,
                  nurturing environments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>School Supplies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Free books, notebooks, uniforms, and educational materials to ensure financial barriers don't prevent
                  learning.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  One-on-one mentoring programs connecting children with caring adults who provide guidance and support.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Educational Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-muted-foreground">Children Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">School Attendance Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">80%</div>
              <div className="text-muted-foreground">Grade Improvement</div>
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
                "Thanks to ISHA's education program, I was able to complete my studies and am now the first in my family
                to attend college. Education truly changed my life and opened doors I never knew existed."
              </p>
              <p className="font-semibold text-foreground">- Priya, College Student</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Invest in a Child's Future</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your support can provide education, supplies, and mentorship to children who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Fund Education Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/volunteer">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Volunteer as Tutor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
