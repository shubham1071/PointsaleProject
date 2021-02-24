
export const getMovies = (page) => ({
    type: "GET_MOVIES",
    page
});

export const setMovies = (data) => ({
    type: "SET_MOVIES",
    data
});
export const particularData = (data) => ({
    type: "particular_Data",
    data
});
export const getMovie = (id) => ({
    type: "GET_MOVIE",
    id
});
export const setMovie = (data) => ({
    type: "SET_MOVIE",
    data
});
export const clearMovie = () => ({
    type: "CLEAR_MOVIE",
});
export const getSearchMovies = (searchvalue,page) => ({
    type: "GET_SEARCH_MOVIES",
    searchvalue,
    page
});
export const setSearchMovies = (searchData) => ({
    type: "SET_SEARCH_MOVIES",
    searchData
});
export const getSearchTvShows = (searchTvShowsValue,page) => ({
    type: "GET_SEARCH_TVSHOWS",
    searchTvShowsValue,
    page
});
export const setSearchTvShows = (searchTvShowsData) => ({
    type: "SET_SEARCH_TVSHOWS",
    searchTvShowsData
});

export const getTvShows = (page) => ({
    type: "GET_TVSHOWS",
    page
});
export const setTvShows = (TvShowsData) => ({
    type: "SET_TVSHOWS",
    TvShowsData
});
export const getTvShow = (id) => ({
    type: "GET_TVSHOW",
    id
});
export const setTvShow = (data) => ({
    type: "SET_TVSHOW",
    data
});
