import "./_Layout.scss";

import logo from "./../assets/logo/ecoweb.svg";

import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navBar/NavBar";
import { Faq } from "../pages/faq/Faq";
 


export const Layout = () => {
    return(
        <>
            <NavBar logo={logo} />
            <Faq />
            <Footer logo={logo} />
        </>
    )
}
