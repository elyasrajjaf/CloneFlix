import React from "react";
import useMovies from "../hooks/useMovies";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { SerieCard } from "../components/SerieCard";
import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef } from "react";

const Series = (props) => {
  const { trendingSeries, rateSeries, popularSeries, onTheAirSeries } =
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
      <h1 className="text-white text-2xl pl-10 mb-4 py-5">
        Les Séries en Tendances:
      </h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={() => slideLeft(0)}
        />
        <div id="slider" ref={(el) => (slider.current[0] = el)}>
          {trendingSeries.map((serieTrend) => (
            <div className="slider-card">
              <SerieCard key={serieTrend.id} serieTrend={serieTrend} />
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={() => slideRight(0)}
        />
      </div>

      <h1 className="text-white text-2xl pl-10 mb-4 py-5">Les mieux notées:</h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={() => slideLeft(1)}
        />
        <div id="slider" ref={(el) => (slider.current[1] = el)}>
          {rateSeries.map((serieRate) => (
            <div className="slider-card">
              <SerieCard key={serieRate.id} serieTrend={serieRate} />
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
        Séries Populaires:
      </h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={() => slideLeft(2)}
        />
        <div id="slider" ref={(el) => (slider.current[2] = el)}>
          {popularSeries.map((seriePopular) => (
            <div className="slider-card">
              <SerieCard key={seriePopular.id} serieTrend={seriePopular} />
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
        Séries diffusés récemment:
      </h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={() => slideLeft(3)}
        />
        <div id="slider" ref={(el) => (slider.current[3] = el)}>
          {onTheAirSeries.map((serieOnTheAir) => (
            <div className="slider-card">
              <SerieCard key={serieOnTheAir.id} serieTrend={serieOnTheAir} />
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

export default Series;
