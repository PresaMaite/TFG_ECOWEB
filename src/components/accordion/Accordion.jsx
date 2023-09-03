import "./_Accordion.scss";

import { useState } from "react";


export const Accordion = ({title, text}) => {
    const [showAccordion, setshowAccordion] = useState(false);

    return(
        <>
            <div className="accordionBtn" onClick={() => showAccordion ? setshowAccordion(false) : setshowAccordion(true)} >
                <h4>{title}</h4>
            </div>

            {showAccordion &&
            <div className="accordionText" >
                <p>{text}</p>
            </div>
            }
        </>
    )
}
