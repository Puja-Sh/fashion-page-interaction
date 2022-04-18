import React from 'react';
import {TiSocialFacebook, TiSocialTwitter} from "react-icons/ti";
import {AiOutlineInstagram} from "react-icons/ai";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <ul>
                <li> <a href={"#"}> <TiSocialFacebook/>  </a></li>
                <li> <a href={"#"}> <AiOutlineInstagram/>  </a></li>
                <li> <a href={"#"}> <TiSocialTwitter/>  </a></li>
            </ul>
        </div>
    );
};

export default Footer;