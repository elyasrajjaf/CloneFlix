import React from "react";
import useMovies from "../hooks/useMovies";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { MovieCard } from "../components/MovieCard";
import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Movies = (props) => {
    const { trendingMovies, popularMovies } =
        useMovies();

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
            <h1 className="text-white text-2xl pl-10 py-5 mb-4">Les Films en Tendances:</h1>
            <div id="main-slider-container">
                <MdChevronLeft
                    size={40}
                    className="slider-icon left"
                    onClick={slideLeft}
                />
                <div id="slider">
                    {trendingMovies.map((movieTrend) => (
                        <div className="slider-card">
                            <MovieCard key={movieTrend.id} movieTrend={movieTrend} />
                        </div>
                    ))}
                </div>
                <MdChevronRight
                    size={40}
                    className="slider-icon right"
                    onClick={slideRight}
                />
            </div>

            <h1 className="text-white text-2xl pl-10 mb-4 py-5">Les Films populaires:</h1>
            <div id="main-slider-container">
                <MdChevronLeft
                    size={40}
                    className="slider-icon left"
                    onClick={slideLeft}
                />
                <div id="slider">
                    {popularMovies.map((popularMovies) => (
                        <div className="slider-card">
                            <MovieCard key={popularMovies.id} movieTrend={popularMovies} />
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

export default Movies;
// <AutoPlaySwipeableViews>
//   {trendingMovies.map((movieTrend) => (
//     <div className="grid-cols-4 justify-start mb-4 gap-4">
//       <MovieCard key={movieTrend.id} movieTrend={movieTrend} />
//     </div>
//   ))}
// </AutoPlaySwipeableViews>;