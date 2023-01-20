import React from "react";
import useMovies from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";
import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef } from "react";

const Movies = (props) => {
  const { trendingMovies, popularMovies, rateMovies, upcomingMovies } =
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

      <h1 className="text-white text-2xl pl-10 mb-4 py-5">Les mieux notés:</h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={() => slideLeft(2)}
        />
        <div id="slider" ref={(el) => (slider.current[2] = el)}>
          {rateMovies.map((ratesMovies) => (
            <div className="slider-card">
              <MovieCard key={ratesMovies.id} movieTrend={ratesMovies} />
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={() => slideRight(2)}
        />
      </div>

      <h1 className="text-white text-2xl pl-10 mb-4 py-5">
        Prochainement disponible:
      </h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={() => slideLeft(3)}
        />
        <div id="slider" ref={(el) => (slider.current[3] = el)}>
          {upcomingMovies.map((upComMovies) => (
            <div className="slider-card">
              <MovieCard key={upComMovies.id} movieTrend={upComMovies} />
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

export default Movies;
// <AutoPlaySwipeableViews>
//   {trendingMovies.map((movieTrend) => (
//     <div className="grid-cols-4 justify-start mb-4 gap-4">
//       <MovieCard key={movieTrend.id} movieTrend={movieTrend} />
//     </div>
//   ))}
// </AutoPlaySwipeableViews>;
