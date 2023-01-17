import { Navigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Favoris = () => {
    const isFavoris = localStorage.getItem('favoris');

    // J'ai l'impression qu'il manque un truc ici .

    const [display, setDisplay] = useState(false);

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