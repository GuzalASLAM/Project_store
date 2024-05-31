import React from "react";
import { BASE_URL } from "../../constants";
import styles from "./index.module.scss";
// import { Link } from "react-router-dom";

export const CategoriesLayout = ({ image, id, title }) => {
  return (
    <div>
      <h1>Categories</h1>
      <div className={styles.header}>
        <img src={BASE_URL + image} alt="card" className={styles.cardImg} />
      </div>
      <div className={styles.info}>
        <div className={styles.id}>{id}</div>
        <div className={styles.title}>{title}</div>
      </div>
      {/* <Link to="/categories/1">category1</Link>
      <Link to="/categories/2">category2</Link>
      <Link to="/categories/3">category3</Link> */}
    </div>
  );
};
