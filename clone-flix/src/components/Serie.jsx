import { Navigate, NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteSerie, deleteFavoriteSerie } from "../actions/favoriteActions";
import axios from "axios";

const Serie = () => {

    const favoris = localStorage.getItem('favoris');

    const dispatch = useDispatch();
    const { id } = useParams();
    const [serie, setSerie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const [serieIsFavorite, setSerieIsFavorite] = useState(false);

    // const checkIfFavorite = (movieId) => {
    //     favoris.some(movie => movie.id === movieId) ? setMovieIsFavorite(true) : setMovieIsFavorite(false);
    // }

    useEffect(() => {

        const getSerie = async (serieId) => {

            const url = `https://api.themoviedb.org/3/tv/${serieId}?api_key=a75e7e403b10ac94ebb9251b44696249`;
            const { data } = await axios(url);
            console.log(data);
            setSerie(data);
            // checkIfFavorite(movieId);
            setIsLoaded(true);

        };

        getSerie(id);

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

                <h2>{serie.title ? serie.title : serie.original_title}</h2>

                <div className="infos">
                    <small>{serie.release_date}</small>
                </div>

                <img
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${serie.backdrop_path}`}
                    alt={serie.original_title}
                />
                <p>
                    {serie.overview}
                </p>
            </div>

            :

            <p>Loading tv show informations...</p>
    );
};

export default Serie;