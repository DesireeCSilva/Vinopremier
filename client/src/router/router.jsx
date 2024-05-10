import { createBrowserRouter } from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import CreateForm from '../pages/CreateForm/CreateForm';
import EditForm from '../pages/EditForm/EditForm';
import LoginForm from '../pages/LoginForm/LoginForm';
import RegisterForm from '../pages/RegisterForm/RegisterForm';
import Payment from '../pages/Payment/Payment';
import SearchBar from '../components/SearchBar/SearchBar';



export const router = createBrowserRouter ([
    {
        path: "/",
        element: <LayoutPublic/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/filter",
                element: <SearchBar/>
            },
            {
                path: "/detail/:id",
                element: <Detail/>
            },
            {
                path: "/create",
                element: <CreateForm/>
            },
            {
                path: "/edit/:id",
                element: <EditForm/>
            },
            {
                path: "/login",
                element: <LoginForm/>
            },
            {
                path: "/register",
                element: <RegisterForm/>
            },
            {
                path: "/payment",
                element: <Payment/>
            }
        ]
    }
])

export default router;