import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from '../../store/Store';

import styles from './MovieSearch.module.css';

import MovieList from '../MovieList/MovieList';
import MovieSearchBar from '../MovieSearchBar/MovieSearchBar';
import  {getMoviesAction, getMoviesSearchAction} from '../../store/Movies/MoviesActions';
import MovieFilter from '../MovieFilter/MovieFilter';
import { useHistory, useParams } from 'react-router-dom';
import MoviePageBar from '../MoviePageBar/MoviePageBar';

interface Params {
    page: string
}

const MovieSearch = () => {
    
    const movieDispatch = useDispatch();
    const moviesReducer = useSelector((state: RootReducerType) => state.movies);
    const [searchState, searchSetState] = useState('');
    const params = useParams<Params>();
    const history = useHistory();

    useEffect(() => {
        movieDispatch(getMoviesAction(+params.page));
    }, [movieDispatch, params.page]);

    useEffect(() => {
        if(searchState !== ''){
            movieDispatch(getMoviesSearchAction(searchState));
        }
    }, [searchState, movieDispatch]);

    const searchMovieHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchSetState(e.target.value);
    }

    const onClickPageHandler = (newPage: number) => {
        history.push('' + newPage);
    }


    return (
        <div className={styles.MovieSearch}>
            <MovieSearchBar changed={(e) => searchMovieHandler(e)}/>
            <MovieFilter />
            <MovieList moviesList={moviesReducer.movies ? moviesReducer.movies: null} />
            <MoviePageBar 
                page={+params.page} 
                maxPages={moviesReducer.movies ? moviesReducer.movies.total_pages : null}
                clicked={onClickPageHandler}
                />
        </div>
    );
}

export default MovieSearch;