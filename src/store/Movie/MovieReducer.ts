import { getMovieByIDAction, GET_MOVIE_BY_ID, movieDetails } from "./MovieActionTypes";

interface stateI {
    movie?: movieDetails,
    isLoading: boolean,
}

const initialState: stateI = {
    isLoading: true
}

const MovieReducer = (state = initialState, action: getMovieByIDAction) => {
    
    if (action.type === GET_MOVIE_BY_ID) {
        return {
            movie: action.payload,
            isLoading: false
        }
    } 

    return state;
}

export default MovieReducer;