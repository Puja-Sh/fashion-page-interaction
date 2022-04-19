import React, {useContext, useState} from 'react';
import styles from "../../styles/ProductList.module.css";
import Product from "./Product";
import Footer from "../Footer/Footer";
import {Context} from "../../context/Context";

const products = [
    {
        line1: "hot Summer",
        line2: "printed T-shirt",
        src: "/images/female-modal-1.png",
        cards: [
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/bag1.png"
            },
            {
                cardTitle: "Find a pair of awesome",
                price: 30,
                src: "/images/socks.png"
            },
        ]

    },
    {
        line1: "hot Summer",
        line2: "printed T-shirt",
        src: "/images/female-modal-1.png",
        cards: [
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/bag1.png"
            },
            {
                cardTitle: "Find a pair of awesome",
                price: 30,
                src: "/images/socks.png"
            },
        ]
    },
    {
        line1: "hot Summer",
        line2: "printed T-shirt",
        src: "/images/female-modal-1.png",
        cards: [
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/bag1.png"
            },
            {
                cardTitle: "Find a pair of awesome",
                price: 30,
                src: "/images/socks.png"
            },
        ]
    },
    {
        line1: "hot Summer",
        line2: "printed T-shirt",
        src: "/images/female-modal-1.png",
        cards: [
            {
                cardTitle: "Find a pair of awesome",
                price: 30,
                src: "/images/socks.png"
            },
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/bag1.png"
            },

        ]
    },
]


const ProductList = () => {
    const [context, ] = useContext(Context);
    const size = products.length
    return (
        <>
            <div className={styles.container}>
                {products.map((item, index) => (
                    <Product line1={item.line1} line2={item.line2} cards={item.cards} src={item.src} key={index} index={index}size={size}/>
                ))}
            </div>
            {
                !context ?
                    <Footer/>
                    : null
            }
        </>

    );
};

export default ProductList;