import React, { useState, useEffect } from "react";
import "./Cart.css";
import { ShoppingCart } from "../../../index";
import { HiOutlineLogin } from "react-icons/hi";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {logOut} from "../../../../redux/actions/login"
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
const Cart = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());
    history.push("/");
  };
  const {isLogin} = useSelector((state) => state.Login);
  useEffect(() => {
    localStorage.setItem("Login", JSON.stringify(isLogin));
  }, [isLogin]);

  return (
    <div className={isLogin ? "cart lgin" : "cart"}>
      {isLogin ? (
        <div onClick={() => setShow(!show)} className="logout">
          <IoPersonOutline className="svg1" />
          <IoIosArrowDown />
          <div  className={show === false ? "showLogout" : "showLogout show"}>
            <Link to="/product/favarit">
              {" "}
              <div className="logout-item">
                <MdOutlineFavoriteBorder /> <p>Favorites</p>
              </div>
            </Link>
            <div onClick={() => logout()} className="logout-item">
              <FiLogOut />
              <p>LogOut</p>
            </div>
          </div>
        </div>
      ) : (
        <Link to="/login">
          <div className="cart-login">
            <HiOutlineLogin />
            <p>login | Sing Up</p>
          </div>
        </Link>
      )}

      <div className="Login-svg">
        {isLogin ? (
          ""
        ) : (
          <Link to="/login">
            {" "}
            <HiOutlineLogin />
          </Link>
        )}
      </div>
      <Link to="/products/cart">
        <ShoppingCart />
      </Link>
    </div>
  );
};

export default Cart;
