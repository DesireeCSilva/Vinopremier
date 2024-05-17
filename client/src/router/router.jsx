import { createBrowserRouter } from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic';
import LayoutPrivate from '../layout/LayoutPrivate';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import CreateForm from '../pages/CreateForm/CreateForm';
import EditForm from '../pages/EditForm/EditForm';
import DateForm from '../pages/DateForm/DateForm';
import LoginForm from '../pages/LoginForm/LoginForm';
import RegisterForm from '../pages/RegisterForm/RegisterForm';
import Payment from '../pages/Payment/Payment';



export const router = createBrowserRouter ([
    {
        path: "/",
        element: <LayoutPublic/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "detail/:name",
                element: <Detail/>
            },
            {
                path: "login",
                element: <LoginForm/>
            },
            {
                path: "register",
                element: <RegisterForm/>
            }
        ]
    },

    {
        path: "privateArea",
        element: <LayoutPrivate/>,
        children: [
            {
                path: "create",
                element: <CreateForm/>
            },
            {
                path: "edit/:name",
                element: <EditForm/>
            },
            {
                path: "date/:name",
                element: <DateForm/>
            },
            {
                path: "payment/:id_user",
                element: <Payment/>
            }
        ]
    }
])

export default router;