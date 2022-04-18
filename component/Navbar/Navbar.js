import React from 'react';

import {HiOutlineMenuAlt2} from "react-icons/hi";
import {RiHeartLine, RiWomenFill} from "react-icons/ri";

import styles from '../../styles/Navbar.module.css';
import {CgShoppingBag} from "react-icons/cg";
import {FiUser} from "react-icons/fi";


const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={`${styles.nav} ${styles.left}`}>
                <HiOutlineMenuAlt2 className={styles.icon}/>
            </div>
            <div className={`${styles.nav} ${styles.left}`}>
                <RiWomenFill className={styles.icon}/>
            </div>
            <div className={`${styles.nav} ${styles.navUl}`}>
                <ul className={styles.navUl}>
                    <li className={`${styles.navItem} ${styles.text}`}>new</li>
                    <li className={`${styles.navItem} ${styles.text}`}>sale</li>
                    <li className={`${styles.navItem} ${styles.text}`}>man</li>
                    <li className={`${styles.navItem} ${styles.text}`}>woman</li>
                </ul>
            </div>

            <div className={`${styles.nav} ${styles.right} ${styles.position}`}>
                <RiHeartLine className={`${styles.icon} `}/>
                <span className={styles.count}> 3 </span>
                <div className={styles.text}> search </div>
            </div>

            <div className={`${styles.nav} ${styles.rightNav}`}>
                <CgShoppingBag className={styles.icon}/>
                <FiUser className={styles.icon}/>
            </div>
        </div>
    );
};

export default Navbar;