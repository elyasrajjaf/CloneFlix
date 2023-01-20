import { useState, useEffect, createContext } from "react";
import axios from "axios";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  // Films
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [rateMovies, setRateMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);


  // Populaires
  useEffect(() => {
    const popularMoviesAPI = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US&page=";
      let popularMovies = [];
      for (let p = 1; p < 21; p++) {
        let { data } = await axios(url + p);
        data.results.forEach((movie) => popularMovies.push(movie));
      }
      setPopularMovies(popularMovies);
    };
    popularMoviesAPI();
  }, []);

    // Collections
    const [swCollection, setSwCollection] = useState([]);
    const [stCollection, setStCollection] = useState([]);
    const [jbCollection, setJbCollection] = useState([]);

      const { data } = await axios(url);

      setRateMovies(data.results);
    };
    trendingApi();
  }, []);

  // Mieux notés

    // Star Trek
    useEffect(() => {
        const stCollectionAPI = async () => {
            const url = `https://api.themoviedb.org/3/collection/115575?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US`;

            const { data } = await axios(url);

            setStCollection(data.parts);
        };
        stCollectionAPI();
    }, []);

    // James Bond
    useEffect(() => {
        const jbCollectionAPI = async () => {
            const url = `https://api.themoviedb.org/3/collection/645?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US`;

            const { data } = await axios(url);

            setJbCollection(data.parts);
        };
        jbCollectionAPI();
    }, []);

    return (
        <MoviesContext.Provider
            value={{
                trendingMovies,
                trendingSeries,
                popularMovies,
                swCollection,
                rateMovies,
                upcomingMovies,
                popularSeries,
                rateSeries,
                onTheAirSeries,
                stCollection,
                jbCollection
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export { MoviesProvider };

export default MoviesContext;
