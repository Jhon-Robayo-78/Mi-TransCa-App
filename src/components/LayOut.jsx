import React from "react";
import Navbar from "./navbar";
import TopBanner from "./TopBanner";
import { BrowserRouter, Routes } from 'react-router-dom';
const Layout = ({children}) => {
    return(
        <BrowserRouter>
            <TopBanner/>
            <Routes>
                {children}
            </Routes>
            <Navbar/>
            <br/><br/><br/><br/>
        </BrowserRouter>
    )
}

export default Layout;