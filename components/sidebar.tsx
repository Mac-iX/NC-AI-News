import { Calendar, MapPin, Briefcase, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import NewsletterSignup from "./newsletter-signup"

const upcomingEvents = [
  {
    title: "AI in Healthcare Summit",
    date: "Dec 15, 2024",
    location: "Duke University",
    type: "Conference",
  },
  {
    title: "Triangle AI Meetup",
    date: "Dec 18, 2024",
    location: "Raleigh",
    type: "Meetup",
  },
  {
    title: "NC State AI Workshop",
    date: "Dec 22, 2024",
    location: "NC State",
    type: "Workshop",
  },
]

const jobListings = [
  {
    title: "Senior AI Engineer",
    company: "Credit Suisse",
    location: "Charlotte, NC",
    type: "Full-time",
    salary: "$140k - $180k",
  },
  {
    title: "ML Research Scientist",
    company: "Duke University",
    location: "Durham, NC",
    type: "Full-time",
    salary: "$120k - $150k",
  },
  {
    title: "AI Product Manager",
    company: "First Citizens Bank",
    location: "Raleigh, NC",
    type: "Full-time",
    salary: "$130k - $160k",
  },
]

export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="border-l-2 border-accent pl-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-sm leading-tight">{event.title}</h4>
                <Badge variant="outline" className="text-xs">
                  {event.type}
                </Badge>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {event.location}
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full">
            View All Events
          </Button>
        </CardContent>
      </Card>

      {/* Job Board */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Briefcase className="h-5 w-5 mr-2 text-primary" />
            AI Jobs in NC
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {jobListings.map((job, index) => (
            <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-sm leading-tight">{job.title}</h4>
                <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0 ml-2" />
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>{job.company}</div>
                <div className="flex items-center justify-between">
                  <span>{job.location}</span>
                  <Badge variant="secondary" className="text-xs">
                    {job.type}
                  </Badge>
                </div>
                <div className="font-medium text-primary">{job.salary}</div>
              </div>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full">
            View All Jobs
          </Button>
        </CardContent>
      </Card>

      {/* Sponsor Slot */}
      <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border-dashed">
        <CardContent className="p-6 text-center">
          <div className="text-sm text-muted-foreground mb-2">Sponsored</div>
          <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Your Ad Here</span>
          </div>
          <Button variant="link" size="sm" className="mt-2 text-xs">
            Advertise with us
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
