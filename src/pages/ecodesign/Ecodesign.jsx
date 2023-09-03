import "./_Ecodesign.scss";
import { SvgImages } from "../../components/svgImages/SvgImages";

import img from "./../../assets/img/image.svg";
import text from "./../../assets/img/text.svg";
import css from "./../../assets/img/css.svg";
import video from "./../../assets/img/video.svg";
import woff from "./../../assets/img/woff.svg";
import svg from "./../../assets/img/svg.svg";


export const Ecodesign = ({showTitle=true, }) => (
    <>
        {showTitle &&
        <main className="whiteSection ecoTitle">
            <h1>Pautas para tener un buen ECO Diseño</h1>
        </main>
        }

        {!showTitle &&
        <h2>Mejora la medición con los siguientes consejos</h2>
        }

        <section className="blueSection">
            <h2>¡Recuerda!</h2>
            <p>
                Un ECO Diseño no implica no poner imágenes o vídeos, 
                ¡simplemente es hacer el uso más optimizado posible!
            </p>

            <div className="svgCardContainer">
                <SvgImages
                    isCard={true}
                    svg={img} 
                    title="Imágenes" 
                    description="Reduce su peso más de un 30% utilizando formatos WebP y usando el tamaño más pequeño necesario, evita usar imágenes siempre que puedas." 
                    alt="imagen de bases de datos"
                />

                <SvgImages
                    isCard={true}
                    svg={video} 
                    title="Vídeos" 
                    description="Comprímelos y evita ponerlos en reproducción automática, podría ser una descarga innecesaria, evita usarlos siempre que puedas." 
                    alt="imagen de bases de datos" 
                />

                <SvgImages
                    isCard={true}
                    svg={woff} 
                    title="Fuentes optimizadas" 
                    description="Optimiza las fuentes utilizando el formato WOFF2 en vez de TTF, seleccionando los pesos y caracteres que se vayan a usar." 
                    alt="imagen de bases de datos" 
                />

                <SvgImages
                    isCard={true}
                    svg={svg} 
                    title="Formato vectorial" 
                    description="Son ligeros, no pierden resolución y te pueden dar esa transparencia que necesitas gracias a las máscaras. Úsalas siempre que puedas. " 
                    alt="imagen de bases de datos" 
                />

                <SvgImages
                    isCard={true}
                    svg={css} 
                    title="Animaciones" 
                    description="Las animaciones creadas mediante CSS y SVG reducen su peso en un 90% a comparación de un vídeo o un GIF. Úsalo siempre que puedas." 
                    alt="imagen de bases de datos" 
                />

                <SvgImages
                    isCard={true}
                    svg={text} 
                    title="Fuentes de texto" 
                    description="Hay fuentes que se encuentran en los sistemas operativos más utilizados, como Verdana, con esta práctica evitarás una descarga de más." 
                    alt="imagen de bases de datos" 
                />

            </div>
        </section>
    </>
)
