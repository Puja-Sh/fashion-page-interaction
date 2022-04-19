import React from 'react';
import styles from '../../../styles/Slider.module.css'

const Slider = () => {
    return (
        <div className={styles.viewWrapper}>
            <div className={styles.imgDiv}>
                <img src={"/images/product-view-1.jpg"} className={`${styles.productView}`}/>
            </div>
           <div className={styles.imgDiv}>
               <img src={"/images/product-view-1.jpg"} className={`${styles.productView}`}/>
           </div>
           <div className={styles.imgDiv}>
               <img src={"/images/product-view-1.jpg"} className={`${styles.productView}`}/>
           </div>
            <div className={styles.imgDiv}>
                <img src={"/images/product-view-1.jpg"} className={`${styles.productView}`}/>
            </div>

        </div>
    );
};

export default Slider;