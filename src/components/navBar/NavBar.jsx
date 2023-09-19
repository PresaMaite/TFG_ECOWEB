import "./_NavBar.scss";

import menu from "./../../assets/img/menu.svg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const NavBar = ({logo}) => {
    const [showMenu, setshowMenu] = useState(false);

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
        setwindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);


    return(
        <>
            <nav className="layoutNavBar">
                <Link to="/home" className="img">
                    <img src={logo} alt="ecoweb logo" />
                </Link>

                {(windowWidth <= 850) && 
                <button onClick={() => setshowMenu(true)}>
                    <img src={menu} alt="menu" />
                </button>
                }

                {(windowWidth >= 851) &&
                <div className="desktopMenu">
                    <Link to="/home" >HOME</Link>
                    <Link to="/carbon">MEDICIÓN CO2</Link>
                    <Link to="/ecodesign" >ECO DISEÑO</Link>
                    <Link to="/pagesco2" >PÁGINAS POPULARES + CO2</Link>
                </div>
                }

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
