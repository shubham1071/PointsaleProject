import axios from 'axios';

export function requestGetMovies(page) {

    return axios.request({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=a6c91b4d9c18510bb7a3182786395d48&language=en-US&page=${page}`
    });
}
export const requestGetMovie = (id) => {
    
    return axios.request({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=a6c91b4d9c18510bb7a3182786395d48`
    });
}
export const requestSearchMovie = (searchvalue,page) => {
    return axios.request({
        method: 'get',
        url: `https://api.themoviedb.org/3/search/movie?api_key=a6c91b4d9c18510bb7a3182786395d48&language=en-US&query=${searchvalue}&page=${page}&include_adult=false`
    });
}
export const requestgetTvShows = (page) => {
    return axios.request({
        method: 'get',
        url: `https://api.themoviedb.org/3/tv/popular?api_key=a6c91b4d9c18510bb7a3182786395d48&language=en-US&page=${page}`
    });
}
export const requestSearchTvShows = (searchvalue,page) => {
    return axios.request({
        method: 'get',
        url: `https://api.themoviedb.org/3/search/tv?api_key=a6c91b4d9c18510bb7a3182786395d48&language=en-US&page=${page}&query=${searchvalue}&include_adult=false`
    });
}
export const requestGetTvShow = (id) => {
    
    return axios.request({
        method: 'get',
        url: `https://api.themoviedb.org/3/tv/${id}?api_key=a6c91b4d9c18510bb7a3182786395d48&language=en-US`
    });
}