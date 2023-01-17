import { useState, useEffect, createContext } from "react";
import axios from "axios";

const MoviesContext = createContext();

const MoviesProvider = ({children}) => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingSeries, setTrendingSeries] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);

    useEffect(() => {
      const trendingApi = async () => {
        const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=a75e7e403b10ac94ebb9251b44696249`;
  
        const { data } = await axios(url);
  
        setTrendingMovies(data.results);
      };
      trendingApi();
    }, [])

    useEffect(() => {
        const trendingApi = async () => {
            const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=a75e7e403b10ac94ebb9251b44696249`;

            const { data } = await axios(url);

            setTrendingSeries(data.results);
        };
        trendingApi();
    }, [])

    useEffect(() => {
        const trendingApi = async () => {
            const url = `https://api.themoviedb.org/3/movie/latest?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US`

            const { data } = await axios(url);

            setLatestMovies(data.results);
        };
        trendingApi();
    }, [])

    return(
        <MoviesContext.Provider
            value={{
                trendingMovies,
                trendingSeries,
                latestMovies
            }}
        >
            {children}
        </MoviesContext.Provider>
    )
}

export {
    MoviesProvider
}

export default MoviesContext