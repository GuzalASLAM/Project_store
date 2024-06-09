import React, { useEffect } from "react";
import { BASE_URL } from "../../constants";
import stayles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { fetchAllCategories } from "../../store/asycnc-actions";
import { getAllCategories } from "../../store/selectors";
// import { getIsLoading, getError } from "../../store/selectors";

export const CategoriesLayout = ({ image, id, title }) => {
  //-----kogda ispolzavolna dispatch vixodila kucha oshibok----

  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const filtredCategories = categories.filter(({ index }) => index < 5);

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
    </div>
  );
};
