import { Link } from 'react-router-dom';
import './style.css';

function ErrorPage() {
    return (
        <div className="ErrorPage">
            <h1>404</h1>
            <p>Ops! Página não encontrada!</p>
            <Link to="/" className="btn_voltar">Voltar para a Home!</Link>
        </div>
    )

}
export default ErrorPage;