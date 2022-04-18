import React from 'react';
import styles from "../../styles/ProductList.module.css";
import Product from "./Product";
import Footer from "../Footer/Footer";

const products = [
    {
        line1:"hot Summer",
        line2:"printed T-shirt",
        cards: [
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/bag1.png"
            },
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/socks.png"
            },
        ]

    },
    {
        line1:"hot Summer",
        line2:"printed T-shirt",
        cards: [
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/bag1.png"
            },
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/socks.png"
            },
        ]
    },
    {
        line1:"hot Summer",
        line2:"printed T-shirt",
        cards: [
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/bag1.png"
            },
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/socks.png"
            },
        ]
    },
    {
        line1:"hot Summer",
        line2:"printed T-shirt",
        cards: [
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/bag1.png"
            },
            {
                cardTitle: "Half Doom Poolover",
                price: 98,
                src: "/images/socks.png"
            },
        ]
    },
]


const ProductList = () => {
    return (
        <div className={styles.container}>
            {products.map((item , index)=> (
                <Product line1={item.line1} line2={item.line2} cards={item.cards} key={index} />
            )) }
            <Footer/>
        </div>

    );
};

export default ProductList;