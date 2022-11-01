import React from "react";
import { Rate } from "antd";
const ProductInfo = ({ info }) => {
  if (info.title === "labtop") {
    return (
      <div className="info-container">
        <h3>{info.name}</h3>
        <div className="ceprate"></div>
        <div className="rate">
          <Rate value={info.stars} /> <p>{info.stars} stars</p>
        </div>
        <h2>Product Details</h2>
        <div className="describ">
          <span>Graphic:</span> <h4>{info.Graphic}</h4>
        </div>
        <div className="describ">
          <span>Operating System:</span> <h4>{info.Operating_System}</h4>
        </div>
        <div className="describ">
          <span>Ports:</span> <h4>{info.Ports}</h4>
        </div>
        <div className="describ">
          <span>CPU:</span> <h4>{info.CPU}</h4>
        </div>
        <div className="describ">
          <span>RAM:</span> <h4>{info.RAM}</h4>
        </div>
        <div className="describ">
          <span>Screen:</span> <h4>{info.Screen}</h4>
        </div>
        <div className="describ">
          <span>SSD Hard:</span> <h4>{info.SSD_Hard}</h4>
        </div>
        {info.Warranty ? (
          <div className="describ">
            <span>Warranty:</span> <h4>{info.Warranty}</h4>
          </div>
        ) : null}
      </div>
    );
  }
  if (info.title === "mobile") {
    return (
      <div className="info-container">
        <h3>{info.name}</h3>
        <div className="ceprate"></div>
        <div className="rate">
          <Rate value={info.stars} /> <p>{info.stars} stars</p>
        </div>
        <h2>Product Details</h2>
        <div className="describ">
          <span>Main Camera:</span> <h4>{info.MainCamera}</h4>
        </div>
        <div className="describ">
          <span>Battery:</span> <h4>{info.Battery}</h4>
        </div>
        <div className="describ">
          <span>Front Camera:</span> <h4>{info.FontCamera}</h4>
        </div>
        <div className="describ">
          <span>Front Camera:</span> <h4>{info.Operating_System}</h4>
        </div>
        {info.Ram ? (
          <div className="describ">
            <span>Ram:</span> <h4>{info.Ram}</h4>
          </div>
        ) : null}
        <div className="describ">
          <span>CPU:</span> <h4>{info.cpu}</h4>
        </div>
        <div className="describ">
          <span>Screen:</span> <h4>{info.screen}</h4>
        </div>
        {info.Ram ? (
          <div className="describ">
            <span>Ram:</span> <h4>{info.Ram}</h4>
          </div>
        ) : null}
      </div>
    );
  }
  if (info.title === "monitor") {
    return (
      <div className="info-container">
        <h3>{info.name}</h3>
        <div className="ceprate"></div>
        <div className="rate">
          <Rate value={info.stars} /> <p>{info.stars} stars</p>
        </div>
        <h2>Product Details</h2>
        <div className="describ">
          <span>Built-in Speakers:</span> <h4>{info.Built_in_Speakers}</h4>
        </div>
        <div className="describ">
          <span>Curved:</span> <h4>{info.Curved}</h4>
        </div>
        <div className="describ">
          <span>Display Type:</span> <h4>{info.Display_Type}</h4>
        </div>
        {info.Input_Output_Types ? (
          <div className="describ">
            <span>Input/Output Types:</span> <h4>{info.Input_Output_Types}</h4>
          </div>
        ) : null}
        <div className="describ">
          <span>Panel Technology:</span> <h4>{info.Panel_Technology}</h4>
        </div>
        <div className="describ">
          <span>Refresh Rate:</span> <h4>{info.Refresh_Rate}</h4>
        </div>
        <div className="describ">
          <span>Resolution:</span> <h4>{info.Resolution}</h4>
        </div>
        <div className="describ">
          <span>Response Time:</span> <h4>{info.Response_Time}</h4>
        </div>
        <div className="describ">
          <span>Screen:</span> <h4>{info.screen}</h4>
        </div>
        <div className="describ">
          <span>Viewing Angle:</span> <h4>{info.Viewing_Angle}</h4>
        </div>
        {info.Warranty ? (
          <div className="describ">
            <span>Warranty:</span> <h4>{info.Warranty}</h4>
          </div>
        ) : null}
      </div>
    );
  }
  if (info.title === "mouse") {
    return (
      <div className="info-container">
        <h3>{info.name}</h3>
        <div className="ceprate"></div>
        <div className="rate">
          <Rate value={info.stars} /> <p>{info.stars} stars</p>
        </div>
        <h2>Product Details</h2>
        <div className="describ">
          <span>Bluetooth:</span> <h4>{info.Bluetooth}</h4>
        </div>
        <div className="describ">
          <span>Connection Type:</span> <h4>{info.Connection_Type}</h4>
        </div>
        <div className="describ">
          <span>Connectors:</span> <h4>{info.Connectors}</h4>
        </div>
        <div className="describ">
          <span>Depth:</span> <h4>{info.Depth}</h4>
        </div>
        <div className="describ">
          <span>Designed For Gaming:</span> <h4>{info.Designed_For_Gaming}</h4>
        </div>
        <div className="describ">
          <span>Ergonomic Design:</span> <h4>{info.Ergonomic_Design}</h4>
        </div>
        <div className="describ">
          <span>Height:</span> <h4>{info.Height}</h4>
        </div>
        <div className="describ">
          <span>Number Of Buttons:</span> <h4>{info.Number_Of_Buttons}</h4>
        </div>
        {info.Warranty ? (
          <div className="describ">
            <span>Warranty:</span> <h4>{info.Warranty}</h4>
          </div>
        ) : null}
        <div className="describ">
          <span>Width:</span> <h4>{info.Width}</h4>
        </div>
        {info.Wireless ? (
          <div className="describ">
            <span>Wireless:</span> <h4>{info.Wireless}</h4>
          </div>
        ) : null}
      </div>
    );
  }
  if (info.title === "keyboard") {
    return (
      <div className="info-container">
        <h3>{info.name}</h3>
        <div className="ceprate"></div>
        <div className="rate">
          <Rate value={info.stars} /> <p>{info.stars} stars</p>
        </div>
        <h2>Product Details</h2>
        {info.Backlit_Keys ? (
          <div className="describ">
            <span>Backlit Keys:</span> <h4>{info.Backlit_Keys}</h4>
          </div>
        ) : null}
        {info.Bluetooth ? (
          <div className="describ">
            <span>Bluetooth:</span> <h4>{info.Bluetooth}</h4>
          </div>
        ) : null}
        <div className="describ">
          <span>Connection Type:</span> <h4>{info.Connection_Type}</h4>
        </div>
        <div className="describ">
          <span>Connectors:</span> <h4>{info.Connectors}</h4>
        </div>
        <div className="describ">
          <span>Depth:</span> <h4>{info.Connectors}</h4>
        </div>
        {info.Height ? (
          <div className="describ">
            <span>Height:</span> <h4>{info.Height}</h4>
          </div>
        ) : null}
        {info.depth ? (
          <div className="describ">
            <span>Depth:</span> <h4>{info.depth}</h4>
          </div>
        ) : null}
        {info.Designed_For_Gaming ? (
          <div className="describ">
            <span>Designed For Gaming:</span>{" "}
            <h4>{info.Designed_For_Gaming}</h4>
          </div>
        ) : null}
        {info.Multimedia_Keys ? (
          <div className="describ">
            <span>Multimedia Keys:</span> <h4>{info.Multimedia_Keys}</h4>
          </div>
        ) : null}
        {info.Wireless ? (
          <div className="describ">
            <span>Wireless:</span> <h4>{info.Wireless}</h4>
          </div>
        ) : null}
        {info.Warranty ? (
          <div className="describ">
            <span>Warranty:</span> <h4>{info.Warranty}</h4>
          </div>
        ) : null}
      </div>
    );
  }
};

export default ProductInfo;
