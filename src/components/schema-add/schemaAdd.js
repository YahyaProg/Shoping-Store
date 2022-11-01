import React from "react";
import Slider from "react-slick";
import { AddComponent1, AddComponent2, AddComponent3 } from "../index";
const SchemaAdd = () => {
  const settings = {
    dots: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <AddComponent1 />
        <AddComponent2 />
        <AddComponent3 />
      </Slider>
    </div>
  );
};

export default SchemaAdd;
