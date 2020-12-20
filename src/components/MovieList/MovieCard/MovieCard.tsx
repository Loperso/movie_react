import React from 'react';

import styles from './MovieCard.module.css';

interface Props {
    title: string;
    date: string;
    language: string;
    poster_path: string;
    backdrop_path: string;
    movieId: number;
    clicked: (id: number) => void;
}

const MovieCard = (props: Props) => {

    let backgroundImage = 'https://image.tmdb.org/t/p/w500' + props.poster_path;
    let posterImage = 'https://image.tmdb.org/t/p/w500' + props.poster_path;

    if (props.backdrop_path) {
        backgroundImage = 'https://image.tmdb.org/t/p/w500' + props.backdrop_path;
    }

    if (!props.poster_path) {
        backgroundImage = 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw_400x400.jpg';
        posterImage = 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw_400x400.jpg';
    }
    

    

    return (
        <div className={styles.MovieCard} onClick={() => props.clicked(props.movieId)}>
            <div className={styles.PosterMovie}>
                <img className={styles.BackgroundImage} src={backgroundImage} alt="Fondo"/>
                <img className={styles.PosterImage} src={posterImage} alt="Poster"/>
            </div>
            <div className={styles.DetailsMovie}>
                <h3><strong>{props.title}</strong></h3>
                <p>{props.date}</p>
            </div>
        </div>
    );
}

export default MovieCard;