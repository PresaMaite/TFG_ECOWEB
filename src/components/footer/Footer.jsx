import { Link } from "react-router-dom";
import "./_Footer.scss";

export const Footer = ({logo}) => (
    <footer className="footerContainer">
        <img src={logo} alt="ecoweb logo" />
        <div className="footerInfo">
            <p>Contactar</p>
            <Link to="/faq" >FAQs</Link>
            <p>Privacidad de datos</p>
        </div>
        <p>©Ecoweb.Todos los derechos reservados.</p>
    </footer>
)
