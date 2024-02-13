import React from "react";

const ProductCard = ({ elem }) => {
  return (
    <div>
      <img className="img" src={elem.todoImg} alt="" />
      <h3>{elem.todoName}</h3>
      <h3>{elem.todoPrice}</h3>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default ProductCard;
