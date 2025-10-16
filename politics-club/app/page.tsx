import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold mb-3 text-primary-foreground/80 tracking-wide uppercase">
              Al Beuniy School
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Engage. Debate. Lead.</h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Join our community of politically engaged students who are passionate about understanding current events,
              debating important issues, and making a difference in our world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Join the Club
                  <span className="ml-2">→</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We create opportunities for students to explore political ideas and engage with the democratic process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-10 w-10 text-primary mb-2 text-4xl">💬</div>
                <CardTitle>Weekly Debates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Engage in structured debates on current political issues and develop your argumentation skills.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-10 w-10 text-primary mb-2 text-4xl">👥</div>
                <CardTitle>Guest Speakers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Meet local politicians, activists, and policy experts who share their experiences and insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-10 w-10 text-primary mb-2 text-4xl">📅</div>
                <CardTitle>Campaign Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Participate in voter registration drives, campaign volunteering, and civic engagement initiatives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-10 w-10 text-primary mb-2 text-4xl">📚</div>
                <CardTitle>Research Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Collaborate on policy research and analysis projects that explore real-world political challenges.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Make Your Voice Heard?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed">
            Join a community of students who are passionate about politics and committed to making a difference.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Get Involved Today
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
