import { useEffect, useState } from "react";
import api from '../../services/api';
import CardFilme from "../../components/CardFilme";

import './style.css';

function Home() {

    const [filmes, setFilmes] = useState([]);
    const [laod, setLoad] = useState([true]);


    useEffect(() => {

        async function loadData() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: '23c3d7f43c72d37ae04a3072ab54ed44',
                    language: 'pt-BR',
                    page: 1
                }
            });

            console.log(response.data.results);

            setFilmes(response.data.results.slice(0, 20));

            setLoad(false);
        };


        loadData();


    },
        []);


    if (laod) {
        return (
            <div className="loading">
                Carregando! Aguarde....
            </div>
        )
    }
    return (
        <div className="container">
            <header>
                <h1>Now playing!</h1>
            </header>

            <div className="lista">
                {filmes.map((f) => {
                    return <CardFilme key={f.id} title={f.title} image={f.poster_path} id={f.id} />
                })};
            </div>

        </div>
    )
}
export default Home;