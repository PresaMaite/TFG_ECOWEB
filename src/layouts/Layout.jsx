import "./_Layout.scss";

import logo from "./../assets/logo/ecoweb.svg";

import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navBar/NavBar";

import { Outlet } from "react-router-dom";




export const Layout = () => {
    return(
        <>
            <NavBar logo={logo} />
            <Outlet />
            <Footer logo={logo} />
        </>
    )
}
