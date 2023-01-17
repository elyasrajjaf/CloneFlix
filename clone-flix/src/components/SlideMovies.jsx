import React from "react";
import useMovies from "../hooks/useMovies";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { MovieCard } from "../components/MovieCard";
import './Slider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SlideMovies = (props) => {
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

  const slides = [];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h1 className="text-white text-2xl mb-4">Les Films en Tendances:</h1>

      <div id="main-slider-container">
        <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
        <div id="slider">
          {trendingMovies.map((movieTrend) => (
            <div className="slider-card">
              <div className="w-full">
                <MovieCard key={movieTrend.id} movieTrend={movieTrend} />
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
      </div>


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
// <AutoPlaySwipeableViews>
//   {trendingMovies.map((movieTrend) => (
//     <div className="grid-cols-4 justify-start mb-4 gap-4">
//       <MovieCard key={movieTrend.id} movieTrend={movieTrend} />
//     </div>
//   ))}
// </AutoPlaySwipeableViews>;