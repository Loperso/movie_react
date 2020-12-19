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
import LoadBar from '../LoadBar/LoadBar';

interface Params {
    page: string,
    movie: string
}

const MovieSearch = () => {
    
    const movieDispatch = useDispatch();
    const moviesReducer = useSelector((state: RootReducerType) => state.movies);
    const [searchState, searchSetState] = useState('');
    const [loadingState, loadingSetState] = useState(false);
    const params = useParams<Params>();
    const history = useHistory();

    useEffect(() => {
        if (params.movie !== undefined) {
            movieDispatch(getMoviesSearchAction(params.movie, +params.page));
        }else {
            movieDispatch(getMoviesAction(+params.page));
        }
    }, [movieDispatch, params]);


    const searchMovieHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchSetState(e.target.value);
    }

    const onPressSearchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter'){
            
            history.push('/search/1/' + searchState);
        }
    }

    const onClickPageHandler = (newPage: number) => {
        if (params.movie === undefined) {
            history.push('/search/' + newPage);
        }else {
            history.push('/search/' + newPage + '/' + params.movie);
        }
        
    }

    const onChangeSortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        movieDispatch(getMoviesSorted(e.target.value));
    }


    let loading = (
            <div className={styles.LoadingBarContainer}>
                <LoadBar />
            </div>
        );

    if (!moviesReducer.isLoading) {
        loading = (
            <>
                <MovieList 
                    moviesList={moviesReducer.movies ? moviesReducer.movies: null} 
                    />
                <MoviePageBar 
                    page={+params.page} 
                    maxPages={moviesReducer.movies ? moviesReducer.movies.total_pages : null}
                    clicked={onClickPageHandler}
                    />
            </>
        );
    }

    return (
        <div className={styles.MovieSearch}>
            <MovieSearchBar 
                changed={(e) => searchMovieHandler(e)}
                entered={onPressSearchHandler}
                />
            <MovieFilter sortChanged={onChangeSortHandler} />
            {loading}
        </div>
    );
}

export default MovieSearch;