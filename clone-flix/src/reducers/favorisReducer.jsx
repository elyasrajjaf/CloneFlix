const stateInit = {
    favorites: [],
    errorMsg: ""
}

export const favorisReducer = (state = stateInit, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.concat(action.payload),
                errorMsg: ""
            }
        case "REMOVE_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.filter((favorite) => favorite.id !== action.payload),
                errorMsg: ""
            }
        case "ADD_FAVORITE_ERROR":
            return {
                ...state,
                errorMsg: action.payload.errorMsg,
            }
        default:
            return state;
    }
}