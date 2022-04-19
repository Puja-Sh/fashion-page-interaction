import React, {useContext, useEffect, useRef} from 'react';
import styles from "../../styles/Common.module.css";
import { gsap } from "gsap";
import {Context} from "../../context/Context";

const Arrow1 = () => {
    const [context, ] = useContext(Context);

    const arrowRef = useRef();

    useEffect(()=>{
        if(!context){
            gsap.to(arrowRef.current,{duration:0.5,x:'300px', ease:'ease-in'})
        }
    },[context])

    return (
        <>
            <img src={"/images/arrow-1.png"} className={styles.arrowStyle1} alt={"arrow style 1"} ref={arrowRef}/>
        </>
    );
};

export default Arrow1;