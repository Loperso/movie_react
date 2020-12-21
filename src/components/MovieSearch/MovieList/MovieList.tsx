import React from 'react';
import { useHistory } from 'react-router-dom';
import { movieList } from '../../../store/Movies/MoviesActionTypes';
import MovieCard from './MovieCard/MovieCard';

import styles from './MovieList.module.css';

interface Props {
    moviesList: movieList | null;
}

const MovieList = (props: Props) => {

    const history = useHistory();
    let movieList = null;

    const MovieClickHandler = (id: number) => {
        history.push('/details/' + id)
    }

    if (props.moviesList) {
        movieList = props.moviesList.results.map(movie => {
            return <MovieCard
                        key={movie.id}
                        title={movie.title}
                        date={movie.release_date}
                        language={movie.original_language}
                        poster_path={movie.poster_path}
                        backdrop_path={movie.backdrop_path}
                        movieId={movie.id}
                        clicked={() => MovieClickHandler(movie.id)}
                        />
        });
    }

    return (
        <div className={styles.MovieList}>
            <h2>Lista de peliculas</h2>
            <div className={styles.MovieListContainer}>
                {movieList}
            </div>
        </div>
    );
}

export default MovieList;