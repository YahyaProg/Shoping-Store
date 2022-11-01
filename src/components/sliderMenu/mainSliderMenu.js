import React from "react";
import {
  hideMainSidebarMenu,
  showCoverSidebarMenu,
} from "../../redux/actions/showMenuActions";
import "./Slider.css";
import logo from "../../assets/images/logo.webp";
import { BsFillXSquareFill, BsArrowRight } from "react-icons/bs";
import { FaOpenid } from "react-icons/fa";
import { MenuData } from "../../mega-menue-data/megaMenuData";
import { useSelector, useDispatch } from "react-redux";
import { CoverSidebarMenu } from "../index";

const MainSliderMenu = () => {
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => state);
  const { mainSidebar } = showMenu;

  return (
    <div className={mainSidebar ? "mainSidebar Show" : "mainSidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="" />
        <span>
          <BsFillXSquareFill onClick={() => dispatch(hideMainSidebarMenu())} />
        </span>
      </div>
      <hr className="hre" />
      <div className="under-header">
        <p>
          {" "}
          <span>%</span> Offers and Discounts{" "}
        </p>
        <p>
          {" "}
          <span>
            <FaOpenid />
          </span>{" "}
          The Best-Sells
        </p>
      </div>
      <hr className="hr" />
      <div className="sidebar-content">
        <h3 style={{ color: "var(--clr-font)" }}>Category of Goods</h3>

        {MenuData.map((item) => {
          const { title, antd, key } = item;

          return (
            <div
              key={key}
              className="sidebar-item"
              onClick={() => dispatch(showCoverSidebarMenu(key))}
            >
              <div className="sidebar-item-icon">
                <span>{antd}</span>
                <span>{title}</span>
              </div>
              <div className="sidebar-item-arrow">
                <BsArrowRight />
              </div>
            </div>
          );
        })}
      </div>
      <CoverSidebarMenu />
    </div>
  );
};

export default MainSliderMenu;
