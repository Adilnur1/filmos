import React, { useState } from "react";
import "./Product.css";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router";
const AddProduct = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [price, setPrice] = useState();
  const { addProduct } = useProduct();
  const handleClick = () => {
    if (!name || !img || !price) {
      alert("куда");
    } else {
      let newTodo = {
        todoName: name,
        todoImg: img,
        todoPrice: price,
      };
      addProduct(newTodo);
    }
    setName("");
    setImg("");
    setPrice("");
    navigate("/products");
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Add Product</button>
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsOpen(false)}>x</button>
            <form className="modalInp">
              <input
                type="text"
                placeholder="image"
                // onClick={(e) => e.stopPropagation()}
                onChange={(e) => setImg(e.target.value)}
              />
              <input
                type="text"
                placeholder="Name"
                // onClick={(e) => e.stopPropagation()}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Price"
                // onClick={(e) => e.stopPropagation()}
                onChange={(e) => setPrice(e.target.value)}
              />
            </form>
            <button onClick={handleClick}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
