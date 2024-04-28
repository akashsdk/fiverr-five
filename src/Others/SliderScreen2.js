import React, { useState } from "react";
import "./SliderScreen2.css";

import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

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
      {boxVisible && <div className="SliderScreen2-Box">Box</div>}
    </div>
  );
}
