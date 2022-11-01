import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsShare } from "react-icons/bs";
import { Rate, Typography, message } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Off from "../../assets/images/off.webp";
import "./ProductsCart.css";
import { useDispatch, useSelector } from "react-redux";
import { GetLinks } from "../../redux/actions/getLink";
import { addToCart, totalAmount } from "../../redux/actions/addToCart";
import { FavoriteAction, FavoriteBack } from "../../redux/actions/favorite";
import { likeProduct } from "../../redux/actions/getProducts";
const { Text } = Typography;

const ProductsCart = ({
  like,
  category,
  header,
  name,
  stars,
  offer,
  showPrice,
  price,
  image,
  id,
  amount,
}) => {
  const { cartCase } = useSelector((state) => state.AddCart);
  const Favorit = useSelector((state) => state.Favorite);
  const { email } = useSelector((state) => state.Login);
  const { isLogin } = useSelector((state) => state.Login);
  console.log("favorit", Favorit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalAmount());
  }, [cartCase]);

  const AddToCart = (id, amount, name, showPrice) => {
    dispatch(addToCart(id, amount, name, showPrice, image));
    message.success("Product added to cart Successfully");
  };

  const Like = (id, image, price, showPrice, name, offer, email) => {
    dispatch(likeProduct(id));
    if (isLogin) {
      dispatch(FavoriteAction(id, image, price, showPrice, name, offer, email));
    }
  };
  const onLike = (id) => {
    dispatch(likeProduct(id));
    if (isLogin) {
      dispatch(FavoriteBack(id));
    }
  };
  useEffect(() => {
    localStorage.setItem("favorit", JSON.stringify(Favorit));
  }, [Favorit]);
  return (
    <div className="relative">
      <Link
        onClick={() => dispatch(GetLinks(`local/${category}/${header}`))}
        to={`/products/local/${category}/${header}/${id}`}
      >
        <div className="card-container">
          <div className="card-image-container">
            {image && <img src={image[0]} alt="" />}

            {offer && (
              <div className="off-price">
                <img src={Off} alt="" />
              </div>
            )}
          </div>
          <div className="stars-container">
            <Rate value={stars} />
          </div>
          <div className="card-info-container">
            <p>{name}</p>
            <div className="cart-info-price">
              {price && (
                <div className="price-products">
                  <span> €</span>
                  <Text style={{ color: "red", fontSize: "14px" }} delete>
                    {price}
                  </Text>
                </div>
              )}

              <div className="price-show">
                <h2>{showPrice} €</h2>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="card-nav">
        <FiHeart
          className={!like ? "show" : "dnone"}
          onClick={() => Like(id, image, price, showPrice, name, offer, email)}
        />

        <FaHeart
          style={{ color: "red" }}
          className={like ? "show" : "dnone"}
          onClick={() => onLike(id)}
        />

        <BsShare />

        <AiOutlineShoppingCart
          onClick={() => AddToCart(id, amount, name, showPrice, image)}
        />
      </div>
    </div>
  );
};

export default ProductsCart;
