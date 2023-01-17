import { Navigate, NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../actions/favoriteActions";
import axios from "axios";

const Movie = () => {

    const favoris = localStorage.getItem('favoris');

    const dispatch = useDispatch();
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    /*
    const [movieIsFavorite, setMovieIsFavorite] = useState(false);

    const checkIfFavorite = (movieId) => {
        favoris.some(movie => movie.id === movieId ? setMovieIsFavorite(true) : setMovieIsFavorite(false);
    }

    useEffect(() => {

        const getMovie = async (movieId) => {

            const url = `https://api.themoviedb.org/3/movie/{movieId}?api_key=a75e7e403b10ac94ebb9251b44696249`;
            const { data } = await axios(url);

            console.log(data);
            
            setMovie(data.results);
            checkIfFavorite(id);
            setIsLoaded(true);

        };

        getMovie(id);
            
    }, [])

    // isLoaded -> wait for movie infos   is favorite or not before render
    */
    return (
        <div></div>
        /* 
        {isLoaded ? 
            
            <div className="movie">

                <div className="favorite-actions">
                    {movieIsFavorite ?
                        <button onClick={()=> dispatch(deleteFavorite({ TODO_USER_ID_UTILISATEUR_CONNECTE, movie })) }>
                            Remove movie from favorites
                        </button>
                    :
                        <button onClick={()=> dispatch(addFavorite({ TODO_USER_ID_UTILISATEUR_CONNECTE, movie })) }>
                            Add movie to favorites
                        </button>
                    }
                </div>

                <div className="titles">
                    <h2>{movie.title}</h2>
                    <small>{movie.original_name}</small>
                </div>

                <div className="infos">
                    <small>{movie.release_date}</small>
                </div>

                <img
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${backdrop_path}`}
                    alt={movie.title}
                />
                <p>
                    {movie.overview}
                </p>
            </div>

            :

            <p>Loading movie informations...</p>
        
        }
        */
    );
};

export default Movie;