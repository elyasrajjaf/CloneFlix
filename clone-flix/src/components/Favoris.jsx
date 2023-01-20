import { Navigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "../components/MovieCard";
import { SerieCard } from "../components/SerieCard";

const Favoris = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorisReducer);

  return (
    favorites && (
      <>
        <h2>Vos films favoris</h2>
        {favorites.movies.length > 0 ? (
          <div className="fav-movies">
            <p>Vous avez {favorites.movies.length} films favoris.</p>

            {favorites.movies.map((favori) => (
              <MovieCard movieTrend={favori.movie} />
            ))}
          </div>
        ) : (
          <div className="TODO">
            <p>Vous n'avez pas de films favoris</p>
          </div>
        )}

        <br></br>

        <h2>Vos séries favorites</h2>

        {favorites.series.length > 0 ? (
          <div className="fav-series">
            <p>Vous avez {favorites.series.length} séries favorites.</p>

            {favorites.series.map((favori) => (
              <SerieCard serieTrend={favori.serie} />
            ))}
          </div>
        ) : (
          <div className="TODO">
            <p>Vous n'avez pas de séries favorites</p>
          </div>
        )}
      </>
    )
  );
};

export default Favoris;
