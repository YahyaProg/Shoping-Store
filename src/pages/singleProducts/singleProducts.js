import "./SingleProducts.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AddToCart,
  ProductInfo,
  ProductImage,
  Services,
  SimpleSlider,
  CommentBox,
  CommentShow,
} from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { SingleProduct } from "../../redux/actions/singleProducts";
const SingleProductPage = () => {
  const { id } = useParams();
  const { singleProduct, sameProducts } = useSelector(
    (state) => state.SingleProducts
  );
  const [product_info, setProductInfo] = useState();
  const [SameProducts, setSameProducts] = useState([]);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getInfo = () => {
    if (singleProduct[0]) {
      setProductInfo(singleProduct[0].product_info);
    }
  };
  useEffect(() => {
    getInfo();
  }, [singleProduct, id, getInfo]);

  useEffect(() => {
    dispatch(SingleProduct(id));
  }, [dispatch, id]);
  useEffect(() => {
    setSameProducts(sameProducts);
  }, [sameProducts]);

  console.log(sameProducts);

  return (
    <div className="container">
      <div className="single-product">
        <div className="single-product-container">
          {product_info ? <ProductImage info={product_info} /> : null}
          <div className="product-info getback">
            {product_info ? <ProductInfo info={product_info} /> : null}
          </div>

          {product_info ? <AddToCart product={singleProduct} /> : null}
        </div>
        <div className="single-prpduct-services">
          <Services />
        </div>
        <h1>You May Be Interested In</h1>

        {SameProducts && <SimpleSlider items={SameProducts} />}
     
        <div className="comment_title">
          <h1>Comments :</h1>
        </div>

        <CommentBox autoFocus="false" dependId={id} />
        <CommentShow dependId={id} />
      </div>
    </div>
  );
};

export default SingleProductPage;
