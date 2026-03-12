import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="container">
            <div className="not-found-container">
                <BiCameraMovie className="not-found-icon" />
                <h2>Filme não encontrado</h2>
                <p className="not-found-message">
                    Desculpe, não conseguimos encontrar o filme que você está procurando.
                </p>
                <Link to="/" className="not-found-link">
                    Voltar para Home
                </Link>
            </div>
        </div>
    );
};
