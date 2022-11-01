import React from "react";
import "./CartPage.css";
import { CartChangeAmount } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { BuyCart } from "../../components/index";
import { Clear_Cart } from "../../redux/actions/addToCart";
const CartPage = () => {
  const { cartCase } = useSelector((state) => state.AddCart);
  console.log(cartCase);
  const dispatch = useDispatch();
  if (cartCase.length === 0) {
    return (
      <div className="container">
        <div className="emptyCart">
          <h2>cart is empty</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="cartpage-container">
          <div className="cartpage-content">
            {cartCase.map((item) => {
              const { id, amount, image, name, price, totalamount } = item;
              return (
                <div key={id} className="cart-page">
                  <div className="cart-page-item" key={id}>
                    <div className="select-product-info">
                      <img src={image} alt="" />
                      <p>{name}</p>
                    </div>
                    <div className="select-product-info-shop">
                      <CartChangeAmount
                        id={id}
                        amount={amount}
                        price={price}
                        totalamount={totalamount}
                      />
                    </div>
                  </div>
                  <div className="ceprate"></div>
                </div>
              );
            })}
            <div className="clear-button-container">
              <button
                onClick={() => dispatch(Clear_Cart())}
                className="clear-cart"
              >
                CLEAR CART
              </button>
            </div>
          </div>
          <div className="buy-cart">
            <BuyCart />
          </div>
        </div>
      </div>
    );
  }
};

export default CartPage;
