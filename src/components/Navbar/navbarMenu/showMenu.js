import React from "react";
import {MainSliderMenu,MainMenu} from "../../index";
import { useSelector } from "react-redux";
const ShowMenu = () => {
  const { showMenu } = useSelector((state) => state);
  const { Menu } = showMenu;
  return (
    <>
      <MainSliderMenu />
      <div className={Menu ? "show" : "dnone"}>
        <MainMenu />
      </div>
    </>
  );
};

export default ShowMenu;
