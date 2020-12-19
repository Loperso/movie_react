import { Dispatch } from 'redux';
import { GET_MOVIES, getMovieAction, getMovieSearchAction, GET_MOVIE_SEARCH } from './MoviesActionTypes';

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

export const getMoviesSearchAction = (search: string) => {
    return (dispatch: Dispatch<getMovieSearchAction>) => {
        MovieInstance.get('/search/movie', {params: {
            query: search,
            language: 'es'
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

export const getMovieByID = (id: number) => {
    
}