import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addFavoriteMovie,
    deleteFavoriteMovie,
} from "../actions/favoriteActions";
import axios from "axios";

const Movie = () => {
    const { favorites } = useSelector((state) => state.favorisReducer);

    const dispatch = useDispatch();
    const { id } = useParams();

    const [movie, setMovie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const [movieIsFavorite, setMovieIsFavorite] = useState(false);

    const checkIfFavoriteMovie = (movieId) => {
        favorites.movies.some((movie) => movie.movie.id === Number(movieId))
            ? setMovieIsFavorite(true)
            : setMovieIsFavorite(false);
    };

    useEffect(() => {
        const getMovie = async (movieId) => {
            const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=a75e7e403b10ac94ebb9251b44696249`;
            const { data } = await axios(url);

            setMovie(data);
            checkIfFavoriteMovie(movieId);
            setIsLoaded(true);
        };

        getMovie(id);
    }, []);

    useEffect(() => {
        console.log(favorites);
        checkIfFavoriteMovie(id);
    }, [favorites]);

    useEffect(() => {
        movieIsFavorite
            ? console.log("Le film est dans les favoris.")
            : console.log("Le film n'est pas dans les favoris.");
    }, [movieIsFavorite]);

    // isLoaded -> wait for movie infos is favorite or not before render

    return isLoaded ? (
        <>
            {" "}
            <div>
                <NavLink to={"/"} className="flex gap-3 hover:text-gray-500 transition-all">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span>Retour Accueil</span>
                </NavLink>
            </div>
            <div className="flex justify-center items-center gap-10 mt-10 p-10">
                <div className="w-1/4">
                    <img
                        src={
                            movie.backdrop_path
                                ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`
                                : "https://i.pinimg.com/564x/45/17/26/451726bb0dda501f79d799b97d5308dc.jpg"
                        }
                        alt={movie.original_title}
                    />
                </div>
                <div className="w-1/3">
                    <h2 className="text-5xl font-semibold text-red-700 py-4">
                        {movie.title ? movie.title : movie.original_title}
                    </h2>
                    <p className="font-normal text-md py-4 text-justify text-white">
                        <span className="font-medium block mb-2 text-gray-400">
                            Description:{" "}
                        </span>
                        {movie.overview}
                    </p>
                    <small className="font-normal text-sm py-4 text-justify text-white">
                        <span className="font-medium text-gray-400 mb-1">
                            Date de sortie:{" "}
                        </span>
                        {movie.release_date}
                    </small>
                    <div className="py-5">
                        {movieIsFavorite ? (
                            <button onClick={() => dispatch(deleteFavoriteMovie({ movie }))}>
                                <div className="flex gap-2 justify-center items-center ">
                                    <div className=" text-red-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-7 h-7"
                                        >
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>
                                    </div>
                                    <span className="hover:text-gray-700 transition-all">
                                        Supprimer des Favoris
                                    </span>
                                </div>
                            </button>
                        ) : (
                            <button onClick={() => dispatch(addFavoriteMovie({ movie }))}>
                                <div className="flex gap-2 justify-center items-center hover:text-red-700 transition-all">
                                    <div className=" text-gray-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-7 h-7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </div>
                                    <span>Ajouter aux Favoris</span>
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    ) : (
        <p>Loading movie informations...</p>
    );
};

export default Movie;
