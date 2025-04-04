import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import FindPage from '../pages/Find';
import SignupPage from '../pages/Signup';
import LoginPage from '../pages/Login';
import GigsPage from '../pages/Gigs';
import LearnerSettingsPage from "@/components/GigsDashboard/LearnerSettingsPage";
import GigCreate from "@/pages/GigCreate";
import GigDashboardOverview from "@/pages/GigDashboardOverview";
import GigDetails from "@/pages/GigDetails";
import GigEdit from "@/pages/GigEdit";
// import HomePage from "@/pages/HomePage";
import LearnerDashboard from "@/pages/LearnerDashboard";
import LearnerProfile from "@/pages/LearnerProfile";
import GigsDashboard from '@/pages/GigsDashboard';
import { Toaster } from 'react-hot-toast';
import TutorsApplications from '@/pages/TutorsApplications';
import TutorDashboard from '@/pages/TutorDashboard';
import  TutorDashboardOverview  from '@/pages/TutorDashboardOverview';
import TutorProfile from '@/pages/TutorProfile';
import TutorGigs from '@/pages/TutorGigs';
import TutorSettingsPage from '@/components/TutorsDashboard/TutorSettingsPage';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "/find-tutor",
    element: <FindPage />,
  },

  {
    path: "/gigs",
    element: <GigsPage />,
  },

  {
    path: "/signup",
    element: <SignupPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/learner-dashboard",
    element: <LearnerDashboard />,
    children: [
      {
        index: true,
        element: <GigDashboardOverview />,
      },
      {
        path: "gigs",
        element: <GigsDashboard />,
      },
      {
        path: "gigs/create",
        element: <GigCreate />,
      },
      {
        path: "gigs/:id",
        element: <GigDetails />,
      },
      {
        path: "gigs/:id/edit",
        element: <GigEdit />,
      },
      {
        path: "profile",
        element: <LearnerProfile />,
      },
      {
        path: "applications",
        element: <TutorsApplications />,
      },
      {
        path: "settings",
        element: <LearnerSettingsPage />,
      },
    ],
  },
  {
    path: "/tutor-dashboard",
    element: <TutorDashboard />,
    children: [
      {
        index: true,
        element: <TutorDashboardOverview />,
      },
      
      {
        path: "profile",
        element: <TutorProfile />,
      },
      {
        path: "tutor-gigs",
        element: <TutorGigs />,
      },
      {
        path: "tutor-settings",
        element: <TutorSettingsPage />,
      },
    ],
  },
]);


export function Router() {

 return (
   <>
     <Toaster />
     <RouterProvider router={router} />
   </>
 );
}