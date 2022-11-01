import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const BuyCart = () => {
  const state = useSelector((state) => state.AddCart);
  const isLogin = useSelector((state) => state.isLogin);
  console.log(state.total_amounts);
  return (
    <div className="buycart">
      <div className="buycart-container">
        <h2 style={{ color: "var(--clr-font)" }}>Order Summary</h2>
        <div className="total-quantity">
          <h3>Total Quantity</h3>
          <p>{state.total_items}</p>
        </div>
        <div className="total-quantity">
          <h3>Total Amount</h3>
          <p>
            {" "}
            <span>£</span>
            {state.total_amounts}
          </p>
        </div>
        <Link to={isLogin ? "/" : "/login"}>
          {" "}
          <button className="order-btn">Order</button>
        </Link>
      </div>
    </div>
  );
};

export default BuyCart;
