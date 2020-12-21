import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../store/Store';
import { getMovieByIDAction } from '../../store/Movie/MovieActions';
import { useParams } from 'react-router-dom';

import styles from './MovieDetails.module.css';
import LoadBar from '../LoadBar/LoadBar';

interface params {
    movieId: string
}

const MovieDetails = () => {
    const movieDispatch = useDispatch();

    const params = useParams<params>();
    const movie = useSelector((state: RootReducerType) => state.movie);

    useEffect(() => {
        movieDispatch(getMovieByIDAction(+params.movieId));
    }, [movieDispatch, params]);

    let genres: string[] = [];
    if (movie.movie && movie.movie.genres.length !== 0) {
        genres = movie.movie.genres.map(genre => {
            return genre.name;
        });
    }

    let details = <LoadBar />;

    if (!movie.isLoading && movie.movie) {
        const options = { style: 'currency', currency: 'USD' };
        const numberFormat = new Intl.NumberFormat('en-US', options);
        const voteAverage = movie.movie?.vote_average !== 0 ? <p>{movie.movie?.vote_average}/10</p>: null

        const genresDisplay = genres.length !== 0 ? (<>
                                            <h4>Géneros</h4>
                                            <p>{genres.join(' - ')}</p>
                                        </>)
                                        : null

        details = (
            <>
                <section className={styles.ImagesContainer}>
                    <img className={styles.BackgroundImage} src={'https://image.tmdb.org/t/p/w500' + movie.movie?.poster_path} alt='fondo'/>
                        <img className={styles.PosterImage} src={'https://image.tmdb.org/t/p/w500' + movie.movie?.poster_path} alt='poster'/>
                </section>
                <section className={styles.DetailsContainer}>
                        <div className={styles.Details}>
                            <h2>{movie.movie?.title}</h2>
                            {voteAverage}
                            <p>{movie.movie?.overview}</p>
                            <h4>Fecha de salida</h4>
                            <p>{movie.movie?.release_date}</p>
                            <h4>Ingresos</h4>
                            <p>{numberFormat.format(movie.movie.revenue)}</p>

                            {genresDisplay}
                        </div>
                </section>
            </>
        );
    }

    

    return (
        <div className={styles.MovieDetails}>
            {details}
        </div>
    );
}

export default MovieDetails;