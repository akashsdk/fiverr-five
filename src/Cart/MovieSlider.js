import React from "react";
import "./MovieSlider.css";

import { StarOutlined } from "@ant-design/icons";

export default function MovieSlider({ Img, name, imd }) {
  return (
    <button className="MovieSlider-Body">
      <img className="MovieSlider-Img" src={Img} alt="cart" />
      <div className="MovieSlider-Div2">
        <p className="MovieSlider-Text"> {name} </p>
      </div>
      {imd && ( 
        <div className="MovieSlider-Div">
          <p className="MovieSlider-Text2">{imd}</p>
          <StarOutlined className="MovieSlider-Icon" />
        </div>
      )}
    </button>
  );
}
