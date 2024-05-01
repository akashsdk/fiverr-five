import React, { useState, useEffect } from "react";
import "./SliderScreen.css";

import Img1 from "../Img/Karagar pster.jpeg";
import Img2 from "../Img/maxresdefault.jpg";
import Img3 from "../Img/Mobaroknama.jpg";
import Img4 from "../Img/rumi-poster.webp";
import SliderButton from "../Components/SliderButton";

import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

export default function SliderScreen() {
  const images = [Img1, Img2, Img3, Img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="SliderScreen-Body">
      <img
        alt="Poster"
        src={images[currentImageIndex]}
        className="SliderScreen-Img"
      />
      <div className="SliderScreen-Div">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SliderButton
            iconPosition="left"
            height="250px"
            onClick={goToPrevImage}
          />

          <SliderButton
            iconPosition="right"
            height="400px"
            onClick={goToNextImage}
          />
        </div>

        <div className="SliderScreen-ButtonDiv">
          <Tooltip title="Add to Watchlist">
            <button className="SliderScreen-PlusButton">
              <PlusOutlined />
            </button>
          </Tooltip>

          <button className="SliderScreen-PlayButton">
            <CaretRightOutlined /> Play Now
          </button>
        </div>

        <div className="SliderScreen-Buttons">
          {images.map((_, index) => (
            <button
              key={index}
              className={currentImageIndex === index ? "active" : ""}
              onClick={() => goToImage(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
