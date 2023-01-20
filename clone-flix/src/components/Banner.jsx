import React from "react";
import { NavLink } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Banner = () => {
  const { popularMovies } = useMovies();

  return (
    <div className="w-full relative top-0">
      <h1 className="text-center text-white font-bold text-3xl pb-5">
        Découvrez un univers de divertissement illimité : Films, séries TV, et
        plus encore chez{" "}
        <span className="font-extrabold text-red-700">CloneFlix</span> !
      </h1>
      <AutoPlaySwipeableViews>
        {popularMovies.map((movie) => (
          <div key={movie.id} className="w-full">
            <div className="py-3 w-full">
              <div
                className="flex justify-center items-center bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: 
                  movie.backdrop_path ?
                  `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path})`
                  :
                  "url(https://i.pinimg.com/564x/45/17/26/451726bb0dda501f79d799b97d5308dc.jpg)"
                }}
              >
                <div className="h-auto p-3 overflow-y-hidden flex-col justify-center items-center">
                  <div className="flex justify-center items-center mb-2 !blur-0">
                    <h2 className="text-lg py-3 w-56 bg-slate-600/50 font-medium text-white text-center truncate hover:text-clip">
                      {movie.title ? movie.title : movie.original_name}
                    </h2>
                  </div>
                  <NavLink to={`/movie/${movie.id}`}>
                    <div className="flex justify-center items-center">
                      <img
                        className="w-1/2"
                        src={
                          movie.backdrop_path ?
                          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`
                          :
                          "https://i.pinimg.com/564x/45/17/26/451726bb0dda501f79d799b97d5308dc.jpg"
                        }
                        alt="Image Banner"
                      />
                    </div>
                  </NavLink>
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
