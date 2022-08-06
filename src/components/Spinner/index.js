import React from 'react';
import styles from "./Spinner.module.scss"

const Spinner = () => {
    return (
        <div>
            <div className={styles.loader}>Loading...</div>
        </div>
    );
}

export default Spinner;
