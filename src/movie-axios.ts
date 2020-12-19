import axios from 'axios';

const MovieInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'd546896be2b04fa91b3ca04ba0e6785c'
    }
});

export default MovieInstance;