import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { BsCaretDown } from "react-icons/bs";
import { MenuData } from "../../mega-menue-data/megaMenuData";
import { Link } from "react-router-dom";
import { GetLinks } from "../../redux/actions/getLink";
import {
  hideMainSidebarMenu,
  hideCoverSidebarMenu,
} from "../../redux/actions/showMenuActions";
const CoverSidebarMenu = () => {
  const { showMenu } = useSelector((state) => state);
  const { secondSidebar } = showMenu;

  const { Show, Key } = secondSidebar;

  const Menu = MenuData.find((item) => item.key === Key);
  let menu = Menu?.menu;
  const [showChild, setShowChild] = useState({
    key: "",
    show: false,
  });
  const dispatch = useDispatch();

  const setShow = (key) => {
    if (showChild.key !== key) {
      setShowChild({
        key,
        show: true,
      });
    } else {
      setShowChild({
        key: "",
        show: false,
      });
    }
  };

  const onclick = (link, category, brand, type) => {
    dispatch(GetLinks(link, null, null, category, brand, type));
    dispatch(hideMainSidebarMenu());
    dispatch(hideCoverSidebarMenu());
  };

  return (
    <div className={Show ? "secondSidebar Show" : "secondSidebar"}>
      <div className="second-sidebar-header">
        <h2>Main Menue</h2>
        <span onClick={() => dispatch(hideCoverSidebarMenu())}>
          <BsArrowLeftShort />
        </span>
      </div>
      <hr className="hre" />
      <div className="second-sidebar-under">
        <h4>
          {" "}
          <Link
            onClick={() => dispatch(GetLinks("local/digital", Key))}
            to={"/products/local/digital"}
          >
            {" "}
            see All product in this category
          </Link>
        </h4>
        <span>
          <BsArrowRightShort />
        </span>
      </div>

      <div className="second-sidebar-content">
        {menu?.map((item) => {
          const { title, key, submenu } = item;
          return (
            <div key={key}>
              <div className="second-sidebar-content-item">
                <h4>{title}</h4>
                <span>
                  <BsCaretDown
                    className={
                      showChild.key === key && showChild.show === true
                        ? "route"
                        : null
                    }
                    onClick={() => setShow(key)}
                  />
                </span>
              </div>
              <div
                className={
                  showChild.key === key && showChild.show === true
                    ? "content-items-child show-child"
                    : "content-items-child"
                }
              >
                {submenu?.map((item2) => {
                  const { title, link, key, category, brand, type } = item2;
                  console.log(link);
                  return (
                    <Link
                      key={key}
                      onClick={() => onclick(link, category, brand, type)}
                      to={`/products/${link}`}
                    >
                      {title}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CoverSidebarMenu;
