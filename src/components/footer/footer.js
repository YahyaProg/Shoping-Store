import React from "react";
import { footerItem } from "../../utils/footer-item";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="container">
      <div className="margintop">
        <div className="ceprate"></div>
        <div className="footer">
          {footerItem.map((item, index) => {
            const { header, children } = item;
            return (
              <div key={index} className="footer-item">
                <h2>{header}</h2>
                <ul>
                  {children.map((item, index) => {
                    return <li>{item.title}</li>;
                  })}
                </ul>
              </div>
            );
          })}
          <div className="footer-concat change-content">
            <h2>Be With Us!</h2>
            <div className="fake-space">
              <BsInstagram />
              <ImLinkedin2 />
              <FiTwitter />
              <FaTelegramPlane />
            </div>
            <h2>Stay up to date with the latest discounts by emailing us</h2>
            <div className="getEmail">
              <input placeholder="please enter your email" type="text" />
              <button>Register</button>
            </div>
          </div>
        </div>
        <div className="ceprate"></div>
      </div>
    </div>
  );
};

export default Footer;
