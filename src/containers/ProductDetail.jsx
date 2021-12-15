import React from "react";
import { ProductInfo } from "@components/ProductInfo";

import closeIcon from "@icons/icon_close.png";

import "@styles/ProductDetail.scss";

export const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src={closeIcon} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};
