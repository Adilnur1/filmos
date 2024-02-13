import React from "react";
import ProductList from "../components/homePage/product/ProductList";
import SideBar from "../components/homePage/product/SideBar";

const ProductPage = () => {
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <SideBar />
      <ProductList />
    </div>
  );
};

export default ProductPage;
