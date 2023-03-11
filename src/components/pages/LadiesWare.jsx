import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../Card';
import styles from '../styles.module.css';
import { Header } from '../Header';

export const LadiesWare = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://fakestoreapi.com/products/category/women's clothing`;

        axios
            .get(url)
            .then(function (response) {
                setItems(response.data);
                setIsLoading(false);
            })
            .catch(function (error) {
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <Header />
            <div className={styles.pageHeading}>Women's Clothing</div>
            {isLoading ? (
                <div className={styles.loading}>Loading...</div>
            ) : (
                <div className={styles.container}>
                    {items.map((item) => (
                        <Card item={item} baseColor="#FF5E84" />
                    ))}
                </div>
            )}
        </>
    );
};
