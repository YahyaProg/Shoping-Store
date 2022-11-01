import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineFire } from "react-icons/ai";
import { useDispatch} from "react-redux";
import {ShowMenu} from "../../index";
import {
  showMainMenu,
  hideMainMenu,
  showMainSidebarMenu,
} from "../../../redux/actions/showMenuActions.js";
const Menu = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar-menu">
      <div className="navbar-menu-section">
        <div
          onMouseOver={() => dispatch(showMainMenu())}
          className="biggBergur-menu"
        >
          <GiHamburgerMenu />
        </div>
        <div className="sliderMenu-btn">
          <GiHamburgerMenu onClick={() => dispatch(showMainSidebarMenu())} />
        </div>
        <h3>Category of Goods</h3>
        <span>%Offers and Discounts</span>
        <span>
          <AiOutlineFire />
          The Best-Sells
        </span>
      </div>
      <div onMouseLeave={() => dispatch(hideMainMenu())} className="showMenu">
        <ShowMenu />
      </div>
    </div>
  );
};

export default Menu;
