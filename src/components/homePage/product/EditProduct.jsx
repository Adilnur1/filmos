import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvider";

const EditProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct, editProduct } = useProduct();
  const [name, setName] = useState(oneProduct.todoName);
  const [img, setImg] = useState(oneProduct.todoImg);
  const [price, setPrice] = useState(oneProduct.todoPrice);
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setName(oneProduct.todoName);
    setImg(oneProduct.todoImg);
    setPrice(oneProduct.todoPrice);
  }, [oneProduct]);
  const handleClick = () => {
    if (!name || !price || !img) {
      return;
    }
    let editedProduct = {
      todoName: name,
      todoPrice: price,
      todoImg: img,
    };
    editProduct(editedProduct, id);
    navigate("/products");
  };
  return (
    <div>
      <div className="modalInp">
        <input
          type="text"
          placeholder="image"
          onChange={(e) => setImg(e.target.value)}
          value={img}
        />
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button onClick={handleClick}>Save</button>
      </div>
    </div>
  );
};

export default EditProduct;
