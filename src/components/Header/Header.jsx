import { Link } from "react-router-dom";
import './style.css';

function Header(){

    return(
        <header>
            <Link class="logo" to="/">Prime Flix</Link>
            <Link class="favorites" to="/favoritos">Meus Favoritos</Link>
        </header>
    )
}
export default Header;