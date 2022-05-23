import "./Navigation.css";
import {Link} from "react-router-dom";

function Navigation() {
    return(
        <nav className={'navigation'}>
            <Link className="navigation__link" to="/">Главная</Link>
            <Link className="navigation__link" to="/contacts">Контакты</Link>
        </nav>
    );
}

export default Navigation;