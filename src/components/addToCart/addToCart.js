import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, totalAmount } from "../../redux/actions/addToCart";
import { message } from "antd";
const AddToCart = ({ product }) => {
  const {
    id,
    amount,
    product_info: { name, showPrice, images },
  } = product[0];

  const dispatch = useDispatch();
  let info = product[0].product_info;

  const { cartCase } = useSelector((state) => state.AddCart);
  const { totalamount } = cartCase;
  const [Amount, setAmount] = useState(info.amount);

  useEffect(() => {
    dispatch(totalAmount());
  }, [cartCase]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartCase));
  }, [cartCase, totalAmount, id]);
  console.log(JSON.stringify(cartCase));
  const increseAmount = () => {
    setAmount((oldState) => {
      let newState = oldState + 1;
      if (newState > 10) {
        return 10;
      } else return newState;
    });
  };

  const decreaseAmount = () => {
    setAmount((oldState) => {
      let newState = oldState - 1;
      if (newState < 1) {
        return 1;
      } else return newState;
    });
  };

  const AddToCart = (id, Amount, name, showPrice, images) => {
    dispatch(addToCart(id, Amount, name, showPrice, images));
    message.success("Product added to cart Successfully");
  };

  return (
    <div className="add-to-cart-container">
      <div className="add-to-cart">
        <h2>Product price</h2>
        <div className="add-price">
          <span>£</span>
          <h1>{info.showPrice}</h1>
        </div>
        <div className="ceprate"></div>
        <div className="add-count">
          <span onClick={() => decreaseAmount()}>-</span>
          <h1>{Amount}</h1>
          <span onClick={() => increseAmount()}>+</span>
        </div>
        <div className="ceprate"></div>
        <div className="addButton">
          <button
            onClick={() => AddToCart(id, Amount, name, showPrice, images)}
          >
            <span>
              <FiShoppingCart />
            </span>
            ADD TO CART
          </button>
        </div>
      </div>{" "}
      ;
    </div>
  );
};

export default AddToCart;
