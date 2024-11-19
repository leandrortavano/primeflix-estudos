import './style.css';

import { Link } from 'react-router-dom';


function CardFilme(props) {

    return (

        <div className='item-card'>
            <img src={`https://image.tmdb.org/t/p/original${props.image}`} />
            <h3>{props.title}</h3>
            <Link className='btn_filme' to={`/filme/${props.id}`}>Acessar filme</Link>
        </div>
    )
}
export default CardFilme;