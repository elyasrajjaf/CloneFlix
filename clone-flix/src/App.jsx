import React from "react";
import { Routes, Route } from "react-router-dom";
import { MoviesProvider } from "./context/MoviesProvider";

// Pages
import Home from "./pages/Home";
import Movie from "./components/Movie";
import Serie from "./components/Serie";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

const App = () => {
  return (
    <MoviesProvider>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/movie/:id" element={<Movie />} />
        <Route index path="/Movies" element={<Movies />} />
        <Route index path="/serie/:id" element={<Serie />} />
        <Route index path="/Series" element={<Series />} />
      </Routes>
    </MoviesProvider>
  );
};

export default App;
