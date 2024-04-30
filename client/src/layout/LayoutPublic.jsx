import React from "react";
import { Outlet } from "react-router-dom";
import Nav from '../components/Nav/Nav';
import Footer from '../components/footer/Footer'

const LayoutPublic = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default LayoutPublic