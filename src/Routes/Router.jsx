import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import FindPage from '../pages/Find';
import SignupPage from '../pages/Signup';
import LoginPage from '../pages/Login';
import GigsPage from '../pages/Gigs';



const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },

    {
        path: '/about',
        element: <AboutPage/>
    },

    {
        path: '/find-tutor',
        element: <FindPage/>
    },

    {
        path: '/gigs',
        element: <GigsPage />
    },


    {
        path: '/signup',
        element: <SignupPage/>
    },

    {
        path: '/login',
        element: <LoginPage/>
    }


])


export function Router() {

 return <RouterProvider router={router}/>
}