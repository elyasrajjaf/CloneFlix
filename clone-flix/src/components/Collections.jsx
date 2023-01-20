import React from "react";
import useMovies from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";
import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef } from "react";

const Collections = () => {
  const { swCollection } = useMovies();

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
      <h1 className="text-white text-2xl pl-10 mb-4 py-5">Star Wars:</h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
        />
        <div id="slider">
          {swCollection.map((swCollection) => (
            <div className="slider-card">
              <MovieCard key={swCollection.id} movieTrend={swCollection} />
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default Collections;
