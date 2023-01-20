import React from "react";
import Banner from "../components/Banner";
import SlideMovies from "../components/SlideMovies";

const Home = () => {
  return (
    <>
      <div className="container">
        <Banner />
        <SlideMovies />
      </div>
    </>
  );
};

export default Home;
