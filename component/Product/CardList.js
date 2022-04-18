import React from 'react';
import Card from "./Card";
import styles from "../../styles/CardList.module.css";

const CardList = ({cards}) => {
    return (
        <div className={styles.cardContainer}>
            {cards.map((item, index)=>(
                <Card cardTitle={item.cardTitle} price={item.price} src={item.src} key={index} />
            ))}
        </div>
    );
};

export default CardList;