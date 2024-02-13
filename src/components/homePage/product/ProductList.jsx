import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import "./Product.css";

const ProductList = () => {
  const { products, getProducts } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="list">
      {products.map((elem) => (
        <ProductCard elem={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ProductList;
