import React from 'react';

import styles from './MovieFilter.module.css';

const sortByList = [
    {
        query: 'popularity.asc',
        name: 'Popularidad ascendente',
    },
    {
        query: 'popularity.desc',
        name: 'Popularidad descendente',
    },
    {
        query: 'release_date.asc',
        name: 'Fecha de salida ascendente',
    },
    {
        query: 'release_date.desc',
        name: 'Fecha de salida descendente',
    },
    {
        query: 'original_title.asc',
        name: 'Titulo ascendente',
    },
    {
        query: 'original_title.desc',
        name: 'Titulo descendente',
    }
];

interface Props {
    sortChanged: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const MovieFilter = (props: Props) => {

    const sort = sortByList.map(r => {
        return (
                <option value={r.query} key={r.query}>{r.name}</option>
                );
    })

    return (
        <div className={styles.MovieFilter}>
            <div>
                <select onChange={props.sortChanged}>
                    {sort}
                </select>
            </div>
        </div>
    );
}

export default MovieFilter;