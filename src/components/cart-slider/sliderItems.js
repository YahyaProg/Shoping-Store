import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Off from "../../assets/images/off.webp";
import { Rate, Typography } from "antd";
import { GetLinks } from "../../redux/actions/getLink";
const { Text, Paragraph } = Typography;
const SliderItem = ({
  id,
  name,
  price,
  showPrice,
  image,
  offer,
  category,
  header,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="slider-item">
      <div className="diffrentbackground">
        <Link
          onClick={() => dispatch(GetLinks(`local/${category}/${header}`))}
          to={`/products/local/${category}/${header}/${id}`}
        >
          <div className="card-container">
            <div className="card-image-container">
              <img src={image} alt="" />

              {offer && (
                <div className="off-pric">
                  <img src={Off} alt="" />
                </div>
              )}
            </div>
            <div className="card-info-container">
              <Paragraph
                style={{
                  color: "var(---clr-font)",
                  fontSize: "17px",
                  margin: "3px 0",
                }}
                ellipsis={{ rows: 1 }}
              >
                {name}
              </Paragraph>
              <div className="cart-info-price">
                {price && (
                  <div className="price-products">
                    <span> €</span>
                    <Text style={{ color: "red", fontSize: "14px" }} delete>
                      {price}
                    </Text>
                  </div>
                )}

                <div className="price-show">
                  <h2>{showPrice} €</h2>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SliderItem;
