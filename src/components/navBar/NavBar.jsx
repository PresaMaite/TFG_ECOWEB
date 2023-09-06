import "./_NavBar.scss";

import menu from "./../../assets/img/menu.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = ({logo}) => {
    const [showMenu, setshowMenu] = useState(false);

    return(
        <>
            <nav className="layoutNavBar">
                <Link to="/home" className="img">
                    <img src={logo} alt="ecoweb logo" />
                </Link>
                <button onClick={() => setshowMenu(true)}>
                    <img src={menu} alt="menu" />
                </button>
            </nav>

            {showMenu &&
            <div className="layoutMenu">
                <p onClick={() => setshowMenu(false)}>X</p>
                <Link to="/home">HOME</Link>
                <Link to="/carbon">MEDICIÓN CO2</Link>
                <Link to="/ecodesign" >ECO DISEÑO</Link>
                <Link to="/pagesco2" >PÁGINAS POPULARES + CO2</Link>
            </div>
            }
        
        </>
    )
}
