import React, { useEffect } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { ProductsCart, Category } from "../../components/index";
import { Filter } from "../../redux/actions/sort";

import { getProducts } from "../../redux/actions/getProducts";
import { Sort } from "../../components/index";

const Products = () => {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Products);
  const { Data } = useSelector((state) => state.Sort);
  const { link, key, header, category, brand, type } = useSelector(
    (state) => state.GetLink
  );
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(Products));
  }, [Products]);

  useEffect(() => {
    dispatch(getProducts());
  }, [link, key, header, category, brand, type, dispatch]);

  useEffect(() => {
    dispatch(Filter("all"));
  }, [Products, dispatch]);
  console.log("data", link);
  return (
    <div className="container">
      <Category />
      <Sort />
      {Data.length === 0 && (
        <div className="empty-title">
          <h3>No products found</h3>
        </div>
      )}
      <div className="products-container">
        {Data?.map((item) => {
          const { product_info, category, header, id, favorite } = item;
          const { Key, name, stars, offer, showPrice, price, images, amount } =
            product_info;
          return (
            <ProductsCart
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
              favorite={favorite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
