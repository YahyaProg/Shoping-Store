import react from "react";
import "./Add.css";
import iphone13Promax from "../../assets/images/mobile/apple/APPLE iPhone 13 Pro Max - 128 GB, Alpine Green/13pro-4.jpg";
const AddComponent1 = () => {
  return (
    <div className="AddComponent">
      <div className="add-img">
        <img src={iphone13Promax} alt="" />
      </div>
      <div className="describtion">
        <h1>Privacy is built in.</h1>

        <h3>
          iPhone helps put you in control of your personal information. For
          example, when you’re browsing, Safari intelligently helps block
          trackers from profiling you and shows you which ones have been blocked
          in your Privacy Report. And the list goes on.
        </h3>
      </div>
    </div>
  );
};

export default AddComponent1;
