import React from 'react';

import styles from './CastCard.module.css';

const CastCard = () => {
    return (
        <div className={styles.CastCard}>
            <div>
                imagen Actor
            </div>
            <div>
                <span>Actor Name</span>
                <span>Character Name</span>
            </div>
        </div>
    );
}

export default CastCard;