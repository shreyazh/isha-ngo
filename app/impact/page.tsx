import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowLeft, Calendar, MapPin, Quote } from "lucide-react"
import Link from "next/link"

export default function ImpactStoriesPage() {
  const featuredStories = [
    {
      id: 1,
      title: "From Streets to Success: Rajesh's Journey",
      excerpt:
        "After losing his job and home, Rajesh found hope through ISHA's homeless support program. Today, he has his own apartment and helps other homeless individuals.",
      author: "Rajesh Kumar",
      category: "Homeless Support",
      date: "December 15, 2024",
      location: "Mumbai",
      image: "/homeless-shelter-volunteers-serving-meals.png",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Education Opens Doors: Priya's College Dream",
      excerpt:
        "The first in her family to attend college, Priya credits ISHA's education program for providing the support and resources that made her dreams possible.",
      author: "Priya Sharma",
      category: "Education",
      date: "December 10, 2024",
      location: "Delhi",
      image: "/children-in-classroom-learning-with-teacher.png",
      readTime: "4 min read",
      featured: true,
    },
    {
      id: 3,
      title: "Empowering Women: Sunita's Health Journey",
      excerpt:
        "Through ISHA's women's health program, Sunita not only gained access to essential resources but became a health advocate in her community.",
      author: "Sunita Devi",
      category: "Women's Health",
      date: "December 5, 2024",
      location: "Pune",
      image: "/women-learning-about-health-education-with-tablets.png",
      readTime: "6 min read",
      featured: true,
    },
  ]

  const allStories = [
    ...featuredStories,
    {
      id: 4,
      title: "Truth Matters: Amit's Investigative Impact",
      excerpt:
        "With ISHA's support, journalist Amit exposed local corruption, leading to significant policy changes in his community.",
      author: "Amit Singh",
      category: "Local Journalism",
      date: "November 28, 2024",
      location: "Bangalore",
      image: "/local-journalist-interviewing-community-members.png",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Building Bridges: Community Volunteer Story",
      excerpt:
        "How one volunteer's dedication helped connect different communities and create lasting positive change.",
      author: "Maya Patel",
      category: "Community Impact",
      date: "November 20, 2024",
      location: "Ahmedabad",
      image: "/diverse-group-of-children-and-adults-smiling-toget.png",
      readTime: "5 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Second Chances: Recovery and Renewal",
      excerpt:
        "A story of resilience and hope as one individual rebuilds their life with comprehensive support from ISHA.",
      author: "Anonymous",
      category: "Homeless Support",
      date: "November 15, 2024",
      location: "Chennai",
      image: "/homeless-shelter-volunteers-serving-meals.png",
      readTime: "4 min read",
      featured: false,
    },
  ]

  const testimonials = [
    {
      quote: "ISHA didn't just give me shelter; they gave me hope and the tools to rebuild my life completely.",
      author: "Rajesh Kumar",
      role: "Former Program Participant",
      program: "Homeless Support",
    },
    {
      quote:
        "The education program opened doors I never knew existed. I'm now the first in my family to attend college.",
      author: "Priya Sharma",
      role: "College Student",
      program: "Education",
    },
    {
      quote: "Through ISHA's support, I was able to expose corruption that led to real change in our community.",
      author: "Amit Singh",
      role: "Independent Journalist",
      program: "Local Journalism",
    },
    {
      quote:
        "The health education and resources I received have transformed not just my life, but my entire family's wellbeing.",
      author: "Sunita Devi",
      role: "Community Health Advocate",
      program: "Women's Health",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Homeless Support":
        return "bg-primary/10 text-primary"
      case "Education":
        return "bg-accent/10 text-accent"
      case "Women's Health":
        return "bg-primary/10 text-primary"
      case "Local Journalism":
        return "bg-accent/10 text-accent"
      default:
        return "bg-muted text-muted-foreground"
    }
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
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Stories of Hope and Transformation
          </h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Real stories from real people whose lives have been transformed through ISHA's programs. These are the faces
            and voices behind our mission to create lasting change.
          </p>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Impact Stories</h2>
            <p className="text-lg text-muted-foreground">
              Transformative journeys that showcase the power of community support
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <Card key={story.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(story.category)}>{story.category}</Badge>
                    <span className="text-xs text-muted-foreground">{story.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{story.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">{story.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{story.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Read Full Story
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What People Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear directly from those whose lives have been touched by ISHA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <blockquote className="text-lg text-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <Badge variant="outline" className={getCategoryColor(testimonial.program)}>
                      {testimonial.program}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">All Impact Stories</h2>
            <p className="text-lg text-muted-foreground">Browse our complete collection of transformation stories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allStories.map((story) => (
              <Card key={story.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(story.category)}>{story.category}</Badge>
                    <span className="text-xs text-muted-foreground">{story.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {story.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{story.date}</span>
                    <span>{story.location}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our Collective Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Lives Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Positive Outcomes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Be Part of the Next Success Story</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your support can help create more stories of hope and transformation. Join us in making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Support Our Mission
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
    </div>
  )
}
