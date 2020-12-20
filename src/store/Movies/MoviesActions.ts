import { Dispatch } from 'redux';
import { GET_MOVIES, getMovieAction, getMovieSearchAction, GET_MOVIE_SEARCH, getMovieSortedAction, GET_MOVIE_SORTED, changeLoadingAction, CHANGE_LOADING } from './MoviesActionTypes';

import MovieInstance from '../../movie-axios';

export const getMoviesAction = (pageNumber: number) => {
    return (dispatch: Dispatch<getMovieAction>) => {
        MovieInstance.get('/discover/movie', {params: {
            page: pageNumber
        }
        }).then(res => {
            dispatch({
                type: GET_MOVIES,
                payload: res.data
            });
        }).catch(err => {

        });
    }
}

export const getMoviesSearchAction = (search: string, page: number) => {
    return (dispatch: Dispatch<getMovieSearchAction>) => {
        MovieInstance.get('/search/movie', {params: {
            query: search,
            language: 'es',
            page: page
        }}).then(res => {
            dispatch({
                type: GET_MOVIE_SEARCH,
                payload: res.data
            });
        }).catch(err => {
            console.error(err);
        });
    }

}

export const getMoviesSorted = (sortName: String) => {
    return (dispatch: Dispatch<getMovieSortedAction>) => {
        MovieInstance.get('/discover/movie', {params: {
            sort_by: sortName
        }}).then(res => {
            dispatch({
                type: GET_MOVIE_SORTED,
                payload: res.data
            });
        });
    }
}

export const changeLoading = () => {
    return (dispatch: Dispatch<changeLoadingAction>) => {
        dispatch({
            type: CHANGE_LOADING
        });
    }
}