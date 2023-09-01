import "./_Button.scss"


export const Button = ({btnColor, text}) => {

    return(
        <button className={`btnStyle ${btnColor}`}>
            {text}
        </button>
    )
}