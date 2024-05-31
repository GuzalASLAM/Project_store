import React from "react";
import { Link } from "react-router-dom";
import cactus from "../../assets/cactus.svg";
import { Four } from "../../assets/icons";
import styles from "./index.module.scss";

// import cn from "classnames";

export const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <div className={styles.errorPage}>
        <Four />
        <img src={cactus} alt="cactus" className={styles.cactus} />
        <Four />
      </div>
      <h1>PAGE NOT FOUND!</h1>
      <p>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <Link to="/" className={styles.button}>
        Go HOME!
      </Link>
    </div>
  );
};
