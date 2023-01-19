import { Navigate, NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteSerie, deleteFavoriteSerie } from "../actions/favoriteActions";
import axios from "axios";

const Serie = () => {

    const { favorites } = useSelector(state => state.favorisReducer);

    const dispatch = useDispatch();
    const { id } = useParams();
    const [serie, setSerie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const [serieIsFavorite, setSerieIsFavorite] = useState(false);

    const checkIfFavoriteSerie = (id) => {
        favorites.series.some(serie => serie.serie.id === Number(id)) ? setSerieIsFavorite(true) : setSerieIsFavorite(false);
    }

    useEffect(() => {

        const getSerie = async (serieId) => {

            const url = `https://api.themoviedb.org/3/tv/${serieId}?api_key=a75e7e403b10ac94ebb9251b44696249`;
            const { data } = await axios(url);

            setSerie(data);
            console.log(data);
            checkIfFavoriteSerie(serieId);
            setIsLoaded(true);

        };

        getSerie(id);
        
    }, []);

    useEffect(()=> {

        checkIfFavoriteSerie(id);

    }, [favorites])

    useEffect(()=> {

        serieIsFavorite ?
        console.log("La série est dans les favoris.")
        :
        console.log("La série n'est pas dans les favoris.")

    }, [serieIsFavorite])

    // isLoaded -> wait for movie infos is favorite or not before render

    return (

        isLoaded ?

            <div className="movie">

                <div className="favorite-actions">

                    {serieIsFavorite ?
                        <button onClick={() => dispatch(deleteFavoriteSerie({ serie }))}>
                            Remove show from favorites
                        </button>
                        :
                        <button onClick={() => dispatch(addFavoriteSerie({ serie }))}>
                            Add show to favorites
                        </button>
                    }

                </div>

                <h2>{serie.title ? serie.title : serie.original_name}</h2>

                <div className="infos">
                    <small>{serie.release_date}</small>
                </div>

            <img
            src={ 
                serie.backdrop_path ?
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${serie.backdrop_path}`
                :
                "https://i.pinimg.com/564x/45/17/26/451726bb0dda501f79d799b97d5308dc.jpg"
            }
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