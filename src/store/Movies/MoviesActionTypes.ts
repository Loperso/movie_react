export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_SEARCH = 'GET_MOVIE_SEARCH';

interface movieResult {
    adult: Boolean,
    id: number,
    original_language: string,
    title: string,
    overview: string,
    release_date: string,
    vote_average: number,
    poster_path: string,
    backdrop_path: string
}

export type movieList = {
    results: Array<movieResult>
}

export interface getMovieAction {
    type: typeof GET_MOVIES,
    payload: movieList
}

export interface getMovieSearchAction {
    type: typeof GET_MOVIE_SEARCH;
    payload: movieList;
}

export type moviesDispatch = getMovieAction | getMovieSearchAction;