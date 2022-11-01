import React, { useState, useEffect } from "react";

const ProductImage = ({ info }) => {
  const { images } = info;

  const [mainImage, setMainImage] = useState();
  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);
  return (
    <div className="product-image-container">
      <div className="main-image">
        <img src={mainImage} alt="" />
      </div>
      <div className="side-image">
        {images.map((item, index) => {
          return (
            <img
              className={mainImage === item ? "border" : null}
              onClick={() => setMainImage(item)}
              key={index}
              src={item}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;
