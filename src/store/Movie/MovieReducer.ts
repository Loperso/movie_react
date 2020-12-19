import { getMovieByIDAction, GET_MOVIE_BY_ID, movieDetails } from "./MovieActionTypes";

interface stateI {
    movie?: movieDetails
}

const initialState: stateI = {

}

const MovieReducer = (state = initialState, action: getMovieByIDAction) => {
    
    if (action.type === GET_MOVIE_BY_ID) {
        return {
            movie: action.payload
        }
    } 

    return state;
}

export default MovieReducer;