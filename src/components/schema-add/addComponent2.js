import React from "react";
import Rog4 from "../../assets/images/lobtop images/Asus/ASUS ROG Zephyrus S17 Intel Core i9/Rog3.jpg";
const AddComponent2 = () => {
  return (
    <div className="AddComponent">
      <div className="add-img">
        <img src={Rog4} alt="" />
      </div>
      <div className="describtion">
        <h1>ASUS ROG Zephyrus S17 (2021)</h1>

        <h3>
          iProducts with electrical plugs are designed for use in the US.
          Outlets and voltage differ internationally and this product may
          require an adapter or converter for use in your destination. Please
          check compatibility before purchasing.
        </h3>
      </div>
    </div>
  );
};

export default AddComponent2;
