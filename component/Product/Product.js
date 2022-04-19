import React, {useContext, useState} from 'react';
import Image from "./Image";
import styles from '../../styles/Product.module.css'
import Arrow1 from "../common/Arrow1";
import Sizes from "./Sizes";
import {Context} from "../../context/Context";


const Product = ({line1, line2, cards}) => {
    const [context, setContext] = useContext(Context);
    const [visible, setVisible] = useState(true);

    const showSizes = () => {
        setContext(!visible)
        setVisible(!visible);
    }

    return (
        <div className={styles.productContainer}>
            <div className={styles.productTitle}>
                <div>
                    {
                        visible ? <Arrow1/> : null
                    }
                    <div className={styles.infoContainer}>
                        <h1 className={styles.productText}>{line1} <br/> {line2}</h1>
                        {
                            !visible ?
                            <div>
                                <h1 className={styles.price}>$98</h1>
                                <p className={styles.productDesc}>Yellow rounded neck T-shirt. Short sleeves with lined prints on it. Cotton and
                                    Comfy material</p>
                                <Sizes/>
                            </div>
                            : null
                        }

                    </div>

                </div>
                {
                    visible ?
                    <button className={styles.plusBtn} onClick={showSizes}>+</button>
                    : null
                }

            </div>
            <Image cards={cards} visibility={visible}/>

        </div>
    );
};

export default Product;