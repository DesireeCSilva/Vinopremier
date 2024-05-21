import {Outlet, Navigate} from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import Nav from '../components/Nav/Nav'
import Footer from '../components/footer/Footer'


const LayoutPrivate = () => {
    const { isAuthenticated } = useUserContext();

    return( 
    <>
    <Nav/>
    {isAuthenticated ? 
    <Outlet/> 
    : <Navigate to = "/"/>}
    <Footer/>
    </>
    );
}

export default LayoutPrivate;