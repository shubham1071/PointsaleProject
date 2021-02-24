import {combineReducers,createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import MoviesReducer from "./Reducers/MoviesReducer";
import CastReducer from "./Reducers/CastReducer";

import { watcherSaga } from './Sagas/rootSaga';

const reducer = combineReducers({
    movies: MoviesReducer,
    cast:CastReducer,
});

const SagaMiddleware = createSagaMiddleware();

const middleware = [SagaMiddleware];

const STORE = createStore(reducer, {},applyMiddleware(...middleware));

SagaMiddleware.run(watcherSaga)

export default STORE;