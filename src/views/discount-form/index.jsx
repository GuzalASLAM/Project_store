import React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";

export const Disount = () => {
  const {} = useForm();

  return (
    <div className={styles.discountForm}>
      <h1>5% off on the firs order</h1>
      <form className={styles.form}>
        <input placeholder="Name" />
        <input placeholder="Phone number" />
        <input placeholder="Email" />
        <button type="submit">Get a discount</button>
      </form>
    </div>
  );
};
