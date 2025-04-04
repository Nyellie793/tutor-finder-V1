import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Edit2, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";

const LearnerProfilePage = () => {
  const userDataString = localStorage.getItem("user");
  const userData = JSON.parse(userDataString);

  console.log("user: ", userData);
  console.log("userData.name: ", userData?.name);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold text-teal-600 mb-6">
          My Profile
        </h1>

        {/* Profile Card */}
        <Card className="mb-6 bg-white shadow-sm border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 bg-lilac-100">
                  <AvatarImage src="/api/placeholder/80/80" alt="Profile" />
                  <AvatarFallback className="bg-purple-100 text-purple-500">
                    {}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">{userData?.name}</h2>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{userData?.location}</span>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                className="text-teal-600 border-teal-100"
              >
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="mb-6 bg-white shadow-sm border-0">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-teal-600 text-lg">
                Personal Information
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="text-teal-600 border-teal-100"
              >
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">First Name</p>
                <p className="font-medium">Rafiqur</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Last Name</p>
                <p className="font-medium">Rahman</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email address</p>
                <p className="font-medium">{userData?.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <p className="font-medium">{userData?.phone_number}</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-1">WhatsApp Number</p>
              <p className="font-medium">{userData?.whatsapp_number}</p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-1">Secondary Email</p>
              <p className="font-medium"></p>
            </div>
          </CardContent>
        </Card>

        {/* Address */}
        <Card className="bg-white shadow-sm border-0 mb-6">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-teal-600 text-lg">Address</CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="text-teal-600 border-teal-100"
              >
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Country</p>
                <p className="font-medium">United Kingdom</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">City/State</p>
                <p className="font-medium">{userData?.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Home Address</p>
                <p className="font-medium"></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/*Socials*/}
        <Card className="bg-white shadow-sm border-0">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-teal-600 text-lg">Social</CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="text-teal-600 border-teal-100"
              >
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">< InstagramIcon>Instagram</InstagramIcon></p>
                <p className="font-medium"></p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1"><TwitterIcon></TwitterIcon></p>
                <p className="font-medium"></p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1"><FacebookIcon></FacebookIcon></p>
                <p className="font-medium"></p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-1"><LinkedinIcon></LinkedinIcon></p>
                <p className="font-medium"></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearnerProfilePage;
