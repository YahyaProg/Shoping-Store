import React, { useState, useEffect } from "react";
import "./design.css";
import Planet from "../../assets/images/planet.webp";
import Mobl from "../../assets/images/mobl.webp";
const Design = () => {
  const [day1, setDay1] = useState();
  const [hour1, setHour1] = useState();
  const [min1, setMin1] = useState();
  const [second1, setSecond1] = useState();

  const [day2, setDay2] = useState();
  const [hour2, setHour2] = useState();
  const [min2, setMin2] = useState();
  const [second2, setSecond2] = useState();

  let interval;

  const startTimer = () => {
    const countDowndDate = new Date("December 25,2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDowndDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDay1(days);
        setHour1(hour);
        setMin1(minutes);
        setSecond1(seconds);
      }
    });
  };
  let interval2;

  const StartTimer2 = () => {
    const countDowndDate = new Date("November 10,2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDowndDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDay2(days);
        setHour2(hour);
        setMin2(minutes);
        setSecond2(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
    StartTimer2();
  }, []);

  return (
    <div className="container">
      <section className="Design">
        <div className="furniture">
          <div className="furniture-info">
            <h1>Larissa Furniture</h1>
            <p>
              Larissa beautiful sofa with its private design can give a unique
              beauty to your reception decoration.
            </p>
            <button className="furniture-btn">See Product</button>
          </div>
          <div className="furniture-img">
            <img src={Planet} alt="" />
          </div>
          <div className="showCountDown">
            <div className="countdown-container">
              <div>
                <p>{day1}</p> <p>Days</p>
              </div>{" "}
              <div>
                <p>{hour1}</p> <p>Hour</p>{" "}
              </div>{" "}
              <div>
                <p>{min1}</p> <p>Minuts</p>
              </div>{" "}
              <div>
                <p>
                  {second1} <p>Second</p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="furniture">
          <div className="furniture-info">
            <h1>Romano furniture</h1>
            <p>
              Romano sofa has an impressive beauty and can multiply the charm of
              your home decoration.
            </p>
            <button className="furniture-btn">See Product</button>
          </div>
          <div className="furniture-img">
            <img src={Mobl} alt="" />
          </div>
          <div className="showCountDown">
            <div className="countdown-container">
              <div>
                <p>{day2}</p> <p>Days</p>
              </div>{" "}
              <div>
                <p>{hour2}</p> <p>Hour</p>{" "}
              </div>{" "}
              <div>
                <p>{min2}</p> <p>Minuts</p>
              </div>{" "}
              <div>
                <p>
                  {second2} <p>Second</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
