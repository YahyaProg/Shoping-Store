import React, { Fragment } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.webp";
import { Search_Cart, NavbarMenu } from "../index";
const Navbar = () => {
  return (
    <Fragment>
      <div className="Navbar-header">
        <div className="nav">
          <div className="Navbar-header-row-one ">
            <div className="navbar-header-logo-row-one ">
              <Link to="/">
                {" "}
                <img src={Logo} alt="" />
              </Link>
            </div>
            <Search_Cart />
          </div>
          <div className="Navbar-header-row-two">
            <NavbarMenu />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
