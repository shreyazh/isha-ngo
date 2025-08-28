import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Home, Share2 } from "lucide-react"
import Link from "next/link"

export default function DonationSuccessPage() {
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
          </div>
        </div>
      </nav>

      {/* Success Message */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground">Your generous donation has been successfully processed.</p>
          </div>

          <Card className="text-left mb-8">
            <CardHeader>
              <CardTitle>Donation Receipt</CardTitle>
              <CardDescription>Transaction ID: TXN123456789</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount:</span>
                <span className="font-semibold">₹1,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cause:</span>
                <span className="font-semibold">Education Programs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type:</span>
                <span className="font-semibold">One-time</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-semibold">December 28, 2024</span>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm text-muted-foreground">
                  A detailed receipt has been sent to your email address. This donation is tax-deductible under Section
                  80G.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold">Immediate Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Your donation is immediately allocated to the chosen program
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold">Regular Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Receive monthly updates on how your donation is making a difference
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold">Impact Report</h3>
                <p className="text-sm text-muted-foreground">
                  Annual impact report showing the collective difference we've made
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share Your Impact
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
