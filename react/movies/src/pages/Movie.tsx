import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagesURL = import.meta.env.VITE_IMG;

type MovieDetail = {
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

export const Movie = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const response = await fetch(
                    `${moviesURL}${id}?${apiKey}`
                );
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error("Erro ao buscar filme:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            getMovieDetails();
        }
    }, [id]);

    if (loading) {
        return <div className="container"><p>Carregando...</p></div>;
    }

    if (!movie) {
        return <div className="container"><p>Filme não encontrado</p></div>;
    }

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
}