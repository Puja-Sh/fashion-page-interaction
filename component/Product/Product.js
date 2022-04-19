import React, {useContext, useEffect, useRef, useState} from 'react';
import Image from "./Image";
import styles from '../../styles/Product.module.css'
import Arrow1 from "../common/Arrow1";
import Sizes from "./Sizes";
import {Context} from "../../context/Context";
import {gsap} from "gsap";


const Product = ({line1, line2, cards, src, index, size}) => {
    const [context, setContext] = useContext(Context);
    const [, setVisible] = useState(true)
    const [indexShow, setIndexShow] = useState(Array(size).fill(false));

    const infoRef = useRef();
    const productContainerRef = useRef();

// console.log(index)
    const showSizes = (val) => {
        setContext(!context)
        setVisible(!context)

        setIndexShow(prev=>{
            const temp = prev;

            for(let i =0; i<size; i++){
                temp[i] =false;
            }
            if(index == val){
                temp[index] = true;
            }
            console.log(temp)
            return temp;
        })

        // if(index == key){
        //     setIndexShow(true)
        // } else {
        //     setIndexShow(false)
        // }
    }



    useEffect(() => {
        if(window.screen.width >= 1280){
            if (context && indexShow[index]) {
                gsap.to(infoRef.current, {duration: 1, y: '-150px', ease: 'ease-in'})
            } else {
                gsap.to(infoRef.current, {duration: 1, y: '0px', ease: 'ease-in'})
            }
        } else {
            if (context && indexShow[index]) {
                gsap.from(infoRef.current, {duration: 1, y: '-100px', ease: 'ease-in'})
            } else {
                gsap.to(infoRef.current, {duration: 1, y: '70px', ease: 'ease-in'})
            }
        }

    }, [context])

    return (
        <div className={styles.productContainer} ref={productContainerRef}>
            <div className={styles.productTitle}>
                <div>
                    <Arrow1/>
                    <div className={styles.infoContainer} ref={infoRef}>
                        <h1 className={styles.productText}>{line1} <br/> {line2}</h1>
                        {
                            context && indexShow[index] ?
                                <div>
                                    <div>
                                        <h1 className={styles.price}>$98</h1>
                                        <p className={styles.productDesc}>Yellow rounded neck T-shirt. Short sleeves
                                            with lined prints on it. Cotton and
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
                        <button className={styles.plusBtn} onClick={() => showSizes(index)}>+</button>
                        : null
                }

            </div>
            <Image src={src} cards={cards}/>

        </div>
    );
};

export default Product;