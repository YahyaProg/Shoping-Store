import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoTrashcan } from "react-icons/go";
import "./CaerChangeAmount.css";
import { message, Popconfirm } from "antd";
import {
  AmountChange,
  totalAmount,
  deleteItemCart,
} from "../../redux/actions/addToCart";
const CartChangeAmount = ({ id, amount, price, totalamount }) => {
  const { cartCase } = useSelector((state) => state.AddCart);
  useEffect(() => {
    dispatch(totalAmount());
  }, [cartCase]);

  const dispatch = useDispatch();
  let increase = "increase";
  let decrease = "decrease";

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartCase));
  }, [cartCase]);

  const confirm=(id)=>{
    dispatch(deleteItemCart(id))
    message.error("product deleted")
  }

  return (
    <div className="Change-amount">
      <div className="amount-change-section">
        <span onClick={() => dispatch(AmountChange(id, increase))}>+</span>
        <span>{amount}</span>
        {amount > 1 ? (
          <span onClick={() => dispatch(AmountChange(id, decrease))}>-</span>
        ) : (
          <Popconfirm
            title="Are you sure to delete this"
            okText="Yes"
            cancelText="No"
            onConfirm={() => confirm(id)}
          >
            <GoTrashcan/>
          </Popconfirm>
        )}
      </div>
      <div className="amount-info-section">
        <h3>Total Amount</h3>
        <p>
          <span>£ </span>
          {Math.floor(totalamount)}
        </p>
      </div>
    </div>
  );
};

export default CartChangeAmount;
