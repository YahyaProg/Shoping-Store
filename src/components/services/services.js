import { services } from "../../utils/ServicesItem";
import "./Services.css";

const Services = () => {
  return (
    <div className="container">
      <div className="services">
        {services.map((item, index) => {
          return (
            <div key={index} className="services-item">
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
