import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./SliderButton.css";

export default function SliderButton({ height, iconPosition, onClick }) {
  return (
    <button
      className="slider-button"
      style={{ height: height }}
      onClick={onClick}
    >
      {iconPosition === "left" && (
        <LeftOutlined className="SliderButton-Icon" />
      )}
      {iconPosition === "right" && (
        <RightOutlined className="SliderButton-Icon" />
      )}
    </button>
  );
}
