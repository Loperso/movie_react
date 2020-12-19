export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';

interface movieGenres {
    id: number,
    name: string
}

export type movieDetails = {
    budget: number,
    genres: Array<movieGenres>,
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    release_date: string,
    revenue: number,
    status: string
    title: string,
    vote_average: number,
    poster_path: string
}

export interface getMovieByIDAction {
    type: typeof GET_MOVIE_BY_ID;
    payload: movieDetails;
}

export type movieDispatch = getMovieByIDAction;