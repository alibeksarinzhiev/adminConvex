import React from 'react';
import './Layout.scss'
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import {Outlet} from 'react-router-dom'
import Footer from "./Footer/Footer";

const Layout = () => {
    return (
        <div className='layout'>
            <Aside/>
            <div className="layout__main">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;