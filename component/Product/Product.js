import React from 'react';
import Image from "./Image";
import styles from '../../styles/Product.module.css'
import Arrow1 from "../common/Arrow1";

const Product = ({line1, line2,cards}) => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.productTitle}>
                <div>
                    <Arrow1/>
                    <h1 className={styles.productText}>{line1} <br/> {line2}</h1>
                </div>
                <button className={styles.plusBtn}>+</button>
            </div>
            <Image cards={cards}/>

        </div>
    );
};

export default Product;