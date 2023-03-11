import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HomeCard } from '../HomeCard';
import styles from '../styles.module.css';
import { Header } from '../Header';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";








const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Home = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const arrFn = (arr1, arr2) => {
        const result = [];
        let arr1Index = 0;
        let arr2Index = 0;
        const length = arr1.length + arr2.length;

        for (let i = 0; i < length; i++) {
            if (i % 2 === 0 && arr1Index < arr1.length) {
                let obj = Object.assign({}, arr1[arr1Index], { baseColor: "#2BD9AF" });
                result.push(obj);
                arr1Index++;
            } else if (arr2Index < arr2.length) {
                let obj = Object.assign({}, arr2[arr2Index], { baseColor: "#FF5E84" });
                result.push(obj);
                arr2Index++;
            } else if (arr1Index < arr1.length) {
                let obj = Object.assign({}, arr1[arr1Index], { baseColor: "#2BD9AF" });
                result.push(obj);
                arr1Index++;
            }
        }

        return result;
    };






    useEffect(() => {
        const urlWomen = `https://fakestoreapi.com/products/category/women's clothing`;
        const urlMen = `https://fakestoreapi.com/products/category/men's clothing`;
        const fetchData = async () => {
            try {
                const womenResponse = await axios.get(urlWomen);
                const menResponse = await axios.get(urlMen);
                arrFn(womenResponse.data, menResponse.data)


                const shuffledArr = arrFn(menResponse.data, womenResponse.data)
                setItems(shuffledArr);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className={styles.pageHeading}>Flash Sale</div>
            {isLoading ? (
                <div className={styles.loading}>Loading...</div>
            ) : (
                <div className={styles.gridContainer}>

                    <Carousel className={styles.carousel} responsive={responsive}>

                        {items.map((item, i) => (
                            <HomeCard key={i} item={item} baseColor={item.baseColor} />
                        ))}
                    </Carousel>
                    <div className={styles.categoryDiv}>
                        <div className={styles.categoryCardMen}><Link to="/mens-clothing">Men's Clothing</Link></div>
                        <div className={styles.categoryCardWomen}><Link to="/womens-clothing">Women's Clothing</Link></div>
                    </div>

                </div>
            )}
        </>
    );
};
