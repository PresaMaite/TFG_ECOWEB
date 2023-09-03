// import "./_Ecodesign.scss";
import { SvgImages } from "../../components/svgImages/SvgImages";

import google from "./../../assets/img/google.webp";
import youtube from "./../../assets/img/youtube.webp";
import facebook from "./../../assets/img/facebook.webp";


export const PagesCO2 = () => (
    <>
        <main className="whiteSection ecoTitle">
            <h1>Las páginas más usadas y su CO2</h1>
        </main>

        <section className="blueSection">
            <h2>¿Usas alguna de estas webs?</h2>
            <p>
                Estas son algunas de las páginas más usadas en Internet:
            </p>

            <div className="svgCardContainer">
                <SvgImages
                    isCard={true}
                    svg={google}
                    title="Google" 
                    description="Una de las páginas más usadas con más de 3.500 millones de búsquedas al día, ¿cuánto contaminará cada búsqueda?" 
                    alt="imagen de bases de datos" 
                />

                <SvgImages
                    isCard={true}
                    svg={youtube}
                    title="YouTube" 
                    description="Se suben de media unos 5 mil millones de vídeos al día con miles de millones de búsquedas al día." 
                    alt="imagen de bases de datos" 
                />

                <SvgImages
                    isCard={true}
                    svg={facebook}
                    title="Facebook" 
                    description="Es la red social más grande del mundo, con más de 2,2 billones de usuarios activos al mes." 
                    alt="imagen de bases de datos" 
                />

            </div>
        </section>
    </>
)
