import React, { useState } from "react";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import "./Cart.css";
import { FiShoppingCart } from "react-icons/fi";
import {ProductsSelectedInfo} from "../../../index";
const ShoppingCart = () => {
  const { total_items } = useSelector((state) => state.AddCart);
  const [showCart, setShowCart] = useState(false);
  return (
    <div
      className="shopping-cart"
      onMouseOver={() => setShowCart(true)}
      onMouseOut={() => setShowCart(false)}
    >
      <Badge count={total_items}>
        <FiShoppingCart />
      </Badge>
      <ProductsSelectedInfo Show={showCart} />
    </div>
  );
};

export default ShoppingCart;
