const stateInit = {
    suggestions: [],
    selected: {}
}

export const searchReducer = (state = stateInit, action) => {
    switch (action.type) {
        case "SET_SEARCH_SUGGESTIONS":
            return {
                ...state,
                suggestions: [...action.payload]
            }
        case "SET_SELECTED_RESULT":
            return {
                // clear suggestions 
                suggestions: [],
                selected: {...action.payload}
            }
        default:
            return state;
    }
}