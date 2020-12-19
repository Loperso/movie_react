import React from 'react';

import styles from './LoadBar.module.css';

const LoadBar = () => {
    return (
        <div className={styles.Loader}>
            Cargando...
        </div>
    );
}

export default LoadBar;