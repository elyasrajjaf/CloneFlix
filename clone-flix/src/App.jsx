import React from "react";
import { Routes, Route } from "react-router-dom";
import { MoviesProvider } from "./context/MoviesProvider";

// Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <MoviesProvider>
    <Routes>
      <Route index path="/" element={<Home />} />
    </Routes>
    </MoviesProvider>
  );
};

export default App;
