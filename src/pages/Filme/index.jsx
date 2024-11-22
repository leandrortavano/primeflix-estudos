import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from '../../services/api'
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import { useNavigate } from "react-router-dom";


function Filme() {

    const { id } = useParams();
    const [dataMovie, setDataMovie] = useState({});

    const navigate = useNavigate();

    useEffect(() => {

        async function loadDetail() {
            const response = await api.get(`movie/${id}`, {
                params: {
                    api_key: '23c3d7f43c72d37ae04a3072ab54ed44',
                    language: 'pt-BR',
                }
            })
                .then((response) => {

                    console.log(response.data);

                    setDataMovie({
                        id: response.data.id,
                        title: response.data.title,
                        image: response.data.poster_path,
                        overview: response.data.overview,
                        voteAvg: response.data.vote_average
                    })

                })
                .catch(() => {
                    console.log("Filme nao encontrado!");
                    navigate("/404", {replace: true});
                    return;
                });


        }
        loadDetail();
    }, [id, navigate]);

    return (
        <div>
            <DetailMovie dados={dataMovie} />
        </div>
    )
}
export default Filme;