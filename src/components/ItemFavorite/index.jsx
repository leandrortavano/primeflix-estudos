import './style.css';

import { Link } from 'react-router-dom';



function ItemFavorite(props) {


    return (
        <li>
            <h4>{props.dados.title}</h4>
            <div class="actions">
                <Link to={`/filme/${props.dados.id}`}>Acessar</Link>
                <button onClick={ () => props.fnc(props.dados.id) }>Excluir</button>
            </div>

        </li>
    )
}
export default ItemFavorite;