import React, { useContext } from "react";
import { OrderItem } from "@components/OrderItem";
import { AppContext } from "../context/AppContext";

import flechita from "@icons/flechita.svg";

import "../styles/MyOrder.scss";

export const MyOrder = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acc, cur) => acc + cur.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  console.log(cart);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};
