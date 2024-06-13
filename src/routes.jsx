import React from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./views/categories";
import { AllSales } from "./views/all-sales";
import { AllProducts } from "./views/all-products";
import { Main } from "./views/main";
import { Layout } from "./views/layout";
import { Product } from "./views/product";
import { NotFound } from "./views/not-found";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="categories/*" element={<Categories elementsCount={5} />} />
        <Route path="all-sales" element={<AllSales />} />
        <Route path="products/:itemId" element={<Product />} />
        {/* TODO: роут для лайкнутых товаров (самостоятельно) */}
        {/* TODO: роут для корзины (самостоятельно) */}
        <Route path="all-products" element={<AllProducts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
