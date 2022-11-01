import React from "react";
import { Link } from "react-router-dom";
import "./ShowCategories.css";
import Digital from "../../assets/images/digital-category.webp";
import Fashion from "../../assets/images/fashion-category.webp";
import Biuty from "../../assets/images/beauty-category.webp";
import House from "../../assets/images/house-category.webp";
import Toy from "../../assets/images/toy-category.webp";
import Books from "../../assets/images/stationery-category.webp";
import Sport from "../../assets/images/sport-category.webp";
import { useDispatch, useSelector } from "react-redux";
import DigitalIcon from "../../assets/icons/digital.png";
import FasionIcon from "../../assets/icons/jacket.png";
import HouseIcon from "../../assets/icons/house.png";
import BookIcon from "../../assets/icons/book.png";
import ToyIcon from "../../assets/icons/toy.png";
import CostamicIcon from "../../assets/icons/cosmatic.png";
import SportIcon from "../../assets/icons/sport.png";
import { GetLinks } from "../../redux/actions/getLink";
const ShowCategories = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="title-category">
        <h1>Category of Goods</h1>
      </div>

      <div className="categories-banner">
        <div className="Category-banner-row-1">
          <div className="digital-banner">
            <div className="digital-banner-container">
              <div className="digital-banner-describtion">
                <h2>Digital Products</h2>
                <p>
                  We offer the newest products at the most competitive prices
                </p>
                <Link
                  onClick={() => {
                    dispatch(GetLinks(`local/Digital`, "Digital"));
                  }}
                  to={`/products/local/digital`}
                >
                  <button className="btn-see-product digital-btn">
                    See All Products
                  </button>
                </Link>
              </div>
              <div className="digital-img">
                <img src={Digital} alt="" />
              </div>
            </div>
          </div>

          <div className="fashion-banner">
            <div className="fasion-banner-cotainer">
              <div className="fasion-banner-describtion">
                <h2>Fashion and Clothes</h2>
                <p>The most popular brands with the most reasonable prices</p>
                <button className="btn-see-product fasion-btn">
                  See All Products
                </button>
              </div>
              <div className="fasion-image">
                <img src={Fashion} alt="" />
              </div>
            </div>
          </div>

          <div className="sports-biuty-banner">
            <div className="biuty-banner">
              <div className="biuty-banner-container">
                <div className="biuty-banner-describtion">
                  <h2>Cosmetic Products</h2>
                  <p>
                    Anti-allergy products suitable for all skin types from
                    reputable brands
                  </p>
                  <button className="btn-see-product biuty-btn">
                    See All Products
                  </button>
                </div>
                <div className="biuty-banner-image">
                  <img src={Biuty} alt="" />
                </div>
              </div>
            </div>
            <div className="sport-banner">
              <div className="banner-sport-container">
                <div className="banner-sport-img">
                  <img src={Sport} alt="" />
                </div>
                <div className="banner-sport-describtion">
                  <h2>Sport and Trip</h2>
                  <p>High-quality and durable products</p>
                  <button className="btn-see-product btn-sport">
                    See All Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="category-banner-row-2">
          <div className="home-banner">
            <div className="home-banner-container">
              <div className="home-banner-describtion">
                <h1>Furniture and kitchen</h1>
                <p>In accordance with the designs of the day</p>
                <button className="btn-see-product btn-home">
                  See All Products
                </button>
              </div>
              <div className="home-banner-image">
                <img src={House} alt="" />
              </div>
            </div>
          </div>
          <div className="toy-banner">
            <div className="toy-banner-container">
              <div className="toy-banner-describtion">
                <h2>Toys and Baby</h2>
                <p>A combination of entertainment and creativity</p>
                <img src={Toy} alt="" />
                <button className="btn-see-product toy-btn">
                  See All Products
                </button>
              </div>
            </div>
          </div>
          <div className="stationary">
            <div className="stationary-container">
              <h2>Books, Stationery and Art</h2>
              <p>Variety in choice</p>
              <img src={Books} alt="" />
              <button className="btn-see-product books-btn">
                See All Products
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="categories-icons dnone">
        <div className="category-icon one-icon">
          <img src={DigitalIcon} alt="" />
          <h3>Digital Products</h3>
        </div>
        <div className="category-icon two-icon">
          <img src={FasionIcon} alt="" />
          <h3>Fashion and clothes</h3>
        </div>
        <div className="category-icon three-icon">
          <img src={CostamicIcon} alt="" />
          <h3>Cosmetic Products</h3>
        </div>
        <div className="category-icon four-icon">
          <img src={SportIcon} alt="" />
          <h3>Sport and Trip</h3>
        </div>
        <div className="category-icon five-icon">
          <img src={HouseIcon} alt="" />
          <h3>Furniture and kitchen</h3>
        </div>
        <div className="category-icon six-icon">
          <img src={ToyIcon} alt="" />
          <h3>Toys And Baby</h3>
        </div>
        <div className="category-icon seven-icon">
          <img src={BookIcon} alt="" />
          <h3>Book, Stationery and Art</h3>
        </div>
      </div>
    </div>
  );
};

export default ShowCategories;
