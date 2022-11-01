import React from "react";
import "./NewestProducts.css";
import { productsList } from "../../products_data/data";
import { ProductsCart } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetLinks } from "../../redux/actions/getLink";
const newProducts = productsList.filter((item) => {
  if (item.new) {
    return item.new;
  } else {
    return null;
  }
});

const NewestProducts = () => {
  const products = useSelector((state) => state.Products);
  return (
    <div className="container">
      <div className="newest-products">
        <h1>Newest Goods</h1>
        <div className="products-container">
          {products.map((item) => {
            const { product_info, category, header, id, like } = item;
            const {
              Key,
              name,
              stars,
              offer,
              showPrice,
              price,
              images,
              amount,
            } = product_info;
            return (
              <ProductsCart
                like={like}
                category={category}
                header={header}
                key={Key}
                name={name}
                stars={stars}
                offer={offer}
                showPrice={showPrice}
                price={price}
                image={images}
                id={id}
                amount={amount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewestProducts;
