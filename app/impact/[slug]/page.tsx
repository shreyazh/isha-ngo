import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowLeft, Calendar, MapPin, User, Share2 } from "lucide-react"
import Link from "next/link"

// This would typically come from a database or CMS
const getStoryBySlug = (slug: string) => {
  const stories = {
    "rajesh-journey": {
      id: 1,
      title: "From Streets to Success: Rajesh's Journey",
      author: "Rajesh Kumar",
      category: "Homeless Support",
      date: "December 15, 2024",
      location: "Mumbai",
      image: "/homeless-shelter-volunteers-serving-meals.png",
      readTime: "5 min read",
      content: `
        <p>Two years ago, Rajesh Kumar was sleeping on the streets of Mumbai, having lost his job and home due to unexpected medical expenses for his elderly mother. Today, he has his own apartment, a steady job, and volunteers at the same shelter that once gave him hope.</p>
        
        <p>"I never thought I'd see the light at the end of the tunnel," Rajesh recalls. "When I first came to ISHA's shelter, I was broken, ashamed, and had given up on life. But the staff didn't just give me a bed and food – they gave me dignity and hope."</p>
        
        <h3>The Turning Point</h3>
        <p>Rajesh's transformation began with ISHA's comprehensive support program. Beyond providing immediate shelter and meals, the program offered job placement assistance, mental health support, and life skills training.</p>
        
        <p>"The counselors helped me work through my depression and anxiety," he explains. "They helped me see that losing my home didn't define my worth as a person. The job training program taught me new skills in construction management, and within six months, I had steady employment."</p>
        
        <h3>Paying It Forward</h3>
        <p>Now employed as a construction supervisor, Rajesh has his own one-bedroom apartment and has been able to provide better care for his mother. But perhaps most importantly, he's become an advocate for others experiencing homelessness.</p>
        
        <p>"Every weekend, I volunteer at the shelter," he says with pride. "I share my story with new arrivals because I want them to know that this situation is temporary. There is hope, and there are people who care."</p>
        
        <p>Rajesh's story is a testament to the power of comprehensive support and the resilience of the human spirit. Through ISHA's programs, he didn't just find housing – he found his purpose and his voice as an advocate for change.</p>
      `,
    },
  }

  return stories[slug as keyof typeof stories] || null
}

export default function StoryDetailPage({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params.slug)

  if (!story) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Story Not Found</h1>
          <Link href="/impact">
            <Button>Back to Impact Stories</Button>
          </Link>
        </div>
      </div>
    )
  }

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
              <Link
                href="/impact"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Stories
              </Link>
              <Link href="/donate">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Donate Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Story Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge className={getCategoryColor(story.category)}>{story.category}</Badge>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">{story.title}</h1>

          <div className="flex items-center justify-between mb-8 text-muted-foreground">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{story.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{story.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{story.location}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{story.readTime}</span>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Image */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: story.content }}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Help Create More Success Stories</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your support can help transform more lives like Rajesh's. Every donation makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Support This Cause
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

      {/* Related Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">More Impact Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/children-in-classroom-learning-with-teacher.png"
                  alt="Education story"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4">
                <Badge className="bg-accent/10 text-accent mb-2">Education</Badge>
                <h3 className="font-semibold text-foreground mb-2">Education Opens Doors: Priya's College Dream</h3>
                <p className="text-sm text-muted-foreground mb-4">The first in her family to attend college...</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read Story
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/women-learning-about-health-education-with-tablets.png"
                  alt="Women's health story"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4">
                <Badge className="bg-primary/10 text-primary mb-2">Women's Health</Badge>
                <h3 className="font-semibold text-foreground mb-2">Empowering Women: Sunita's Health Journey</h3>
                <p className="text-sm text-muted-foreground mb-4">Through ISHA's women's health program...</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read Story
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/local-journalist-interviewing-community-members.png"
                  alt="Journalism story"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4">
                <Badge className="bg-accent/10 text-accent mb-2">Local Journalism</Badge>
                <h3 className="font-semibold text-foreground mb-2">Truth Matters: Amit's Investigative Impact</h3>
                <p className="text-sm text-muted-foreground mb-4">With ISHA's support, journalist Amit exposed...</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read Story
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
