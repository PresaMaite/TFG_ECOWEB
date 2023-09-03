import "./_Layout.scss";

import logo from "./../assets/logo/ecoweb.svg";

import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navBar/NavBar";
import { PagesCO2 } from "../pages/pagesCO2/PagesCO2";
 


export const Layout = () => {
    return(
        <>
            <NavBar logo={logo} />
            <PagesCO2 />
            <Footer logo={logo} />
        </>
    )
}
