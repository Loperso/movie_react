import React from 'react';

import styles from './MovieSearchBar.module.css';

interface Props {
    changed: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MovieSearchBar = (props: Props) => {
    return (
        <div className={styles.MovieSearchBar}>
            <h3>Buscar: </h3>
            <input className={styles.SearchBar} type="text" onChange={props.changed} />
        </div>
    );
}

export default MovieSearchBar;