import React from "react";
import "./Search_Cart.css";
import { AiOutlineSearch } from "react-icons/ai";
import {Cart} from "../../index";

const Search_Cart = () => {
  return (
    <div className="search-cart">
      <div className="search">
        <AiOutlineSearch />
        <input placeholder="search" type="text" className="search-input" />
      </div>
      <Cart />
    </div>
  );
};

export default Search_Cart;
