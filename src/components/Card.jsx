import React from 'react';
import styles from './styles.module.css';

export const Card = ({ item, baseColor }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>
            <img
                alt={item.title}
                className={styles.image}
                width={250}
                height={250}
                src={item.image}
            />
            <div style={{ background: baseColor }} className={styles.details}>
                <div className={styles.price}>${item.price}</div>
                <p className={styles.description}>{item.description}</p>
            </div>

        </div>

    );
};
