import { GET_MOVIES, movieList, getMovieAction, GET_MOVIE_SEARCH, GET_MOVIE_SORTED} from './MoviesActionTypes';


interface stateI {
    movies?: movieList,
}


const initialState: stateI = {

}

const MoviesReducer = (state= initialState, action: getMovieAction) => {

    if (action.type === GET_MOVIES) {
        return {
            movies: action.payload
        }
    }

    if (action.type === GET_MOVIE_SEARCH) {
        return {
            movies: action.payload
        }
    }

    if (action.type === GET_MOVIE_SORTED) {
        return {
            movies: action.payload
        }
    }

    return state;
}

export default MoviesReducer;