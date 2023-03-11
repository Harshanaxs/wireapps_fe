import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom';


export const Header = () => {

    return (
        <div className={styles.header}><Link to='/'>Modern Walk</Link></div>
    )
}
