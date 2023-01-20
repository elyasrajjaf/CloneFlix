import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MovieCard } from "../components/MovieCard";
import { SerieCard } from "../components/SerieCard";

const Favoris = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorisReducer);

  return (
    favorites && (
      <>
        <h2 className="text-4xl pb-5 font-medium text-white">
          Vos <span className="text-red-700">films</span> favoris
        </h2>
        {favorites.movies.length > 0 ? (
          <>
            <div className="p-2 border rounded-md w-1/6 flex justify-center items-center">
              <p>
                Vous avez{" "}
                <span className="text-red-700 font-medium">
                  {favorites.movies.length}
                </span>{" "}
                films favoris.
              </p>
            </div>
            <div className="fav-movies flex flex-wrap">
              {favorites.movies.map((favori) => (
                <MovieCard movieTrend={favori.movie} />
              ))}
            </div>
          </>
        ) : (
          <div className="TODO">
            <p>Vous n'avez pas de films favoris</p>
          </div>
        )}

        <br></br>

        <h2 className="text-4xl pb-5 font-medium text-white">
          Vos <span className="text-red-700">séries</span> favorites
        </h2>

        {favorites.series.length > 0 ? (
          <>
            <div className="p-2 border rounded-md w-1/6 flex justify-center items-center">
              <p>
                Vous avez{" "}
                <span className="text-red-700 font-medium">
                  {favorites.series.length}
                </span>{" "}
                séries favorites.
              </p>
            </div>
            <div className="fav-series flex flex-wrap">
              {favorites.series.map((favori) => (
                <SerieCard serieTrend={favori.serie} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex">
            <p>Vous n'avez pas de séries favorites</p>
          </div>
        )}
      </>
    )
  );
};

export default Favoris;
