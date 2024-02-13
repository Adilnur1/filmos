import React from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ elem }) => {
  const { deleteProducts } = useProduct();
  const navigate = useNavigate();

  return (
    <div>
      <img className="img" src={elem.todoImg} alt="" />
      <h3>{elem.todoName}</h3>
      <h3 style={{ color: "green" }}>{elem.todoPrice}$</h3>
      <button onClick={() => deleteProducts(elem.id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${elem.id}`)}>Edit</button>
    </div>
  );
};

export default ProductCard;
