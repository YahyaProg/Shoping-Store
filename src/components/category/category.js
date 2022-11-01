import React from "react";
import { categoryItem } from "../../utils/CategoryItem";
// import { routeMenu } from "../../MegaMenueData/MegaMenuData";
import "./Category.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetLinks } from "../../redux/actions/getLink";

const Category = () => {
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="category-container">
        {categoryItem.map((item, index) => {
          console.log(item.svg);
          return (
            <Link
              onClick={() =>
                dispatch(
                  GetLinks(
                    `local/${item.category}/${item.header}`,
                    null,
                    item.header
                  )
                )
              }
              to={`/products/local/${item.category}/${item.header}`}
            >
              <div key={index} className="categoryItem">
                <span>{item.svg}</span>
                <h3>{item.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
