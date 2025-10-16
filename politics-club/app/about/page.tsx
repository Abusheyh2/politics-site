import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Politics Club</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2025, our Politics Club has become a vibrant community where students explore political ideas, engage in meaningful debate, and develop the skills needed to become informed citizens and future leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To foster a community of politically engaged students who think critically about current events,
                  understand diverse perspectives, and actively participate in the democratic process. We strive to
                  create an inclusive environment where all viewpoints are respected and rigorous debate is encouraged.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a generation of informed, engaged citizens who understand the complexities of political
                  systems and are equipped to address the challenges facing our society. Through education, dialogue,
                  and action, we aim to inspire positive change in our school and broader community.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What We Believe */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-balance">What We Believe</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Respectful Discourse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that productive political dialogue requires respect, empathy, and a willingness to
                    listen. Our club is a safe space where students can express their views without fear of judgment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Critical Thinking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We encourage members to question assumptions, analyze evidence, and develop well-reasoned arguments.
                    Critical thinking is essential for understanding complex political issues.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Civic Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that democracy requires active participation. Through voter registration drives,
                    community service, and advocacy, we put our values into action.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Diverse Perspectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We celebrate the diversity of political thought and welcome students from all backgrounds and
                    ideological perspectives. Our strength lies in our differences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      
    </div>
  )
}
