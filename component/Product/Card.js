import React from 'react';
import styles from '../../styles/Card.module.css';

const Card = ({cardTitle, price,src}) => {
    return (
        <div className={styles.cardWrapper}>
            <div>
                <p>{cardTitle} </p>
                <p className={styles.price}> ${price} </p>
            </div>
            <img src={src} alt={"product image"} className={styles.cardImage}/>
        </div>
    );
};

export default Card;