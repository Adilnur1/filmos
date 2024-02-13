import React from "react";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Cart from "../components/cart/Cart";
import Auth from "../components/auth/Auth";
import EditPage from "../pages/EditPage";
import AdminPage from "../pages/AdminPage";
import { Route, Routes } from "react-router-dom";
import Questions from "../pages/Questions";

const MainRoutes = () => {
  const PUBLICK_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/products", element: <ProductPage /> },
    { id: 3, link: "/cart", element: <Cart /> },
    { id: 4, link: "/auth", element: <Auth /> },
    { id: 5, link: "/edit/:id", element: <EditPage /> },
    { id: 6, link: "/admin", element: <AdminPage /> },
    { id: 7, link: "/q", element: <Questions /> },
  ];
  return (
    <div>
      <Routes>
        {PUBLICK_ROUTES.map((elem) => (
          <Route path={elem.link} key={elem.id} element={elem.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
