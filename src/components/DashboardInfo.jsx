/* eslint-disable no-unused-vars */
// import DashboardCards from "./cards.jsx/DashboardCards";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Book,
  Award,
  Users,
  BarChart2,
  ChevronRight,
} from "lucide-react";

const DashboardInfo = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
//   const [user, setUser] = useState(); 
  const userDataString = localStorage.getItem("user");
  const userData = JSON.parse(userDataString);

  console.log("user: ", userData);
  console.log("userData.name: ",userData?.name);

  useEffect(() => {
    // Get current date in readable format
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
    
    // Update time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };
    
    updateTime();
    const timeInterval = setInterval(updateTime, 60000);
    
    return () => clearInterval(timeInterval);
  }, []);  
 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome back, {userData?.name}!
          </h2>
          <p className="text-gray-600 mt-2">
            Here&apos;s an overview of your learning journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-teal-500">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-teal-100 text-teal-600 mr-4">
                <Book size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Gigs</p>
                <p className="text-2xl font-semibold text-gray-800">4</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-300">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <Award size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed Gigs</p>
                <p className="text-2xl font-semibold text-gray-800">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-teal-500">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-teal-100 text-teal-600 mr-4">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Study Hours</p>
                <p className="text-2xl font-semibold text-gray-800">28</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-300">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <Users size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Tutors</p>
                <p className="text-2xl font-semibold text-gray-800">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Weekly Progress
            </h3>
            <button className="text-teal-600 text-sm flex items-center">
              View Details <ChevronRight size={16} />
            </button>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="w-full max-w-lg">
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-600">Monday</span>
                <span className="text-xs text-gray-600">2 hours</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-teal-600 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>

              <div className="flex justify-between mb-2 mt-4">
                <span className="text-xs text-gray-600">Tuesday</span>
                <span className="text-xs text-gray-600">3 hours</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-teal-600 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>

              <div className="flex justify-between mb-2 mt-4">
                <span className="text-xs text-gray-600">Wednesday</span>
                <span className="text-xs text-gray-600">1 hour</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-teal-600 h-2.5 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>

              <div className="flex justify-between mb-2 mt-4">
                <span className="text-xs text-gray-600">Thursday</span>
                <span className="text-xs text-gray-600">4 hours</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-teal-600 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>

              <div className="flex justify-between mb-2 mt-4">
                <span className="text-xs text-gray-600">Friday</span>
                <span className="text-xs text-gray-600">2 hours</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-teal-600 h-2.5 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Upcoming Sessions
              </h3>
              <button className="text-teal-600 text-sm flex items-center">
                View All <ChevronRight size={16} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-teal-50 rounded-lg">
                <div className="p-3 rounded-full bg-teal-100 text-teal-600 mr-4">
                  <Calendar size={20} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-800">
                    Advanced Mathematics
                  </h4>
                  <p className="text-sm text-gray-600">
                    Today, 3:00 PM - 4:30 PM
                  </p>
                </div>
                <button className="px-3 py-1 bg-teal-600 text-white text-sm rounded">
                  Join
                </button>
              </div>

              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                  <Calendar size={20} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-800">Physics Practicals</h4>
                  <p className="text-sm text-gray-600">
                    Tomorrow, 10:00 AM - 12:00 PM
                  </p>
                </div>
                <button className="px-3 py-1 bg-purple-400 text-white text-sm rounded">
                  Join
                </button>
              </div>

              <div className="flex items-center p-3 bg-teal-50 rounded-lg">
                <div className="p-3 rounded-full bg-teal-100 text-teal-600 mr-4">
                  <Calendar size={20} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-800">
                    English Literature
                  </h4>
                  <p className="text-sm text-gray-600">
                    Mar 16, 2:00 PM - 3:30 PM
                  </p>
                </div>
                <button className="px-3 py-1 bg-teal-600 text-white text-sm rounded">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Assignments Due */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Assignments Due
              </h3>
              <button className="text-teal-600 text-sm flex items-center">
                View All <ChevronRight size={16} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border-l-4 border-red-400 bg-white rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="text-sm font-semibold text-gray-800">
                      Mathematics Problem Set
                    </p>
                    <p className="text-xs text-gray-600">Due: Today</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                  Urgent
                </span>
              </div>

              <div className="flex items-center justify-between p-3 border-l-4 border-yellow-400 bg-white rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="text-sm font-semibold text-gray-800">
                      Physics Lab Report
                    </p>
                    <p className="text-xs text-gray-600">Due: Tomorrow</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                  Soon
                </span>
              </div>

              <div className="flex items-center justify-between p-3 border-l-4 border-green-400 bg-white rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="text-sm font-semibold text-gray-800">
                      English Essay Draft
                    </p>
                    <p className="text-xs text-gray-600">Due: Mar 20</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  Upcoming
                </span>
              </div>

              <div className="flex items-center justify-between p-3 border-l-4 border-green-400 bg-white rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="text-sm font-semibold text-gray-800">
                      Chemistry Quiz
                    </p>
                    <p className="text-xs text-gray-600">Due: Mar 22</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  Upcoming
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardInfo