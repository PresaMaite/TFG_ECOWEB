import "./_Home.scss";

import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";
import { SvgImages } from "../../components/svgImages/SvgImages";
import { Linechart } from "../../components/linechart/Linechart";

import bbdd from "./../../assets/img/bbdd.svg";
import dataTransfer from "./../../assets/img/transferencia.svg";
import device from "./../../assets/img/dispositivos.svg";


export const Home = () => {
    return(
        <>
            <main className="whiteSection mainStyle">
                <h1>La contaminación producida por la web</h1>
                <p>
                    A medida que el uso de Internet y la actividad en 
                    línea continúan creciendo, también lo hace el consumo 
                    de energía para mantener y acceder a los sitios web.
                </p>
                <Button btnColor="btnPurple" text="Sigue leyendo" />
            </main>

            <section className="blueSection">
                <div className="titleContainer">
                    <h2>¿Cómo afecta a la contaminación?</h2>
                    <p>Hay diferentes factores que afectan a la contaminación web:</p>
                </div>

                <div className="svgCardContainer">
                    <SvgImages svg={bbdd} text="Bases de datos" alt="imagen de bases de datos" />
                    <SvgImages svg={dataTransfer} text="Transferencia de datos" alt="imagen de la transferencia de datos" />
                    <SvgImages svg={device} text="Dispositivo del usuario"alt="imagen de diferentes dispositivos" />
                </div>
            </section>

            <section className="whiteSection">
                <div className="chartTitleContainer">
                    <div className="chartContainer">
                        <Linechart />
                    </div>

                    <div className="titleContainer">
                        <h2>Gráfica del consumo de Internet</h2>
                        <p>
                            Según estudios realizados, cada año se extiende más 
                            el uso de internet, por lo que la huella de carbono 
                            con el uso de las webs, es cada vez mayor.
                        </p>
                    </div>
                </div>

            </section>

            <section className="blueSection">
                <div className="titleContainer center">
                    <h2>Diseño ecológico, ¿qué es?</h2>
                    <p>
                        Es una forma de reducir la huella de carbono, mediante este 
                        estilo de diseño reduciremos el peso de los elementos multimedia, 
                        reduciendo el espacio necesario en servidores, así como su transferencia de datos.
                    </p>
                    <Link to="/ecodesign"><Button btnColor="btnBlue" text="Saber más" /></Link>
                </div>
            </section>

            <section className="whiteSection" >
                <h2>Contacta conmigo</h2>
                <p>
                    ¿Te sabes algún método de diseño ecológico que no haya publicado 
                    o te ha quedado alguna duda? ¡Contáctame!
                </p>
                <Button btnColor="btnPurple" text="Contactar" />
            </section>
        </>

    )
}
