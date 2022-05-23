import './Header.css';
import Navigation from "../navigation/Navigation";
import {Link} from "react-router-dom";


function Header(props) {
    return (

        <header className={'header'}>
            <div className={'header__container'}>
                <div className={'header__logo'}>
                    <Link to="/">
                        <img className={'header__logo-image'} src={props.logoImage} alt={'CinemaWorld'} />
                    </Link>

                </div>
                <div className={'header__navigation'}>
                    <Navigation />
                </div>
            </div>
        </header>
    );
}

export default Header;