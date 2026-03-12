import { FaStar } from "react-icons/fa";

type MovieDetailType = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    runtime: number;
    budget: number;
    revenue: number;
    overview: string;
    genres: { id: number; name: string }[];
    production_companies: { id: number; name: string }[];
};

type MovieDetailProps = {
    movie: MovieDetailType;
    imagesURL: string;
};

export const MovieDetail = ({ movie, imagesURL }: MovieDetailProps) => {
    return (
        <div id="movie-page">
            <div className="movie-container">
                <div className="movie-header">
                    <div className="movie-poster">
                        <img
                            src={imagesURL + movie.poster_path}
                            alt={movie.title}
                        />
                    </div>
                    <div className="movie-info">
                        <h1>{movie.title}</h1>
                        <p className="movie-rating">
                            <FaStar className="star" /> {movie.vote_average.toFixed(1)}/10
                        </p>
                        <p className="movie-date">
                            Lançamento: {new Date(movie.release_date).toLocaleDateString("pt-BR")}
                        </p>
                        {movie.runtime > 0 && (
                            <p className="movie-runtime">
                                Duração: {movie.runtime} minutos
                            </p>
                        )}
                        {movie.genres.length > 0 && (
                            <p className="movie-genres">
                                Gêneros: {movie.genres.map((g) => g.name).join(", ")}
                            </p>
                        )}
                        {movie.budget > 0 && (
                            <p className="movie-budget">
                                Orçamento: ${(movie.budget / 1000000).toFixed(1)}M
                            </p>
                        )}
                        {movie.revenue > 0 && (
                            <p className="movie-revenue">
                                Receita: ${(movie.revenue / 1000000).toFixed(1)}M
                            </p>
                        )}
                    </div>
                </div>

                <div className="movie-overview">
                    <h2>Sinopse</h2>
                    <p>{movie.overview}</p>
                </div>

                {movie.production_companies.length > 0 && (
                    <div className="movie-production">
                        <h2>Produção</h2>
                        <p>{movie.production_companies.map((c) => c.name).join(", ")}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
