import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetLinks } from "../../../redux/actions/getLink";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import "./Mainmenu.css";
import { BsArrowRightShort } from "react-icons/bs";
import { MenuData } from "../../../mega-menue-data/megaMenuData";
import { hideMainMenu } from "../../../redux/actions/showMenuActions";
const MainMenu = () => {
  const dispatch = useDispatch();
  const [Key, setKey] = useState("DigitalAccessory");
  const [selectedCategory, setSelectedCategory] = useState();
  const history = useHistory();
  useEffect(() => {
    let categorySelected = MenuData.filter((item) => {
      return item.key === Key;
    });

    setSelectedCategory(categorySelected[0]?.menu);
  }, [Key, history]);

  return (
    <div className="main-menu">
      <div className="main-menu-content">
        <div className="category">
          {MenuData.map((data) => {
            const { key, antd, title, link } = data;

            return (
              <Link
                onClick={() => dispatch(GetLinks(link, key))}
                to={`/products/${link}`}
              >
                <div
                  onMouseOver={() => setKey(key)}
                  key={key}
                  className="category-item"
                >
                  <div
                    onClick={() => dispatch(hideMainMenu())}
                    className="categories-title"
                  >
                    <div className="categories-icon">{antd}</div>
                    <div className="category-title">
                      <span>{title}</span>
                    </div>
                  </div>
                  <div className="arrow-svg">
                    <BsArrowRightShort />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="seprate-menu"></div>

        <div
          onClick={() => dispatch(hideMainMenu())}
          className="main-menu-item"
        >
          {selectedCategory?.map((item) => {
            const { title, link, submenu, key, header } = item;
            return (
              <div key={key} className="main-menu-item-column">
                <Link
                  onClick={() => dispatch(GetLinks(link, null, header))}
                  to={`/products/${link}`}
                >
                  {" "}
                  <div className="main-menu-item-title">
                    <h3>{title}</h3>
                  </div>{" "}
                </Link>
                {submenu.map((item) => {
                  const { title, link, key, category, brand, type } = item;
                  return (
                    <Link key={key}
                      onClick={() =>
                        dispatch(
                          GetLinks(link, null, null, category, brand, type)
                        )
                      }
                      to={`/products/${link}`}
                    >
                      {" "}
                      <p className="mani-menu-link" key={key}>
                        {title}
                      </p>{" "}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
