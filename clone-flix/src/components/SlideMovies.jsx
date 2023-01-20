import React from "react";
import useMovies from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";
import { SerieCard } from "../components/SerieCard";
import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef } from "react";

const SlideMovies = () => {
  const { trendingMovies, trendingSeries, popularMovies, swCollection } =
    useMovies();

  // Configuration du slider
  const slider = useRef([]);
  const slideLeft = (index) => {
    slider.current[index].scrollLeft = slider.current[index].scrollLeft - 500;
  };
  const slideRight = (index) => {
    slider.current[index].scrollLeft = slider.current[index].scrollLeft + 500;
  };

  return (
    <>
      <h1 className="text-white text-2xl pl-10 py-5 mb-4">
        Les Films en Tendances:
      </h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={() => slideLeft(0)}
        />
        <div id="slider" ref={(el) => (slider.current[0] = el)}>
          {trendingMovies.map((movieTrend) => (
            <div className="slider-card">
              <MovieCard key={movieTrend.id} movieTrend={movieTrend} />
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={() => slideRight(0)}
        />
      </div>

      <h1 className="text-white text-2xl pl-10 mb-4 py-5">
        Les Films populaires:
      </h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={() => slideLeft(1)}
        />
        <div id="slider" ref={(el) => (slider.current[1] = el)}>
          {popularMovies.map((popularMovies) => (
            <div className="slider-card">
              <MovieCard key={popularMovies.id} movieTrend={popularMovies} />
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={() => slideRight(1)}
        />
      </div>

      <h1 className="text-white text-2xl pl-10 mb-4 py-5">
        Les Séries en Tendances:
      </h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={() => slideLeft(2)}
        />
        <div id="slider" ref={(el) => (slider.current[2] = el)}>
          {trendingSeries.map((trendingSerie) => (
            <div className="slider-card">
              <SerieCard key={trendingSerie.id} serieTrend={trendingSerie} />
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={() => slideRight(2)}
        />
      </div>

      <h1 className="text-white text-2xl pl-10 mb-4 py-5">Collections Star Wars</h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={() => slideLeft(3)}
        />
        <div id="slider" ref={(el) => (slider.current[3] = el)}>
          {swCollection.map((swCollection) => (
            <div className="slider-card">
              <MovieCard key={swCollection.id} movieTrend={swCollection} />
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={() => slideRight(3)}
        />
      </div>
    </>
  );
};

export default SlideMovies;
