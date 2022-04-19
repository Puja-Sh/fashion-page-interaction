import React from 'react';
import Slider from "./Sliders/Slider";
import styles from '../../styles/Sizes.module.css';

const Sizes = () => {


    return (
        <div className={styles.sizesContainer}>
            <h3>select size</h3>
            <div className={styles.sizes}>
                <form>
                    <input checked type={"radio"} className={styles.radio} id={"radio-1"} name={"size"}/>
                    <label className={styles.sizeBtn} htmlFor={"radio-1"}> S </label>
                    <input type={"radio"} className={styles.radio} id={"radio-2"} name={"size"}/>
                    <label className={styles.sizeBtn} htmlFor={"radio-2"}> M </label>
                    <input type={"radio"} className={styles.radio} id={"radio-3"} name={"size"}/>
                    <label className={styles.sizeBtn} htmlFor={"radio-3"}> L </label>
                </form>
                <p> size guide </p>
            </div>
            <Slider/>
        </div>
    );
};

export default Sizes;