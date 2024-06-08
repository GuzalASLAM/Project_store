import React from "react";
import { Instagram, Whatsapp } from "../../assets/icons";

import styles from "./index.module.scss";
import { Map } from "../map";

export const Footer = () => {
  return (
    <footer className={styles.footerWraper}>
      <h2 className={styles.footerHeaderName}>Contact</h2>
      <div className={styles.contactCards}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Phone</div>
          <div className={styles.cardContent}>
            <a href="tel:+49 999 999 99 99">+49 999 999 99 99</a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Socials</div>
          <div className={styles.cardContent}>
            <Instagram />
            <Whatsapp />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Address</div>
          <div className={styles.cardContent}>
            <p>Address Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Working Hours</div>
          <div className={styles.cardContent}>
            <p>24 hours a day</p>
          </div>
        </div>
      </div>
      <Map />
    </footer>
  );
};
