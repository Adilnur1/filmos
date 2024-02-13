import React, { Children, createContext, useContext } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const values = {};
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
