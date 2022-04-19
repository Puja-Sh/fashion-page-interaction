import React, {useContext, useEffect, useRef, useState} from 'react';
import Image from "./Image";
import styles from '../../styles/Product.module.css'
import Arrow1 from "../common/Arrow1";
import Sizes from "./Sizes";
import {Context} from "../../context/Context";
import {gsap} from "gsap";


const Product = ({line1, line2, cards}) => {
    const [context, setContext] = useContext(Context);
    const [visibile, setVisibile] = useState(true)
    const [width, setWidth] = useState(false)

    const infoRef = useRef();
    const productContainerRef = useRef();

    const showSizes = () => {
        setContext(!context)
        setVisibile(!context)
        setWidth(!width)
    }

    useEffect(() => {
        if(context) {
            gsap.to(infoRef.current,{duration:1,y:'-150px', ease:'ease-in'})
            gsap.to(productContainerRef.current,{duration:1, ease:'ease-in', minWidth:'100%', width:'100%'})
        } else {
            gsap.to(infoRef.current,{duration:1,y:'0px', ease:'ease-in'})
            gsap.to(productContainerRef.current,{duration:1, ease:'ease-in', minWidth:'81.5%', width:'81.5%'})
        }
    },[context])

    return (
        <div className={styles.productContainer} ref={productContainerRef}>
            <div className={styles.productTitle}>
                <div>
                   <Arrow1/>
                    <div className={styles.infoContainer} ref={infoRef}>
                        <h1 className={styles.productText}>{line1} <br/> {line2}</h1>
                        {
                            context ?
                            <div>
                                <div>
                                    <h1 className={styles.price}>$98</h1>
                                    <p className={styles.productDesc}>Yellow rounded neck T-shirt. Short sleeves with lined prints on it. Cotton and
                                        Comfy material</p>
                                </div>

                                <div>
                                    <Sizes/>
                                </div>

                            </div>
                            : null
                        }

                    </div>

                </div>
                {
                    !context ?
                    <button className={styles.plusBtn} onClick={showSizes}>+</button>
                    : null
                }

            </div>
            <Image cards={cards}/>

        </div>
    );
};

export default Product;