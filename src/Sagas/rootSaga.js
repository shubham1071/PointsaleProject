import {all, fork} from 'redux-saga/effects';
import { handleCastWatcher } from './handlers/castSaga';
import { handleMoviesWatcher} from './handlers/moviesSaga';

export function* watcherSaga(){
    yield all([
		fork(handleMoviesWatcher),
		fork(handleCastWatcher),
	]);
    //yield takeEvery(GET_IMAGES,handleGetImage)
};