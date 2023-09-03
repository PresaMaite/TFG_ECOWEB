import "./_CarbonCard.scss";

export const CarbonCard = ({title, value}) => {

    return(
        <div className="carbonCard">
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    )
}
