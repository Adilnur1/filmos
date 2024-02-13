import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import "./Product.css";
import PaginationControlled from "./PaginationControlled";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { products, getProducts } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);
  // ! SEARCH
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  // ! PAGINATION
  const [page, setPage] = useState(1);
  const itemPerPage = 4;
  const count = Math.ceil(products.length / itemPerPage);
  console.log(count);
  const currentData = () => {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return products.slice(begin, end);
  };
  console.log(currentData());
  const handleChange = (e, value) => {
    setPage(value);
  };
  return (
    <div>
      <div className="list">
        {currentData().map((elem) => (
          <ProductCard elem={elem} key={elem.id} />
        ))}
      </div>
      <div className="list">
        <PaginationControlled
          count={count}
          page={page}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ProductList;
