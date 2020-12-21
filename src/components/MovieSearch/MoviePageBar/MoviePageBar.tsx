import React from 'react';

import styles from './MoviePageBar.module.css';
import {ReactComponent as LeftButton} from '../../../assets/icon/left-arrow.svg';
import {ReactComponent as RightButton} from '../../../assets/icon/right-arrow.svg';

interface Props {
    page: number;
    maxPages: number | null;
    clicked: (newPage: number) => void
}

const MoviePageBar = (props: Props) => {

    let pagesLinks = null

    if (props.maxPages) {
        if (props.page === 1 && props.maxPages !== 1) {
            pagesLinks = (
                <div onClick={() => props.clicked(props.page + 1)}>
                    <RightButton className={styles.RightButton} />
                </div>
            );
        }
        if(props.page === props.maxPages && props.maxPages !== 1) {
            pagesLinks = (
                <div onClick={() => props.clicked(props.page -1)}>
                    <LeftButton className={styles.LeftButton} />
                </div>
            );
        }
        if (props.page > 1 && props.page < props.maxPages) {
            pagesLinks = (
                <>
                    <div onClick={() => props.clicked(props.page - 1)}>
                        <LeftButton className={styles.LeftButton} />
                    </div>
                    <div onClick={() => props.clicked(props.page + 1)}>
                        <RightButton className={styles.RightButton} />
                    </div>
                </>
            );
        }

    }

    return (
        <div className={styles.MoviePageBar}>
            {pagesLinks}
        </div>
    );
}

export default MoviePageBar;