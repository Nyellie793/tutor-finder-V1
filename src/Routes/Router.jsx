import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import FindPage from '../pages/Find';
import BecomePage from '../pages/Become';
import SignupPage from '../pages/Signup';
import LoginPage from '../pages/Login';



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
        path: '/become-tutor',
        element: <BecomePage/>
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