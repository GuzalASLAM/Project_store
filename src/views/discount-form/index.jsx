import React, { useContext } from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { themeContext } from "../../context/theme";
import cn from "classnames";

export const Disount = () => {
  const { theme, switchTheme } = useContext(themeContext);
  const {} = useForm();

  return (
    <div
    // className={cn(styles.discountForm, { [styles.dark]: theme === "dark" })}
    >
      <div className={styles.discountForm}>
        <h2 className={styles.discountFormName}>5% off on the firs order</h2>
        <form className={styles.form}>
          <input placeholder="Name" />
          <input placeholder="Phone number" />
          <input placeholder="Email" />
          <button type="submit">Get a discount</button>
        </form>
      </div>
    </div>
  );
};
