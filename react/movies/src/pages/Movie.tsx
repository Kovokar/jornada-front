import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetail } from "../components/MovieDetail";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorMessage } from "../components/ErrorMessage";
import { NotFound } from "../components/NotFound";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagesURL = import.meta.env.VITE_IMG;

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

export const Movie = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieDetailType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            if (!id) {
                setError("ID do filme não fornecido");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `${moviesURL}${id}?${apiKey}`
                );
                if (!response.ok) {
                    setMovie(null);
                    setLoading(false);
                    return;
                }
                const data = await response.json();
                setMovie(data);
                setError(null);
            } catch (error) {
                console.error("Erro ao buscar filme:", error);
                setError("Erro ao carregar o filme. Tente novamente mais tarde.");
            } finally {
                setLoading(false);
            }
        };

        getMovieDetails();
    }, [id]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    if (!movie) {
        return <NotFound />;
    }

    return <MovieDetail movie={movie} imagesURL={imagesURL} />;
};