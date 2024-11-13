import { useParams } from "react-router-dom";

function Filme(){

    const {id} = useParams();

    return(
        <div>
            Filme {id}
        </div>
    )
}
export default Filme;