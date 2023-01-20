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

            setRateMovies(data.results);
        };
        trendingApi();
    }, []);

    // Mieux notés

    useEffect(() => {
        const rateMoviesAPI = async () => {
            const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US&page=1`;

            const { data } = await axios(url);

            setTrendingMovies(data.results);
        };
        rateMoviesAPI();
    }, []);

    // Prochainement
    useEffect(() => {
        const upcomingMoviesAPI = async () => {
            const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US&page=1`;

            const { data } = await axios(url);

            setUpcomingMovies(data.results);
        };
        upcomingMoviesAPI();
    }, []);

    /////////////////////////////////////////////////////////////////////////////

    // Series
    const [trendingSeries, setTrendingSeries] = useState([]);
    const [popularSeries, setPopularSeries] = useState([]);
    const [rateSeries, setRateSeries] = useState([]);
    const [onTheAirSeries, setOnTheAirSeries] = useState([]);

    // Tendances
    useEffect(() => {
        const trendingSerie = async () => {
            const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=a75e7e403b10ac94ebb9251b44696249`;

            const { data } = await axios(url);

            setTrendingSeries(data.results);
        };
        trendingSerie();
    }, []);

    // Populaires

    useEffect(() => {
        const popularSerieAPI = async () => {
            const url = `https://api.themoviedb.org/3/tv/popular?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US&page=1`;

            const { data } = await axios(url);

            setPopularSeries(data.results);
        };
        popularSerieAPI();
    }, []);

    // Mieux notés

    useEffect(() => {
        const rateSerieAPI = async () => {
            const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US&page=1`;

            const { data } = await axios(url);

            setRateSeries(data.results);
        };
        rateSerieAPI();
    }, []);

    // Dernièrement diffusés

    useEffect(() => {
        const onTheAirSeriesAPI = async () => {
            const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US&page=1`;

            const { data } = await axios(url);

            setOnTheAirSeries(data.results);
        };
        onTheAirSeriesAPI();
    }, []);


    /////////////////////////////////////////////////////////////////////////////

    // Collections
    const [swCollection, setSwCollection] = useState([]);
    const [stCollection, setStCollection] = useState([]);
    const [jbCollection, setJbCollection] = useState([]);

    // Star Wars
    useEffect(() => {
        const swCollectionAPI = async () => {
            const url = `https://api.themoviedb.org/3/collection/10?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US`;

            const { data } = await axios(url);

            setSwCollection(data.parts);
        };
        swCollectionAPI();
    }, []);

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

    /////////////////////////////////////////////////////////////////////////////

    // Genres

    // Films
    const [moviesGenres, setMoviesGenres] = useState([]);

    useEffect(() => {
        const genresAPI = async () => {
            const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=a75e7e403b10ac94ebb9251b44696249`;

            const { data } = await axios(url);

            console.log("GENRES FILMS");
            console.log(data.genres);
            setMoviesGenres(data.genres);
        };
        genresAPI();
    }, []);

    
    // Séries
    const [seriesGenres, setSeriesGenres] = useState([]);

    useEffect(() => {
        const genresAPI = async () => {
            const url = `https://api.themoviedb.org/3/genre/tv/list?api_key=a75e7e403b10ac94ebb9251b44696249`;

            const { data } = await axios(url);

            console.log("GENRES SERIES");
            console.log(data.genres);
            setSeriesGenres(data.genres);
        };
        genresAPI();
    }, []);

    return (
        <MoviesContext.Provider
            value={{
                trendingMovies,
                trendingSeries,
                popularMovies,
                moviesGenres,
                seriesGenres,
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

export {
    MoviesProvider
};

export default MoviesContext;