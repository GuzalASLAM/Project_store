import React from "react";
import { HeartIcon, CartIcon } from "../../assets/icons";
import stayles from "./index.module.scss";
import { BASE_URL } from "../../constants";

export const CardItem = ({
  price,
  description,
  image,
  discont,
  discontPercent,
}) => {
  return (
    <div>
      <div className={stayles.wrapper}>
        <div className={stayles.header}>
          <div className={stayles.discount}>{discontPercent}%</div>
          <img
            src={BASE_URL + image}
            alt="card"
            className={stayles.cardImage}
          />
          <HeartIcon className={stayles.heart} />
          <CartIcon className={stayles.cart} />
        </div>
        <div className={stayles.info}>
          <div className={stayles.description}>{description}</div>
          <div className={stayles.prices}>
            <div className={stayles.newPrice}>{discont}</div>
            <div className={stayles.oldPrice}>{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
