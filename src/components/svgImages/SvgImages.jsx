import "./_SvgImages.scss";

export const SvgImages = ({svg, alt, text}) => (

    <div className="svgCard">
        <img src={svg} alt={alt} />
        <h3>{text}</h3>
        <div className="svgCardBg" />
    </div>
)
