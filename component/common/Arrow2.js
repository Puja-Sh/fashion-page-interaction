import React, {useContext, useEffect, useRef} from 'react';
import styles from "../../styles/Common.module.css";
import {gsap} from "gsap";
import {Context} from "../../context/Context";

const Arrow1 = () => {
    const [context, ] = useContext(Context);

    const arrowRef = useRef();

    useEffect(() => {
        gsap.to(arrowRef.current,{duration:1,y:'-20px', ease:'bounce'})
    },[])
    return (
        <>
            <img src={"/images/arrow-2.png"} className={styles.arrowStyle2} alt={"arrow-style-2"} ref={arrowRef}/>
        </>
    );
};

export default Arrow1;