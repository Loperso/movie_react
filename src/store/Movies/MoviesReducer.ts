
import { GET_MOVIES, movieList, GET_MOVIE_SEARCH, GET_MOVIE_SORTED, moviesDispatch, CHANGE_LOADING} from './MoviesActionTypes';


interface stateI {
    movies?: movieList,
    isLoading: boolean
}


const initialState: stateI = {
    isLoading: true
}

const MoviesReducer = (state= initialState, action: moviesDispatch) => {

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

    if (action.type === CHANGE_LOADING) {
        return {
            isLoading: !state.isLoading
        }
    }

    return state;
}

export default MoviesReducer;