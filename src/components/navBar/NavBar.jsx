import "./_NavBar.scss";

import logo from "./../../assets/logo/ecoweb.svg";
import menu from "./../../assets/img/menu.svg";
import { useState } from "react";

export const NavBar = () => {
    const [showMenu, setshowMenu] = useState(false);

    return(
        <>
            <nav className="layoutNavBar">
                <img src={logo} alt="ecoweb logo" />
                <button onClick={() => setshowMenu(true)}>
                    <img src={menu} alt="menu" />
                </button>
            </nav>

            {showMenu &&
            <div className="layoutMenu">
                <p onClick={() => setshowMenu(false)}>X</p>
                <p>HOME</p>
                <p>MEDICIÓN CO2</p>
                <p>ECO DISEÑO</p>
                <p>PÁGINAS POPULARES + CO2</p>
            </div>
            }
        
        </>
    )
}
