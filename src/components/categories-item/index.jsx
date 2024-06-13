import React from "react";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";

export const CategoriesItem = ({ title, image }) => {
  return (
    <div className={styles.categoriesItemWrapper}>
      <img
        src={BASE_URL + image}
        alt="categoriess image"
        className={styles.categoriesImage}
      />
      <div className={styles.categoriesTitle}>{title}</div>
    </div>
  );
};
