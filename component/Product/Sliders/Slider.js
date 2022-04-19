import React, {useContext, useEffect, useRef} from 'react';
import styles from '../../../styles/Slider.module.css'
import {GrClose} from "react-icons/gr";
import {Context} from "../../../context/Context";
import {gsap} from "gsap";

const Slider = () => {
    const [context, setContext] = useContext(Context);
    const closeHandler = () => {
        setContext(!context);
    }
    const viewRef = useRef();

    useEffect(()=>{
        if(context){
            gsap.to(viewRef.current,{duration:1, ease:'ease-in'})
        }
    }, [context])
    return (
        <div className={styles.viewWrapper} ref={viewRef}>
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

            <button className={styles.closeBtn} onClick={closeHandler}>
                <GrClose />
            </button>
        </div>
    );
};

export default Slider;