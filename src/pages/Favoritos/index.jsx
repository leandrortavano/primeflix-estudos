
import './style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemFavorite from '../../components/ItemFavorite';

function Favoritos() {

    const [filmesSalvos, setfilmesSalvos] = useState([]);

    useEffect(() => {

        const myFilmes = localStorage.getItem("@primeFlix");

        setfilmesSalvos(JSON.parse(myFilmes) || []);

        console.log('rodou o effect');

    }, []);


    function handleDeleteFavorite(id) {


        let filtroFilmes = filmesSalvos.filter((f) => {
            return (f.id !== id)
        });

        console.log(filtroFilmes);

        setfilmesSalvos(filtroFilmes);

        localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes));
        toast.error("Filme removido com sucesso!");
    }


    return (
        <div class="favoritesWrap">
            <h2>Meus Filmes</h2>

            {filmesSalvos.length === 0 && <span>Nenhum filme salvo!</span>}
            <ul>
                {filmesSalvos.map((filme) => {
                    return (
                        <ItemFavorite dados={filme} fnc={handleDeleteFavorite} />
                    )
                })

                }
            </ul>
        </div>
    )
}
export default Favoritos;