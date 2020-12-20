import React from 'react';

import styles from './MovieSearchBar.module.css';

interface Props {
    changed: (e: React.ChangeEvent<HTMLInputElement>) => void;
    entered: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    inputValue: string;
}

const MovieSearchBar = (props: Props) => {
    return (
        <div className={styles.MovieSearchBar}>
            <p>Buscar: </p>
            <input 
                className={styles.SearchBar} 
                type="text" 
                onChange={props.changed} 
                onKeyPress={props.entered}
                value={props.inputValue}
                />
        </div>
    );
}

export default MovieSearchBar;