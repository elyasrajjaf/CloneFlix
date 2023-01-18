const stateInit = {
    favorites: {
        movies: [],
        series: []
    },
    errorMsg: ""
};

export const favorisReducer = (state = stateInit, action) => {
    switch (action.type) {
        case "ADD_FAVORITE_MOVIE":
            return {
                ...state,
                favorites: { ...favorites, movies: state.favorites.movies.concat(action.payload) },
                errorMsg: ""
            };
        case "REMOVE_FAVORITE_MOVIE":
            return {
                ...state,
                favorites: { ...favorites, movies: state.favorites.movies.filter((favorite) => favorite.id !== action.payload) },
                errorMsg: ""
            };
        case "ADD_FAVORITE_SERIE":
            return {
                ...state,
                favorites: { ...favorites, series: state.favorites.series.concat(action.payload) },
                errorMsg: ""
            };
        case "REMOVE_FAVORITE_SERIE":
            return {
                ...state,
                favorites: { ...favorites, series: state.favorites.series.filter((favorite) => favorite.id !== action.payload) },
                errorMsg: ""
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