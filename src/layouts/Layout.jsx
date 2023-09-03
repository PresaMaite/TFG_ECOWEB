import "./_Layout.scss";

import logo from "./../assets/logo/ecoweb.svg";

import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navBar/NavBar";
import { Carbon } from "../pages/carbon/carbon";
 


export const Layout = () => {
    return(
        <>
            <NavBar logo={logo} />
            <Carbon />
            <Footer logo={logo} />
        </>
    )
}
