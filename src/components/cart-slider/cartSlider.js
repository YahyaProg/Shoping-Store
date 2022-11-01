import React, { useEffect } from "react";
import "./CartSlider.css";
import Baloon from "../../assets/images/offersbg.webp";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SimpleSlider } from "../index";
import { SliderSchema } from "../../redux/actions/schema";
import { GetLinks } from "../../redux/actions/getLink";
const Schema = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SliderSchema());
  }, []);
  const schemaItems = useSelector((state) => state.Schema);
  return (
    <div className="container">
      <div className="cart-slider">
        <div className="cart-slider-container">
          <div className="poostre">
            <img src={Baloon} alt="" />
            <h2>Special Offer</h2>
            <Link
              onClick={() => {
                dispatch(GetLinks(`local/Digital`, "offer"));
              }}
              to={`/products/local/digital`}
            >
              <button>see All</button>
            </Link>
          </div>
          <div className="cart-slider-items">
            <SimpleSlider items={schemaItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schema;
