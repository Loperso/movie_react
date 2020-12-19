import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from '../../store/Store';

import styles from './MovieSearch.module.css';

import MovieList from '../MovieList/MovieList';
import MovieSearchBar from '../MovieSearchBar/MovieSearchBar';
import  {getMoviesAction, getMoviesSearchAction, getMoviesSorted} from '../../store/Movies/MoviesActions';
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

    

    const searchMovieHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchSetState(e.target.value);
    }

    const onPressSearchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter'){
            movieDispatch(getMoviesSearchAction(searchState));
        }
    }

    const onClickPageHandler = (newPage: number) => {
        history.push('' + newPage);
    }

    const onChangeSortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        movieDispatch(getMoviesSorted(e.target.value));
    }

    return (
        <div className={styles.MovieSearch}>
            <MovieSearchBar 
                changed={(e) => searchMovieHandler(e)}
                entered={onPressSearchHandler}
                />
            <MovieFilter sortChanged={onChangeSortHandler} />
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