import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router";
const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
};

const reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reduser, INIT_STATE);

  // ! CREATE
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    // navigate("/products");
  };
  // ! GET
  const getProducts = async () => {
    const { data } = await axios(API);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
    console.log(data);
  };
  const values = {
    products: state.products,
    addProduct,
    getProducts,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
