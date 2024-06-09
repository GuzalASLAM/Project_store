import React, { useEffect } from "react";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { SiteHeader } from "../../components/site-header";
import { useDispatch, useSelector } from "react-redux";
import {
  getDiscountItems,
  getIsLoading,
  getError,
} from "../../store/selectors";
import { fetchAllItems, fetchAllCategories } from "../../store/asycnc-actions";
import { Disount } from "../discount-form";
import { Categories } from "../categories";
import { AllSales } from "../all-sales";

export const Main = () => {
  const dispatch = useDispatch();
  const saleItems = useSelector(getDiscountItems);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  if (error) {
    return <div>ERROR</div>;
  }

  return isLoading ? (
    <div>LOADING...</div>
  ) : (
    <>
      <SiteHeader />
      <Categories />
      <Disount />
      <AllSales />
      {/* <h2>Sale</h2> */}
      <div className={styles.sales}>
        {saleItems.map(({ price, discont_price, description, image, id }) => (
          <CardItem
            key={id}
            price={price}
            discont={discont_price}
            discontPercent={getDiscountPercent(price, discont_price)}
            description={description}
            image={image}
            id={id}
          />
        ))}
      </div>
    </>
  );
};
