import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../Card';
import styles from '../styles.module.css';
import { Header } from '../Header';

export const MensWare = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `https://fakestoreapi.com/products/category/men's clothing`;

        axios
            .get(url)
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
            });
    }, []);

    return (
        <>
            <Header />
            <div className={styles.pageHeading}>Men's Clothing</div>
            <div className={styles.container}>
                {
                    items.map((item) => (
                        <Card item={item} baseColor="#2BD9AF" />
                    ))
                }
            </div >
        </>
    );
};
