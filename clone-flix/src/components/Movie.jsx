import { Navigate, NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteMovie, deleteFavoriteMovie } from "../actions/favoriteActions";
import axios from "axios";

const Movie = () => {

    const favoris = localStorage.getItem('favoris');

    const dispatch = useDispatch();
    const { id } = useParams();

    const [movie, setMovie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const [movieIsFavorite, setMovieIsFavorite] = useState(false);

    // const checkIfFavorite = (movieId) => {
    //     favoris.some(movie => movie.id === movieId) ? setMovieIsFavorite(true) : setMovieIsFavorite(false);
    // }

    useEffect(() => {

        const getMovie = async (movieId) => {

            const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=a75e7e403b10ac94ebb9251b44696249`;
            const { data } = await axios(url);

            setMovie(data);
            // checkIfFavorite(movieId);
            setIsLoaded(true);

        };

        getMovie(id);

    }, []);

    // isLoaded -> wait for movie infos is favorite or not before render

    return (

        isLoaded ?

            <div className="movie">

                <div className="favorite-actions">

                    {/* {movieIsFavorite ?
                        <button onClick={() => dispatch(deleteFavorite({ movie }))}>
                            Remove movie from favorites
                        </button>
                        :
                        <button onClick={() => dispatch(addFavorite({ movie }))}>
                            Add movie to favorites
                        </button>
                    } */}

                </div>

                <h2>{movie.title ? movie.title : movie.original_title}</h2>

                <div className="infos">
                    <small>{movie.release_date}</small>
                </div>

                <img
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`}
                    alt={movie.original_title}
                />
                <p>
                    {movie.overview}
                </p>
                <p>
                </p>
            </div>

            :

            <p>Loading movie informations...</p>
    );
};

export default Movie;