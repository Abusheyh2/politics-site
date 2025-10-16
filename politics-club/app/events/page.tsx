import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

const upcomingEvents = [
  {
    title: "Guest Speaker: State Senator Maria Lopez",
    date: "March 22, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "Auditorium Hall",
    description:
      "Join us for an evening with State Senator Lopez as she discusses her work on education reform and answers your questions about state politics.",
    attendees: 45,
  },
  {
    title: "Debate: Universal Healthcare Policy",
    date: "March 28, 2025",
    time: "5:30 PM - 7:00 PM",
    location: "Room 204",
    description:
      "Our monthly debate series continues with a structured discussion on universal healthcare. All perspectives welcome.",
    attendees: 32,
  },
  {
    title: "Voter Registration Drive",
    date: "April 5, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Student Center Plaza",
    description:
      "Help us register students to vote! Volunteers needed to staff tables and assist with registration forms.",
    attendees: 28,
  },
  {
    title: 'Documentary Screening: "Whose Vote Counts"',
    date: "April 12, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Media Center",
    description:
      "Watch and discuss this powerful documentary about voting rights in America. Popcorn and discussion to follow.",
    attendees: 38,
  },
]

const pastEvents = [
  {
    title: "Town Hall with Local Mayor",
    date: "February 28, 2025",
    description:
      "Students engaged directly with our city mayor on local issues including housing, transportation, and youth programs.",
  },
  {
    title: "Model United Nations Simulation",
    date: "February 15, 2025",
    description:
      "Members participated in a day-long simulation of UN proceedings, debating international climate policy.",
  },
  {
    title: "Campaign Strategy Workshop",
    date: "January 30, 2025",
    description: "Professional campaign managers taught students about grassroots organizing and digital campaigning.",
  },
]

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Events & Activities</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From guest speakers and debates to voter registration drives and social events, there's always something
              happening at Politics Club.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Upcoming Events</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mark your calendar and join us for these exciting upcoming events.
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3 text-balance">{event.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {event.attendees} attending
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription>
                    </div>
                    <Button className="shrink-0">RSVP</Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Past Events</h2>
            <p className="text-muted-foreground leading-relaxed">
              Take a look at some of our recent successful events and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{event.date}</div>
                  <CardTitle className="text-xl text-balance">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{event.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Meetings */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground border-0 max-w-3xl mx-auto">
            <CardContent className="text-center py-12">
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-balance">Weekly Meetings</h2>
              <p className="text-lg mb-6 text-primary-foreground/90 leading-relaxed">
                Join us every Thursday evening for our regular club meetings featuring discussions, planning sessions,
                and guest speakers.
              </p>
              <div className="space-y-2 text-primary-foreground/90">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Every Thursday, 6:00 PM - 7:30 PM</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Room 204, Student Center</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
