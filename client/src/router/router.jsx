import { createBrowserRouter } from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import CreateForm from '../pages/CreateForm/CreateForm';
import EditForm from '../pages/EditForm/EditForm';
import DateForm from '../pages/DateForm/DateForm';
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
                path: "/detail/:name",
                element: <Detail/>
            },
            {
                path: "/create",
                element: <CreateForm/>
            },
            {
                path: "/edit/:name",
                element: <EditForm/>
            },
            {
                path: "/date/:id",
                element: <DateForm/>
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