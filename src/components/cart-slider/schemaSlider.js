import React, { useState } from "react";
import Slider from "react-slick";
import SliderItem from "./sliderItems";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetLinks } from "../../redux/actions/getLink";
const SimpleSlider = ({ items }) => {
  const dispatch = useDispatch();
  console.log(items);
  const settings = {
    speed: 3000,
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1325,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {items?.map((item) => {
          const { id, category, header, product_info } = item;

          const { name, price, showPrice, images, offer } = product_info;

          return (
            <div key={id} className="b1">
              <div className="b2">
                <Link
                  onClick={() =>
                    dispatch(GetLinks(`local/${category}/${header}`))
                  }
                  to={`/products/local/${category}/${header}/${id}`}
                >
                  <SliderItem
                    id={id}
                    name={name}
                    price={price}
                    showPrice={showPrice}
                    image={images[0]}
                    offer={offer}
                    category={category}
                    header={header}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
