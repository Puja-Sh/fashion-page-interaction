import React from 'react';
import styles from '../../styles/Image.module.css';
import Arrow2 from "../common/Arrow2";
import CardList from "./CardList";

const Image = ({cards}) => {
    return (
        <div className={styles.imageContainer}>
            <img src={"/images/female-modal-1.png"} alt={"modal-1"} className={`${styles.model}`}/>
            {/*<button className={styles.plusBtn}>+</button>*/}
            <div className={styles.backgroundDesign1}/>
            <div className={styles.backgroundDesign2}/>
            <CardList cards={cards}/>
            <Arrow2/>
        </div>
    );
};

export default Image;