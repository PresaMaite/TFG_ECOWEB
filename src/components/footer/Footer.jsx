import "./_Footer.scss";

export const Footer = ({logo}) => (
    <footer className="footerContainer">
        <img src={logo} alt="" />
        <div className="footerInfo">
            <p>Contactar</p>
            <p>FAQs</p>
            <p>Privacidad de datos</p>
        </div>
        <p>©Ecoweb.Todos los derechos reservados.</p>
    </footer>
)
