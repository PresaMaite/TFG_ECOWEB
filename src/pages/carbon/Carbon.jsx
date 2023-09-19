import "./_Carbon.scss";

import { CarbonAPI } from "../../services/CarbonAPI";
import { useEffect, useState } from "react";

import { Button } from "../../components/button/Button";
import { CarbonCard } from "../../components/carbonCard/CarbonCard";
import { Ecodesign } from "../ecodesign/Ecodesign";

export const Carbon = () => {

    const [carbon, setcarbon] = useState();
    const [search, setsearch] = useState("");

    useEffect(() => {
        CarbonAPI(search)
            .then((data) => setcarbon(data) )
    }, [search])
    
    
    let inputData = "";
    
    return(
        <>
            <main className="whiteSection mainStyle">
                <h1>Mide la huella de carbono de tu web</h1>
                <input 
                    type="text" 
                    placeholder="https://www.ejemplo.com/" 
                    onKeyUp={(e) => (e.key==="Enter") && setsearch(e.target.value)} 
                    onChange={(e) => inputData = e.target.value}
                />
                <Button btnColor="btnPurple" text="Medir CO2" onClick={() => setsearch(inputData)} />
            </main>

            {carbon &&
            <section className="blueSection">
                {carbon?.green && 
                <div className="titleContainer">
                    <h2>¡Felicidades!</h2>
                    <p>Tu web es ECO y un 83% más limpia que otras webs.</p>
                </div>
                }
                {!carbon?.green && 
                <div className="titleContainer">
                    <h2>Ups, ¡parece que podría ser más ECO!</h2>
                    <p>Tu web solo un 8% más limpia que otras webs.</p>
                </div>
                }

                <div className="svgCardContainer">
                    <CarbonCard title="Bytes" value={carbon?.bytes} />
                    <CarbonCard title="Energía" value={carbon?.statistics?.energy} />
                    <CarbonCard title="CO2" value={carbon?.statistics?.co2?.renewable?.grams} />
                </div>
            </section>
            }

            {carbon?.green &&
            <section className="whiteSection">
                <h2>Siempre se puede mejorar, ¿no?</h2>
                <p>
                    Ya sea buen o mal resultado, te invito a que te pases 
                    por el apartado de pautas para un buen ECO Diseño e 
                    intentar aplicar las mejores prácticas ecológicas en tu web.
                </p>
                <Button btnColor="btnPurple" text="Saber más" />
            </section>
            }


            {(carbon && !carbon?.green) &&
            <section>
                <Ecodesign showTitle={false} />
            </section>
            }
        
        </>

    )
}
