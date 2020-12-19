import { GET_MOVIES, movieList, getMovieAction, GET_MOVIE_SEARCH} from './MoviesActionTypes';


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

    return state;
}

export default MoviesReducer;