import React, { useState } from "react";
import useMovies from "../hooks/useMovies";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

import { MovieCard } from "../components/MovieCard";

const Home = () => {
  const [index, setIndex] = useState(0);

  const { trendingMovies, trendingSeries } = useMovies();

  // let randomMovies = trendingMovies.sort(() => 0.5 - Math.random()).slice(0, 4);
  let randomSeries = trendingSeries.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <>
      <div className="container">
        <h1 className="text-white text-2xl mb-4">Les Films en Tendances:</h1>

        <AutoPlaySwipeableViews>
          {trendingMovies.map((movieTrend) => (
            <div className="grid-cols-4 justify-start mb-4 gap-5">
              <MovieCard key={movieTrend.id} movieTrend={movieTrend} />
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <h1 className="text-white text-2xl mb-4">Les Séries en Tendances:</h1>
        <div className="flex justify-start flex-wrap mb-4 gap-10 w-full">
          {randomSeries.map((serieTrend) => (
            <MovieCard key={serieTrend.id} movieTrend={serieTrend} />
          ))}
        </div>

      </div>
    </>
  );
};

export default Home;
