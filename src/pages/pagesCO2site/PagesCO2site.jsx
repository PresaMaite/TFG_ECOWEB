import "./_PagesCO2site.scss";

import { CarbonCard } from "../../components/carbonCard/CarbonCard";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarbonAPI } from "../../services/CarbonAPI";


export const PagesCO2site = () => {

    const page = useParams().page;

    const [search, setsearch] = useState("");


    useEffect(() => {

        switch (page) {
            case "Google":
                setsearch("https://www.google.es/?gws_rd=ssl");
                break;
    
            case "Facebook":
                setsearch("https://es-es.facebook.com/");
                break;
    
            case "YouTube":
                setsearch("https://www.youtube.com/");
                break;
        
            default:
                break;
        }

    }, [page])


    const [carbon, setcarbon] = useState();

    useEffect(() => {
        CarbonAPI(search)
            .then((data) => setcarbon(data) )
    }, [search])


    return(
        <>
            <main className="whiteSection ecoTitle">
                <h1>Las páginas más usadas y su CO2</h1>
            </main>

            {carbon &&
            <section className="blueSection">
                <div className="titleContainer">
                    <h2>{page}</h2>

                    {carbon?.green && 
                        <p>Tu web es ECO y un 83% más limpia que otras webs.</p>
                    }

                    {!carbon?.green && 
                        <p>Tu web solo un 8% más limpia que otras webs.</p>
                    }
                </div>

                <div className="svgCardContainer">
                    <CarbonCard title="Bytes" value={carbon?.bytes} />
                    <CarbonCard title="Energía" value={carbon?.statistics?.energy} />
                    <CarbonCard title="CO2" value={carbon?.statistics?.co2?.renewable?.grams} />
                </div>
            </section>
            }
        </>
    )
}
