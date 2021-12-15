import React, { useState, useContext } from "react";
import { Menu } from "./Menu";
import { MyOrder } from "../containers/MyOrder";
import { AppContext } from "@context/AppContext";

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shopingCart from "@icons/icon_shopping_cart.svg";

import "@styles/Header.scss";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {
    state: { cart },
  } = useContext(AppContext);

  const handleToogle = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToogle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shopingCart} alt="shopping cart" />
            {cart.length > 0 && <div>{cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};
