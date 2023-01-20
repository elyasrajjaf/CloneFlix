const stateInit = {
  favorites: {
    movies: [],
    series: [],
  },
  errorMsg: "",
};

export const favorisReducer = (state = stateInit, action) => {
  switch (action.type) {
    case "ADD_FAVORITE_MOVIE":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          movies: state.favorites.movies.concat(action.payload),
        },
        errorMsg: "",
      };
    case "REMOVE_FAVORITE_MOVIE":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          movies: state.favorites.movies.filter(
            (favorite) => favorite.movie.id !== action.payload.movie.id
          ),
        },
        errorMsg: "",
      };
    case "ADD_FAVORITE_SERIE":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          series: state.favorites.series.concat(action.payload),
        },
        errorMsg: "",
      };
    case "REMOVE_FAVORITE_SERIE":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          series: state.favorites.series.filter(
            (favorite) => favorite.serie.id !== action.payload.serie.id
          ),
        },
        errorMsg: "",
      };
    case "ADD_FAVORITE_ERROR":
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      };
    default:
      return state;
  }
};
