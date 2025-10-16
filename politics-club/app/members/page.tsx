import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mail } from "lucide-react"

const executiveBoard = [
  {
    name: "Sarah Chen",
    role: "President",
    bio: "Senior majoring in Political Science. Passionate about environmental policy and youth voter engagement.",
    initials: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Vice President",
    bio: "Junior studying International Relations. Focuses on foreign policy and global governance issues.",
    initials: "MJ",
  },
  {
    name: "Emily Rodriguez",
    role: "Secretary",
    bio: "Sophomore in Economics. Interested in fiscal policy and economic justice.",
    initials: "ER",
  },
  {
    name: "David Kim",
    role: "Treasurer",
    bio: "Junior studying Public Policy. Advocates for education reform and social equity.",
    initials: "DK",
  },
]

const committees = [
  {
    name: "Debate Committee",
    description: "Organizes weekly debates and discussion forums on current political topics.",
    members: 15,
  },
  {
    name: "Events Committee",
    description: "Plans guest speaker events, campus forums, and community engagement activities.",
    members: 12,
  },
  {
    name: "Research Committee",
    description: "Conducts policy research and publishes analysis on important political issues.",
    members: 10,
  },
  {
    name: "Outreach Committee",
    description: "Manages voter registration drives and community partnerships.",
    members: 18,
  },
]

export default function MembersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Members</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet the dedicated students who lead our club and make our mission possible. Our diverse membership brings
              together students from all backgrounds and political perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Executive Board</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our leadership team is committed to fostering an inclusive and engaging environment for all members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveBoard.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Avatar className="h-24 w-24 mx-auto mb-4 bg-primary text-primary-foreground text-2xl">
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <div className="text-sm text-primary font-medium">{member.role}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                  <button className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    <Mail className="h-4 w-4" />
                    Contact
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Our Committees</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join one of our committees to get involved in specific areas of club activities and make a direct impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {committees.map((committee, index) => (
              <Card key={index} className="hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{committee.name}</CardTitle>
                  <div className="text-sm text-muted-foreground">{committee.members} active members</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{committee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Become a Member</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed">
                We welcome students of all political backgrounds and experience levels. Join us to engage in meaningful
                dialogue and make a difference.
              </p>
              <div className="text-primary-foreground/90">Meetings every Thursday at 6:00 PM in Room 204</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
