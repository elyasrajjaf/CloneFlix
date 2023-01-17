import React from "react";
import useMovies from "../hooks/useMovies";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { MovieCard } from "../components/MovieCard";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SlideMovies = () => {
  const { trendingMovies, trendingSeries, popularMovies, swCollection } =
    useMovies();

  // let randomMovies = trendingMovies.sort(() => 0.5 - Math.random()).slice(0, 4);
  let randomSeries = trendingSeries.sort(() => 0.5 - Math.random()).slice(0, 5);
  let randomPopularMovies = popularMovies
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
  let swCollectionMovies = swCollection
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  return (
    <>
      <h1 className="text-white text-2xl mb-4">Les Films en Tendances:</h1>

      <AutoPlaySwipeableViews>
        {trendingMovies.map((movieTrend) => (
          <div className="grid-cols-4 justify-start mb-4 gap-4">
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

      <h1 className="text-white text-2xl mb-4">Les Films populaires:</h1>
      <div className="flex justify-start flex-wrap mb-4 gap-10 w-full">
        {randomPopularMovies.map((popularMovies) => (
          <MovieCard key={popularMovies.id} movieTrend={popularMovies} />
        ))}
      </div>

      <h1 className="text-white text-2xl mb-4">La Saga Star Wars:</h1>
      <div className="flex justify-start flex-wrap mb-4 gap-10 w-full">
        {swCollectionMovies.map(part => (
          <MovieCard key={part.id} movieTrend={part} />
        ))}
      </div>
    </>
  );
};

export default SlideMovies;
