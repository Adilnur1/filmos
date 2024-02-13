import React from "react";
import logo from "./assets/logo 1.png";
import search from "./assets/search.png";
import star from "./assets/star.png";
import auth from "./assets/auth.png";
import cart from "./assets/cart.svg";
import "./homePage.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="c">
      <div className="conteiner">
        <div className="logo">
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="nav-menu">
          <a href="#">Одеждаа</a>
          <NavLink to={"/products"}>Обувь</NavLink>
          <a href="#">Аксессуары</a>
          <a href="#">Бренды</a>
          <a href="#">Расчет стоимости</a>
          <a href="#">RF Dewi Extended</a>
        </div>
        <div className="nav-icon">
          <div className="nav-icon-search">
            <img src={search} alt="" />
          </div>
          <div className="nav-icon-start">
            <img src={star} alt="" />
          </div>
          <div className="nav-icon-auth">
            <img src={auth} alt="" />
          </div>
          <div className="nav-icon-cart">
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
