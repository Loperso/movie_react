import {combineReducers} from 'redux';
import MovieReducer from './Movie/MovieReducer';
import MoviesReducer from './Movies/MoviesReducer';

const RootReducer = combineReducers({
    movies: MoviesReducer,
    movie: MovieReducer
});

export default RootReducer;