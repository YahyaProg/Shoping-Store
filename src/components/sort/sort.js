import React, { useState, useEffect } from "react";
import "./Sort.css";
import { Filter } from "../../redux/actions/sort";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
const sortItem = [
  { title: "All", case: "all" },
  { title: "The Most Expensive", case: "price" },
  { title: "The Most Popular", case: "popular" },
];

const Sort = () => {
  const dispatch = useDispatch();
  const [select, setSlect] = useState("all");

  const action = (select) => {
    setSlect(select);
    dispatch(Filter(select));
  };

  return (
    <div className="container">
      <div className="sorted">
        <section className="base-sort">
          <GiHamburgerMenu />
          <AiOutlineArrowDown />
          <p>Sort based on:</p>
        </section>
        <div className="sort-item">
          {sortItem.map((item, index) => {
            return (
              <p key={index}
                className={item.case === select ? "active" : null}
                onClick={() => action(item.case)}
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
      <div className="ceprate"></div>
    </div>
  );
};

export default Sort;
