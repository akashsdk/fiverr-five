import React, { useState } from "react";
import "./SliderScreen2.css";

import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

import Img1 from "../Data/Img1.jpeg";
import Img2 from "../Data/Img2.jpeg";
import Img3 from "../Data/Img3.jpeg";
import Img4 from "../Data/Img4.jpeg";
import Img5 from "../Data/Img5.jpeg";
import Img6 from "../Data/Img6.jpeg";
import Img7 from "../Data/Img7.jpeg";
import Img8 from "../Data/Img8.jpeg";
import Img9 from "../Data/Img9.jpeg";
import Img10 from "../Data/Img10.jpeg";

export default function SliderScreen2() {
  const [boxVisible, setBoxVisible] = useState(true);

  const toggleBoxVisibility = () => {
    setBoxVisible(!boxVisible);
  };

  return (
    <div className="SliderScreen2-Body">
      <button className="SliderScreen2-Button1" onClick={toggleBoxVisibility}>
        {boxVisible ? "Exclusives" : "Show Exclusives"}
        {boxVisible ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </button>
      {boxVisible && (
        <div className="SliderScreen2-Box">
          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img1} alt="Img" />
          </button>

          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img2} alt="Img" />
          </button>

          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img3} alt="Img" />
          </button>

          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img4} alt="Img" />
          </button>

          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img5} alt="Img" />
          </button>
        </div>
      )}



      
    </div>
  );
}
