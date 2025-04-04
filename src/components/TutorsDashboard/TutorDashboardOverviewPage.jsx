import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
// eslint-disable-next-line no-unused-vars
import { Clock, CheckCircle, XCircle, Calendar, BookOpen } from "lucide-react";
const TutorDashboardOverviewPage = () => {

  //  Sample gig data
  const activeGigs = [
    {
      subject: "Advanced Calculus",
      description: "Covering limits, derivatives and integration techniques",
      duration: "60 min",
      progress: "30 min remaining",
      students: 4,
      color: "bg-teal-600"
    },
    {
      subject: "Organic Chemistry",
      description: "Functional groups and reaction mechanisms",
      duration: "90 min",
      progress: "45 min remaining",
      students: 6,
      color: "bg-teal-700"
    },
    {
      subject: "Python Programming",
      description: "Data structures and algorithm implementation",
      duration: "120 min",
      progress: "70 min remaining",
      students: 12,
      color: "bg-teal-500"
    }
  ];

  const completedGigs = [
    {
      subject: "Literature Analysis",
      description: "Shakespeare's Macbeth character studies",
      duration: "60 min",
      completedOn: "Today, 10:30 AM",
      students: 8,
      color: "bg-teal-500"
    },
    {
      subject: "Physics Mechanics",
      description: "Newton's laws and momentum conservation",
      duration: "90 min",
      completedOn: "Today, 9:00 AM",
      students: 15,
      color: "bg-teal-600"
    },
    {
      subject: "Spanish Conversation",
      description: "Past tense practice and vocabulary building",
      duration: "45 min",
      completedOn: "Yesterday, 4:15 PM",
      students: 6,
      color: "bg-teal-400"
    }
  ];

  const closedGigs = [
    {
      subject: "Linear Algebra",
      description: "Matrix operations and determinants",
      duration: "75 min",
      closedReason: "Completed successfully",
      rating: 4.8,
      color: "bg-teal-700"
    },
    {
      subject: "World Geography",
      description: "Climate zones and geographical features",
      duration: "60 min",
      closedReason: "Completed successfully",
      rating: 4.9,
      color: "bg-teal-800"
    },
    {
      subject: "Web Development",
      description: "CSS frameworks and responsive design",
      duration: "90 min",
      closedReason: "Rescheduled",
      rating: null,
      color: "bg-teal-600"
    }
  ];

  const upcomingSessions = [
    {
      subject: "Economics Fundamentals",
      description: "Supply, demand and market equilibrium",
      scheduledFor: "Today, 2:00 PM",
      duration: "60 min",
      students: 10
    },
    {
      subject: "Cellular Biology",
      description: "Cell structure and organelle functions",
      scheduledFor: "Today, 3:30 PM",
      duration: "90 min",
      students: 12
    },
    {
      subject: "Statistics",
      description: "Probability distributions and hypothesis testing",
      scheduledFor: "Tomorrow, 10:00 AM",
      duration: "75 min",
      students: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-teal-800">Tutor Dashboard</h1>
          <p className="text-gray-600">Track and manage all tutoring sessions across the platform</p>
        </header>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-teal-700 mb-4">Gigs in Session</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeGigs.map((gig, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className={`${gig.color} text-white rounded-t-lg p-4`}>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium">{gig.subject}</CardTitle>
                    <Clock className="h-5 w-5" />
                  </div>
                  <CardDescription className="text-teal-50 mt-1">
                    In progress - {gig.progress}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700 mb-3">{gig.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-medium text-teal-700">{gig.duration}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Students</span>
                      <span className="font-medium text-teal-700">{gig.students}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-teal-700 mb-4">Completed Gigs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {completedGigs.map((gig, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className={`${gig.color} text-white rounded-t-lg p-4`}>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium">{gig.subject}</CardTitle>
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <CardDescription className="text-teal-50 mt-1">
                    Completed on {gig.completedOn}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700 mb-3">{gig.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-medium text-teal-700">{gig.duration}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Students</span>
                      <span className="font-medium text-teal-700">{gig.students}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-teal-700 mb-4">Closed Gigs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {closedGigs.map((gig, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className={`${gig.color} text-white rounded-t-lg p-4`}>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium">{gig.subject}</CardTitle>
                    <XCircle className="h-5 w-5" />
                  </div>
                  <CardDescription className="text-teal-50 mt-1">
                    {gig.closedReason}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700 mb-3">{gig.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-medium text-teal-700">{gig.duration}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Rating</span>
                      <span className="font-medium text-teal-700">{gig.rating || 'N/A'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="shadow-md">
            <CardHeader className="bg-teal-600 text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle>Upcoming Sessions</CardTitle>
                <Calendar className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <div>
                      <p className="font-medium text-teal-700">{session.subject}</p>
                      <p className="text-sm text-gray-600">{session.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{session.students} students enrolled</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-teal-700">{session.scheduledFor}</p>
                      <p className="text-sm text-gray-500">{session.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

};

export default TutorDashboardOverviewPage;
