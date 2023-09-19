import "./_Button.scss"


export const Button = ({btnColor, text, onClick}) => {

    return(
        <button className={`btnStyle ${btnColor}`} onClick={onClick}>
            {text}
        </button>
    )
}