import React from "react";
import useMovies from "../hooks/useMovies";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { MovieCard } from "../components/MovieCard";
import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Series = (props) => {
    const { trendingSeries, } =
        useMovies();

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
            <h1 className="text-white text-2xl pl-10 mb-4 py-5">Les Séries en Tendances:</h1>
            <div id="main-slider-container">
                <MdChevronLeft
                    size={40}
                    className="slider-icon left"
                    onClick={slideLeft}
                />
                <div id="slider">
                    {trendingSeries.map((serieTrend) => (
                        <div className="slider-card">
                            <MovieCard key={serieTrend.id} movieTrend={serieTrend} />
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

export default Series;