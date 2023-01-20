import React from "react";
import useMovies from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";
import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef } from "react";

const Collections = () => {
    const { swCollection, stCollection, jbCollection } =
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
            <h1 className="text-white text-2xl pl-10 mb-4 py-5">Star Wars:</h1>
            <div id="main-slider-container">
                <MdChevronLeft
                    size={40}
                    className="slider-icon left"
                    onClick={() => slideLeft(0)}
                />
                <div id="slider" ref={(el) => (slider.current[0] = el)}>
                    {swCollection.map((swCollection) => (
                        <div className="slider-card">
                            <MovieCard key={swCollection.id} movieTrend={swCollection} />
                        </div>
                    ))}
                </div>
                <MdChevronRight
                    size={40}
                    className="slider-icon right"
                    onClick={() => slideRight(0)}
                />
            </div>

            <h1 className="text-white text-2xl pl-10 mb-4 py-5">Star Trek:</h1>
            <div id="main-slider-container">
                <MdChevronLeft
                    size={40}
                    className="slider-icon left"
                    onClick={() => slideLeft(1)}
                />
                <div id="slider" ref={(el) => (slider.current[1] = el)}>
                    {stCollection.map((stCollection) => (
                        <div className="slider-card">
                            <MovieCard key={stCollection.id} movieTrend={stCollection} />
                        </div>
                    ))}
                </div>
                <MdChevronRight
                    size={40}
                    className="slider-icon right"
                    onClick={() => slideRight(1)}
                />
            </div>

            <h1 className="text-white text-2xl pl-10 mb-4 py-5">James Bond:</h1>
            <div id="main-slider-container">
                <MdChevronLeft
                    size={40}
                    className="slider-icon left"
                    onClick={() => slideLeft(2)}
                />
                <div id="slider" ref={(el) => (slider.current[2] = el)}>
                    {jbCollection.map((jbCollection) => (
                        <div className="slider-card">
                            <MovieCard key={jbCollection.id} movieTrend={jbCollection} />
                        </div>
                    ))}
                </div>
                <MdChevronRight
                    size={40}
                    className="slider-icon right"
                    onClick={() => slideRight(2)}
                />
            </div>
        </>
    );
};

export default Collections;