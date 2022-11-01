import React, { useState, useEffect } from "react";
import "./NavbarMenu.css";
import Logo from "../../../assets/images/logo.webp";
import {Menu} from "../../index";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
const NavbarMenu = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="navbar-Menue-section">
      <div className="menu">
        <Menu />
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <FaMoon onClick={toggleTheme} />
      </div>
    </div>
  );
};

export default NavbarMenu;
