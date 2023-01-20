import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const Navigation = () => {

  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorisReducer);

  const [query, setQuery] = useState("");
  const [resultsSearch, setResultsSearch] = useState([]);
  const [resultsSearchFiltered, setResultsSearchFiltered] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const searchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US&include_adult=false&query=${query}`
      );
      setResultsSearch(response.data.results);
    };
    if (query) {
      searchMovies();
    }
  }, [query]);


  useEffect(() => {

    if (resultsSearch.length > 0) {

      let onlyMoviesAndSeries = resultsSearch.filter(e => e["media_type"] === "movie" || e["media_type"] === "tv").sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity));

      setResultsSearchFiltered([...onlyMoviesAndSeries]);

    }

  }, [resultsSearch]);


  return (
    <div className="w-full h-screen px-5 pb-20 bg-gray-800 sticky top-0">
      <div className="max-h-screen flex items-center justify-center bg-slate-800 pb-20 ">
        <div className="flex w-full max-w-xs p-4 bg-gray-800">
          <ul className="flex flex-col w-full gap-5">
            <span className="text-center m-5 font-bold text-2xl text-red-700">
              CLONEFLIX
            </span>
            <li className="my-px">
              <div className="flex flex-row items-center h-12 px-3 rounded-lg text-gray-600 bg-gray-100">
                <span className="flex items-center justify-center mt-2 text-lg text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </span>
                <input
                  type="search"
                  placeholder="Rechercher un film..."
                  onChange={(e) => setQuery(e.target.value)}
                  className="p-2 bg-transparent"
                />
              </div>
              {/* 
                  <ul>
                    {resultsSearch.slice(0, 5).map((result) => (
                      <li
                        key={result.id}
                        className="flex flex-row items-center h-12 px-3 rounded-lg text-gray-600 bg-gray-300 my-2"
                      >
                        <NavLink to={`/movie/${result.id}` || `/serie/${result.id}`}>{result.name}</NavLink>
                      </li>
                    ))}
                  </ul> 
                */}
              {query ? (
                <ul style={{ width: "15.8em" }}>
                  {resultsSearchFiltered.slice(0, 5).map(searchSuggestion => {
                    return (
                      <li
                        key={searchSuggestion.id}
                        className="flex flex-row items-center h-12 px-3 rounded-lg text-gray-600 bg-gray-300 my-2">
                        <a
                          href={
                            searchSuggestion["media_type"] === "movie" ?
                              `/movie/${searchSuggestion.id}`
                              :
                              `/serie/${searchSuggestion.id}`}
                        >

                          {searchSuggestion["media_type"] === "movie" ?
                            <span style={{ fontStyle: "italic" }}>Film - </span>
                            :
                            <span style={{ fontStyle: "italic" }}>Série - </span>
                          }

                          <span>
                            {searchSuggestion.name ? searchSuggestion.name : searchSuggestion["original_title"]}
                          </span>
                          {/* <span>
                          {searchSuggestion["release_date"] && searchSuggestion["release_date"]}
                        </span>
                        <span>
                          {searchSuggestion["first_air_date"] && searchSuggestion["first_air_date"]}
                        </span> */}

                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ""
              )}
            </li>
            <li className="my-px">
              <NavLink to={"/"}>
                <p className="flex flex-row items-center h-12 px-3 rounded-lg text-gray-500 hover:bg-gray-700">
                  <span className="flex items-center justify-center text-lg text-gray-500">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </span>
                  <span className="ml-4 flex font-medium text-m text-gray-400 uppercase">
                    Accueil
                  </span>
                </p>
              </NavLink>
            </li>
            <li className="my-px">
              <NavLink to={"/series"}>
                <p className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                  <span className="flex items-center mt-2 justify-center text-lg text-gray-500">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"></path>
                    </svg>
                  </span>
                  <span className="ml-3 flex font-medium text-m text-gray-400 uppercase">
                    Séries
                  </span>
                </p>
              </NavLink>
            </li>
            <li className="my-px">
              <NavLink to={"/movies"}>
                <p className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                  <span className="flex items-center justify-center text-lg text-gray-500 mt-2">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"></path>
                    </svg>
                  </span>
                  <span className="ml-3 flex font-medium text-m text-gray-400 uppercase">
                    Films
                  </span>
                </p>
              </NavLink>
            </li>
            <li className="my-px">
              <NavLink to={"/collections"}>
                <p className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                  <span className="flex items-center justify-center text-lg text-gray-500 mt-2">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"></path>
                    </svg>
                  </span>
                  <span className="ml-3 flex font-medium text-m text-gray-400 uppercase">
                    Collections
                  </span>
                </p>
              </NavLink>
            </li>
            <li className="my-px">
              <NavLink to={"/favoris"}>
                <p className="flex flex-row items-center h-12 px-3 rounded-lg text-gray-500 hover:bg-gray-700">
                  <span className="flex items-center justify-center text-lg text-green-400">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  <span className="ml-4 flex font-medium text-m text-gray-400 uppercase">
                    Favoris
                  </span>
                  <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto">
                    {favorites.movies.length + favorites.series.length}
                  </span>
                </p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
