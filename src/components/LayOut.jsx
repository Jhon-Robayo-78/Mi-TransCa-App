import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { BrowserRouter, Routes } from 'react-router-dom';
const Layout = ({children}) => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {children}
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Layout;