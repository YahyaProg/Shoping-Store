import React from "react";
import "./favorite.css";
import { BsTrash } from "react-icons/bs";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Typography, message, Popconfirm } from "antd";
import Off from "../../assets/images/off.webp";
import { useSelector, useDispatch } from "react-redux";
import { FavoriteBack } from "../../redux/actions/favorite";
import { addToCart } from "../../redux/actions/addToCart";
const { Text } = Typography;
const Favorit = () => {
  const state = useSelector((state) => state.Favorite);
  const { email } = useSelector((state) => state.Login);
  const favorit = state.filter((item) => {
    return item.email === email;
  });
  const confirm = (id) => {
    dispatch(FavoriteBack(id));
  };
  const dispatch = useDispatch();
  if (favorit.length < 1)
    return (
      <div className="empty-favorit">
        <h2>there is no item</h2>
      </div>
    );
  return (
    <div className="container">
      <div className="favorit">
        {favorit.map((item) => {
          const { id, image, price, showPrice, name, offer, amount = 1 } = item;
          console.log("favorit", image);
          return (
            <div key={id} className="favoritItem">
              <img src={image[0]} alt="" />
              <div className="facorit-name">
                <p> {name}</p>
              </div>

              <div className="offer-price">
                {price && (
                  <>
                    <span>€</span>
                    <Text style={{ color: "red", fontSize: "18px" }} delete>
                      {price}
                    </Text>
                  </>
                )}
              </div>

              <div className="price-favorit">
                <span>€ {showPrice}</span>
              </div>

              <div className="buttons-favorit">
                <button
                  onClick={() => {
                    message.success("Product added to cart Successfully");
                    dispatch(addToCart(id, amount, name, showPrice, image));
                  }}
                  className="favorit-btn Add"
                >
                  <AiOutlineShoppingCart />
                  ADD TO CART
                </button>
                <Popconfirm
                  title="Are you sure to delete this"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => confirm(id)}
                >
                  <button className="favorit-btn Delete">
                    <BsTrash />
                    Delete
                  </button>
                </Popconfirm>
              </div>
              <div className="offer-favorit-absolut">
                {offer && (
                  <div>
                    <img src={Off} alt="" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorit;
