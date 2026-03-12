import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

type Movie = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
};

export const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);

    const query = searchParams.get("query");

    useEffect(() => {
        const searchMovies = async () => {
            if (!query) {
                setMovies([]);
                return;
            }

            setLoading(true);
            try {
                const response = await fetch(
                    `${moviesURL}search/movie?${apiKey}&query=${encodeURIComponent(query)}`
                );
                const data = await response.json();
                setMovies(data.results || []);
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
                setMovies([]);
            } finally {
                setLoading(false);
            }
        };

        searchMovies();
    }, [query]);

    return (
        <div className="container">
            <h2 className="title">
                {query ? `Resultados para: "${query}"` : "Faça uma busca"}
            </h2>

            {loading && <p className="loading">Carregando...</p>}

            {!loading && movies.length > 0 ? (
                <div className="movies-container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : !loading && query ? (
                <p className="no-results">Nenhum filme encontrado</p>
            ) : null}
        </div>
    );
}