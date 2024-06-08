import React from "react";
import stayles from "./index.module.scss";

export const AllSales = () => {
  return (
    <div>
      <div className={stayles.allSale_breadCrambs}>
        <a href="/">
          <div>Main Page</div>
        </a>
        <div>All sales</div>
      </div>
      <h2 className={stayles.allSalesName}>All sales</h2>
      <div className={stayles.allSalesInputsWraper}>
        <span>Price</span>
        <input
          type="number"
          placeholder="from"
          className={"allSales_priceInputs"}
        />
        <input
          type="number"
          placeholder="to"
          className={"allSales_priceInputs"}
        />
        <span>Discounted items</span>
        <input type="checkbox" />
        <span>Sorted</span>
      </div>
      <select id="allSales_sortedForm">
        <option value={"by defoult"}>by defoult</option>
        <option value={"newest"}>newest</option>
        <option value={"price:high-low"}>price: high-low</option>
        <option value={"price:low-high"}>price: low_high</option>
      </select>
    </div>
  );
};
