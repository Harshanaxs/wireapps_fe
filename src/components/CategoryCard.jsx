import React from 'react'
import styles from './styles.module.css'
export const CategoryCard = () => {
    const handleClick = (event) => {
    }
    return (
        <>
            <div onClick={handleClick} className={styles.categoryCard}>
                <div className={styles.cardHeader}>Card</div>
                <div className={styles.cardImg}>Img</div>
                <div className={styles.cardBody}>Body</div>
                <button onClick={handleClick}>Clcick me</button>
            </div>
        </>
    )
}
