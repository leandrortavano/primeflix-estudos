import './style.css';
import { FaRegStar } from "react-icons/fa";



function DetailMovie(props) {


    function salvaFilme() {
        const favoritosFilmes = localStorage.getItem('@primeFlix');

        let filmesFavoritos = JSON.parse(favoritosFilmes) || [];

        const hasFilme = filmesFavoritos.some((filmesFavoritos) => filmesFavoritos.id === props.dados.id);


        if (hasFilme) {
            alert('Filme já está na sua lista de favoritos!');
            return;
        }

        filmesFavoritos.push(props.dados);
        localStorage.setItem("@primeFlix", JSON.stringify(filmesFavoritos));
        alert('Lista de Favoritos atualizada!');

    }

    return (
        <div className="filme">
            <img src={`https://image.tmdb.org/t/p/original${props.dados.image}`} />

            <div class="overview">
                <h2>{props.dados.title}</h2>
                <p>{props.dados.overview}</p>
                <FaRegStar color='yellow' /> Avaliação {props.dados.voteAvg}

                <div class="area-buttons">
                    <button onClick={salvaFilme}>Salvar nos Favoritos</button>

                    <button>
                        <a target="blank" rel="external" href={`https://youtube.com.br/results?search_query=Trailer ${props.dados.title}`}>
                            Pesquisar Trailer
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DetailMovie;