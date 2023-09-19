import "./_SvgImages.scss";

export const SvgImages = ({svg, alt, text, title, description, isCard, link, isImage=false}) => (

    <div className="svgCard">
        {!isCard &&
        <>
            <img src={svg} alt={alt} />
            <h3>{text}</h3>
        </>
        }

        {isCard && 
        <img src={svg} alt={alt} className="isCardStyle" />
        }

        <div className={`svgCardBg ${isImage && "isImage"}`} />

        {isCard &&
        <div className="cardDescription" >
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{link}</p>
        </div>
        }

    </div>
)
