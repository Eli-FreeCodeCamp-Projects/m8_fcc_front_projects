import {createHashRouter, Outlet} from 'react-router-dom'
import {Home} from "./pages/home.jsx";
import {SingleFront} from "./pages/singleFront.jsx";
import {PageError} from "./pages/pageError.jsx";
import {Root} from "./pages/root.jsx";
import {FrontProjects} from "./pages/frontProjects.jsx";

export const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <PageError />,

        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: '/front-end-projects',
                element: <Outlet />,
                children: [
                    {
                        path: '',
                        element: <FrontProjects />
                    },
                    {
                        path: ':name',
                        element: <SingleFront />
                    }
                ]
            }
        ]
    }
], {
    //basename: "/m8_fcc_front_projects",
})