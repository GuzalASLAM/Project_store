import React from "react";
import { BASE_URL } from "../../constants";
import stayles from "./index.module.scss";
// import { Link } from "react-router-dom";

export const CategoriesLayout = ({ image, id, title }) => {
  return (
    <div>
      <div className={stayles.categories_breadCrambs}>
        <a href="/">
          <div>Main Page</div>
        </a>
        <div>Categories</div>
      </div>
      <h2 className={stayles.categoriesName}>Categories</h2>
      <div className={stayles.header}>
        <img src={BASE_URL + image} alt="card" className={stayles.cardImg} />
      </div>
      <div className={stayles.info}>
        <div className={stayles.id}>{id}</div>
        <div className={stayles.title}>{title}</div>
      </div>
      {/* <Link to="/categories/1">category1</Link>
      <Link to="/categories/2">category2</Link>
      <Link to="/categories/3">category3</Link> */}
    </div>
  );
};
