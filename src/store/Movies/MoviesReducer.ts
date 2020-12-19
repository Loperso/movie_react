import { GET_MOVIES, movieList, getMovieAction, GET_MOVIE_SEARCH, GET_MOVIE_SORTED} from './MoviesActionTypes';


interface stateI {
    movies?: movieList,
    isLoading: boolean
}


const initialState: stateI = {
    isLoading: true
}

const MoviesReducer = (state= initialState, action: getMovieAction) => {

    if (action.type === GET_MOVIES) {
        return {
            movies: action.payload,
            isLoading: false
        }
    }

    if (action.type === GET_MOVIE_SEARCH) {
        return {
            movies: action.payload,
            isLoading: false
        }
    }

    if (action.type === GET_MOVIE_SORTED) {
        return {
            movies: action.payload,
            isLoading: false
        }
    }

    return state;
}

export default MoviesReducer;