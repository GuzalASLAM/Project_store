import React from "react";
import styles from "./index.module.scss";

// import discountFormImg from "../../assets/discountFormImg.png";

export const Disount = () => {
  // console.log(discountFormImg);
  return (
    <div
      className={styles.discountForm}
      // style={{
      //   backgroundImage: `url(${discountFormImg}),linear-gradient(80.46deg, #87933d -0.68%, #55610b 66.66%)`,
      // }}
    >
      {/* <img src={discountFormImg} alt="form" /> */}
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
