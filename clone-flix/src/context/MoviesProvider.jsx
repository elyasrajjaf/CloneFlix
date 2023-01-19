import { useState, useEffect, createContext } from "react";
import axios from "axios";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
    // Films 
    const [popularMovies, setPopularMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);

    // Populaires
    useEffect(() => {
        const popularMoviesAPI = async () => {
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US&page=';
            let popularMovies = [];
            for (let p = 1; p < 21; p++) {
                let { data } = await axios(url + p);
                data.results.forEach(movie => popularMovies.push(movie));
            }
            setPopularMovies(popularMovies);
        };
        popularMoviesAPI();
    }, []);

    // Tendances
    useEffect(() => {
        const trendingApi = async () => {
            const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=a75e7e403b10ac94ebb9251b44696249`;

            const { data } = await axios(url);

            setTrendingMovies(data.results);
        };
        trendingApi();
    }, []);

    /////////////////////////////////////////////////////////////////////////////

    // Series
    const [trendingSeries, setTrendingSeries] = useState([]);

    // Tendances
    useEffect(() => {
        const trendingSerie = async () => {
            const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=a75e7e403b10ac94ebb9251b44696249`;

            const { data } = await axios(url);

            setTrendingSeries(data.results);
        };
        trendingSerie();
    }, []);

    /////////////////////////////////////////////////////////////////////////////

    // Collections
    const [swCollection, setSwCollection] = useState([]);

    // Star Wars
    useEffect(() => {
        const swCollectionAPI = async () => {
            const url = `https://api.themoviedb.org/3/collection/10?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US`;

            const { data } = await axios(url);

            setSwCollection(data.parts);
        };
        swCollectionAPI();
    }, []);




    return (
        <MoviesContext.Provider
            value={{
                trendingMovies,
                trendingSeries,
                popularMovies,
                swCollection,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export {
    MoviesProvider
};

export default MoviesContext;