import { Dispatch } from "redux"
import MovieInstance from "../../movie-axios"
import { GET_MOVIE_BY_ID, movieDispatch } from "./MovieActionTypes"


export const getMovieByIDAction = (id:number) => {
    return (dispatch: Dispatch<movieDispatch>) => {
        MovieInstance.get('/movie/' + id, {params: {
            language: 'es'
        }}).then(res => {
            dispatch({
                type: GET_MOVIE_BY_ID,
                payload: res.data
            });
        }).catch(err => {
            console.error(err)
        })
    }
}