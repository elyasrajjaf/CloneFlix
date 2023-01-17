import { Navigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MovieCard } from '../components/MovieCard';

const Favoris = () => {

    // localStorage -> tableau d'objets "Favoris"
    const favoris = localStorage.getItem('favoris');

    /* TODO -> INTEGRER localStorage REDUCER

        const favoris = localStorage.getItem('favoris');   

        // Toggle favorite (ajouter / supprimer)
        
        function toggleFavorite (movie) {
            favorite.filter(favori => favori.id === movie.id).length === 1 ? 

                // favori présent, le supprimer
            :
                // pas en favori, l'ajouter

        }
        

    */
    // J'ai l'impression qu'il manque un truc ici .

    const [display, setDisplay] = useState(false);

    /*
        {favoris.length > 0 ? 

            <div className="favoris"> 

                <p>
                    Vous avez {favoris.length} favori{favoris.length > 1 && s}.
                </p>

                {favoris.map(favori => 
                    <MovieCard movieTrend={favori} />
                )}

            </div>

            :

            <div className="TODO">
                <p>Vous n'avez pas de favoris</p>
            </div>
        }
    */

    return (
        <div className="favoris">
            <h2>Favoris</h2>
            <div className="">
                {isFavoris ? (
                    <div className="">
                        <p>Vous avez {isFavoris.length} favoris</p>
                    </div>
                ) : (
                        <div className="">
                            <p>Vous n'avez pas de favoris</p>
                        </div>
                )}
            </div>
        </div>
    );
};

export default Favoris;