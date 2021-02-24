import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setMovies, setMovie, setSearchMovies, setTvShows, setSearchTvShows, setTvShow } from '../../components/Actions/MoviesAction';
import { requestGetMovies, requestGetMovie, requestSearchMovie, requestgetTvShows, requestSearchTvShows, requestGetTvShow } from '../requests/moviesRequest';

function* handleGetMovies(action) {
    try {
        const response = yield call(() => requestGetMovies(action.page));
        const { data } = response;
        yield put(setMovies(data));
    } catch (error) {
        console.log(error);
    }
}
function* handleGetMovie(action) {
    try {
        const response = yield call(() => requestGetMovie(action.id));
        const { data } = response;
        yield put(setMovie(data));
    } catch (error) {
        yield put(setMovie({ isError: true, error_message: error.message }));
        console.log(error.message);
    }
}
function* handleSearchMovie(action) {
    try {
        const response = yield call(() => requestSearchMovie(action.searchvalue, action.page));
        const { data } = response;
        yield put(setSearchMovies(data));
    } catch (error) {
        yield put(setSearchMovies({ isError: true, error_message: error.message }));
        console.log(error.message);
    }
}
function* handleTvShows(action) {
    try {
        const response = yield call(() => requestgetTvShows(action.page));
        const { data } = response;
        yield put(setTvShows(data));
    } catch (error) {
        yield put(setTvShows({ isError: true, error_message: error.message }));
        console.log(error.message);
    }
}
function* handleSearchTvShows(action) {
    try {
        const response = yield call(() => requestSearchTvShows(action.searchTvShowsValue, action.page));
        const { data } = response;
        yield put(setSearchTvShows(data));
    } catch (error) {
        yield put(setSearchTvShows({ isError: true, error_message: error.message }));
        console.log(error.message);
    }
}
function* handleGetTvShow(action) {
    try {
        const response = yield call(() => requestGetTvShow(action.id));
        const { data } = response;
        yield put(setTvShow(data));
    } catch (error) {
        yield put(setTvShow({ isError: true, error_message: error.message }));
        console.log(error.message);
    }
}
export function* handleMoviesWatcher() {
    yield all([
        yield takeLatest('GET_MOVIES', handleGetMovies),
        yield takeLatest('GET_MOVIE', handleGetMovie),
        yield takeLatest('GET_SEARCH_MOVIES', handleSearchMovie),
        yield takeLatest('GET_TVSHOWS', handleTvShows),
        yield takeLatest('GET_SEARCH_TVSHOWS', handleSearchTvShows),
        yield takeLatest('GET_TVSHOW', handleGetTvShow),
    ]);
}

