import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../store/Store';
import { getMovieByIDAction } from '../../store/Movie/MovieActions';
import { useParams } from 'react-router-dom';

import styles from './MovieDetails.module.css';
import CastCard from '../CastCard/CastCard';

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

    let genres = null;
    if (movie.movie) {
        console.log(movie.movie);
        genres = movie.movie.genres.map(genre => {
            return <span key={genre.id}>| {genre.name} |</span>
        });
    }


    

    return (
        <div className={styles.MovieDetails}>
            <section className={styles.ImagesContainer}>
            <img className={styles.BackgroundImage} src={'https://image.tmdb.org/t/p/w500' + movie.movie?.poster_path} alt='fondo'/>
                <img className={styles.PosterImage} src={'https://image.tmdb.org/t/p/w500' + movie.movie?.poster_path} alt='poster'/>
            </section>
            <section className={styles.DetailsContainer}>
                <div className={styles.Details}>
                    <h2>{movie.movie?.title}</h2>
                    <p>{movie.movie?.vote_average}/10</p>
                    <p>{movie.movie?.overview}</p>
                    <p>{movie.movie?.release_date}</p>
                    <p>{movie.movie?.revenue}</p>
                    <p>{movie.movie?.vote_average}</p>
                    <div>
                        {genres}
                    </div>
                </div>
            </section>
            <section className={styles.CastListContainer}>
                <h3>Cast</h3>
                <div className={styles.CastList}>
                    <CastCard />
                    <CastCard />
                    <CastCard />
                    <CastCard />
                    <CastCard />
                </div>
            </section>
        </div>
    );
}

export default MovieDetails;