import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from '../../store/Store';

import styles from './MovieSearch.module.css';

import MovieList from '../MovieList/MovieList';
import MovieSearchBar from '../MovieSearchBar/MovieSearchBar';
import  {getMoviesAction, getMoviesSearchAction} from '../../store/Movies/MoviesActions';

const MovieSearch = () => {
    
    const movieDispatch = useDispatch();
    const moviesReducer = useSelector((state: RootReducerType) => state.movies);
    const [searchState, searchSetState] = useState('');

    useEffect(() => {
        movieDispatch(getMoviesAction());
    }, [movieDispatch]);

    useEffect(() => {
        if(searchState !== ''){
            movieDispatch(getMoviesSearchAction(searchState));
        }
    }, [searchState, movieDispatch]);

    const searchMovieHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchSetState(e.target.value);
    }


    return (
        <div className={styles.MovieSearch}>
            <MovieSearchBar changed={(e) => searchMovieHandler(e)}/>
            <MovieList moviesList={moviesReducer.movies ? moviesReducer.movies: null} />
        </div>
    );
}

export default MovieSearch;