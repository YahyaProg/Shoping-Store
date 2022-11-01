import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useSelector } from "react-redux";
import {CartChangeAmount} from "../../../index";
const ProductsSelectedInfo = ({ Show }) => {
  const { total_items, cartCase } = useSelector((state) => state.AddCart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartCase));
  }, [cartCase]);
  return (
    <div className={Show ? "productsSelected show" : "productsSelected"}>
      <div className="info-cart">
        <div className="info-cart-header">
          <span>{`${total_items} Products`}</span>
          <Link to="/products/cart">
            <span>see Cart</span>
          </Link>
        </div>
        <hr />
        {!cartCase.length && (
          <div style={{ height: "150px" }} className="info-cart-content">
            <span>Cart is Empty</span>
          </div>
        )}

        {cartCase.map((item) => {
          const { id, amount, image, name, price, totalamount } = item;
          return (
            <div key={id} className="info-cart-content">
              <div className="info-cart-content-info">
                <img src={image} alt="" />
                <p>{name}</p>
              </div>
              <div className="info-cart-content-amount">
                <CartChangeAmount
                  id={id}
                  amount={amount}
                  price={price}
                  totalamount={totalamount}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsSelectedInfo;
