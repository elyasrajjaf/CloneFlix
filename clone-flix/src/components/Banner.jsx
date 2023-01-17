import React from "react";
import useMovies from "../hooks/useMovies";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Banner = () => {
  const { popularMovies } = useMovies();

  return (
    <div className="w-full relative top-0">
      <h1 className="text-center text-white font-bold text-3xl pb-5">Découvrez un univers de divertissement illimité : Films, séries TV, et plus encore chez <span className="font-extrabold text-red-700">CloneFlix</span> !</h1>
      <AutoPlaySwipeableViews>
        {popularMovies.map((movie) => (
          <div key={movie.id} className="w-full">
            <div className="py-3 w-full">
              <div
                className="rounded-3xl flex justify-center items-center bg-cover bg-no-repeat bg-center"
                style={{backgroundImage: `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path})`}}
              >
                <div className="h-auto p-3 overflow-y-hidden flex justify-center items-center">
                  <img
                    className="rounded-3xl shadow-lg w-1/2"
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`}
                    alt="Image Banner"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
};

export default Banner;
