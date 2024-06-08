import React from "react";
import { Instagram, Whatsapp } from "../../assets/icons";

import styles from "./index.module.scss";
import { Map } from "../map";

export const Footer = () => {
  return (
    <footer className={styles.footerWraper}>
      <h2 className={styles.footerHeadarName}>Contact</h2>
      <div className={styles.infoCard}>
        <div className={styles.contack_cards}>
          <span>
            PHONE <a href="+49 999 999 99 99"></a>
          </span>
          <div className={styles.iconInfo}>
            <span>Socials</span>
            <Instagram />
            <Whatsapp />
          </div>
          <div className={styles.contack_cards}>
            <span>Address</span>
            <p>Address Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
          </div>
          <div>
            <span>Working Hours</span>
            <span>24 hours a day</span>
          </div>
          <Map />
        </div>

        {/* <img src={map} alt="map" className={styles.map} /> */}
      </div>
    </footer>
  );
};
