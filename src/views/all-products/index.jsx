import React from "react";
import stayles from "./index.module.scss";

export const AllProducts = () => {
  return (
    <div>
      <div className={stayles.breadCrams}>
        <a href="/">
          <div>Main Page</div>
        </a>
        <div>All product</div>
      </div>
      <h2 className={stayles.productsName}>All products</h2>
      <div className={stayles.inputsWraper}>
        <span>Price</span>
        <input
          type="number"
          placeholder="from"
          className={"allProduct_priceInputs"}
        />
        <input
          type="number"
          placeholder="to"
          className={"allProduct_priceInputs"}
        />
        <span>Discounted items</span>
        <input type="checkbox" />
        <span>Sorted</span>
      </div>
      <select id="product_sortedForm">
        <option value={"by defoult"}>by defoult</option>
        <option value={"newest"}>newest</option>
        <option value={"price:high-low"}>price: high-low</option>
        <option value={"price:low-high"}>price: low_high</option>
      </select>
    </div>
  );
};
