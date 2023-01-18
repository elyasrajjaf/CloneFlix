import { Navigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MovieCard } from '../components/MovieCard';
import { SerieCard } from '../components/SerieCard';

const Favoris = () => {

    // localStorage -> favoris: { movies: [], series: []}
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

    return (
        <div></div>
        // favoris &&

        // <>

        //     <h2>Vos films favoris</h2>;

        //     {favoris.movies.length > 0 ?

        //         <div className="fav-movies">

        //             <p>
        //                 Vous avez {favoris.length} film{favoris.length > 1 && s} favori{favoris.length > 1 && s}.
        //             </p>

        //             {favoris.movies.map(favori =>
        //                 <MovieCard movieTrend={favori} />
        //             )}

        //         </div>

        //         :

        //         <div className="TODO">
        //             <p>Vous n'avez pas de films favoris</p>
        //         </div>
        //     }

        //     <h2>Vos séries favorites</h2>;

        //     {favoris.series.length > 0 ?

        //         <div className="fav-series">

        //             <p>
        //                 Vous avez {favoris.series.length} série{favoris.series.length > 1 && s} favorite{favoris.series.length > 1 && s}.
        //             </p>

        //             {favoris.series.map(favori =>
        //                 <SerieCard serieTrend={favori} />
        //             )}

        //         </div>

        //         :

        //         <div className="TODO">
        //             <p>Vous n'avez pas de séries favorites</p>
        //         </div>
        //     }

        // </>
    );
};

export default Favoris;