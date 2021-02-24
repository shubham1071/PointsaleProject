

const initialState = {
    data: [],
    currentMovie: {
        isLoading: true,
        currentMovieData: {}
    },
};

const Movies = (state = initialState, action) => {
    // console.log("action..->",action);
    switch (action.type) {
        case "SET_MOVIES":
            return { ...state, data: action.data };
        case "SET_MOVIE":
            return { ...state, currentMovie: { isLoading: false, currentMovieData: action.data } }
        case "CLEAR_MOVIE":
            return initialState;
        case "SET_SEARCH_MOVIES":
            if (action.searchData.total_pages === 0)
                return { ...state, data: { isError: true } }
            else
                return { ...state, data: action.searchData }
        case "SET_SEARCH_TVSHOWS":
            console.log("tvshows", action);
            if (action.searchTvShowsData.total_pages === 0)
                return { ...state, data: { isError: true } }
            else
                return { ...state, data: action.searchTvShowsData }
        case "SET_TVSHOWS":
            return { ...state, data: action.TvShowsData };
        case "SET_TVSHOW":
            return { ...state, currentMovie: { isLoading: false, currentMovieData: action.data } }
        default:
            return state;
    }
}
export default Movies;