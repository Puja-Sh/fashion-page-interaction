import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../component/Navbar/Navbar";
import ProductList from "../component/Product/ProductList";
import {useEffect, useRef, useState} from "react";
import {Context} from "../context/Context";

export default function Home() {

    const scrollHandler = (e) => {
        if(window.screen.width >= 1000){
            e.preventDefault();
            const container = scrollRef.current;
            const containerScrollPosition = scrollRef.current.scrollLeft;

            container.scrollTo({
                top: 0,
                left: containerScrollPosition + e.deltaY,
            });
        }

    }
    const scrollRef = useRef(null);
    const [context, setContext] = useState(false);

    return (
        <Context.Provider value={[context, setContext]}>
        <>
            <Head>
                <title>Fashion Shop</title>
                <meta name="description" content="Fashion Shop landing page"/>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            <Navbar/>
            <main className={`${styles.main}`} onWheel={scrollHandler} ref={scrollRef} >
                <ProductList/>
            </main>

        </> </Context.Provider>
    )
}
