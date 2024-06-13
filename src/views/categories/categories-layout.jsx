import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants";
import stayles from "./index.module.scss";
import { CategoriesItem } from "../../components/categories-item";

// import { fetchAllCategories } from "../../store/asycnc-actions";
// import { getAllCategories } from "../../store/selectors";
// import { getIsLoading, getError } from "../../store/selectors";
// import { useDispatch, useSelector } from "react-redux";
export const CategoriesLayout = ({ elementsCount = 4 }) => {
  const [categoriesItem, setCategoriesItem] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories/all`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoriesItem(data);
      });
  }, []);
  const filtredCategories = categoriesItem.filter((item, index) => {
    if (index < elementsCount) {
      return true;
    } else {
      return false;
    }
  });

  //-----kogda ispolzavolna dispatch vixodila kucha oshibok----
  // const dispatch = useDispatch();
  // const categories = useSelector(getAllCategories);
  // useEffect(() => {
  //   dispatch(fetchAllCategories());
  // }, [dispatch]);

  // const filtredCategories = categories.filter(({ index }) => index < 5);

  return (
    <div>
      <div className={stayles.categories_breadCrambs}>
        <a href="/">
          <div>Main Page</div>
        </a>
        <div>Categories</div>
      </div>

      <div className={stayles.header}>
        <h2 className={stayles.categoriesName}>Categories</h2>
        {categoriesItem.map(({ image, id, title }) => {
          <CategoriesItem image={image} title={title} key={id} />;
        })}
        {/* <img src={BASE_URL + image} alt="card" className={stayles.cardImg} /> */}
      </div>
      {/* <div className={stayles.info}>
        <div className={stayles.id}>{id}</div>
        <div className={stayles.title}>{title}</div>
      </div> */}
    </div>
  );
};
