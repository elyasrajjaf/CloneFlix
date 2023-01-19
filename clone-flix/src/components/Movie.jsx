import { Navigate, NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteMovie, deleteFavoriteMovie } from "../actions/favoriteActions";
import axios from "axios";

const Movie = () => {

    const { favorites } = useSelector(state => state.favorisReducer);

    const dispatch = useDispatch();
    const { id } = useParams();

    const [movie, setMovie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const [movieIsFavorite, setMovieIsFavorite] = useState(false);

    const checkIfFavoriteMovie = (movieId) => {
        favorites.movies.some(movie => movie.movie.id === Number(movieId)) ? setMovieIsFavorite(true) : setMovieIsFavorite(false);
    }

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

    useEffect(()=> {

        console.log(favorites);
        checkIfFavoriteMovie(id);

    }, [favorites])

    useEffect(()=> {

        movieIsFavorite ?
        console.log("Le film est dans les favoris.")
        :
        console.log("Le film n'est pas dans les favoris.")

    }, [movieIsFavorite])

    // isLoaded -> wait for movie infos is favorite or not before render

    return (

        isLoaded ?

            <div className="movie">

                <div className="favorite-actions">

                    {movieIsFavorite ?
                        <button onClick={() => dispatch(deleteFavoriteMovie({ movie }))}>
                            Remove movie from favorites
                        </button>
                        :
                        <button onClick={() => dispatch(addFavoriteMovie({ movie }))}>
                            Add movie to favorites
                        </button>
                    }

                </div>

                <h2>{movie.title ? movie.title : movie.original_title}</h2>

                <div className="infos">
                    <small>{movie.release_date}</small>
                </div>

                <img
                    src={ 
                        movie.backdrop_path ?
                        `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`
                        :
                        "https://i.pinimg.com/564x/45/17/26/451726bb0dda501f79d799b97d5308dc.jpg"
                    }
                    alt={movie.original_title}
                />
                <p>
                    {movie.overview}
                </p>
            </div>

            :

            <p>Loading movie informations...</p>
    );
};

export default Movie;