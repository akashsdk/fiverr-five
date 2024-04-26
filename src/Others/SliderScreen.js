import React, { useState, useEffect } from "react";
import "./SliderScreen.css";

import Img1 from '../Img/Karagar pster.jpeg';
import Img2 from '../Img/maxresdefault.jpg';
import Img3 from '../Img/Mobaroknama.jpg';
import Img4 from '../Img/rumi-poster.webp';

export default function SliderScreen() {
  const images = [Img1, Img2, Img3, Img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide duration here (in milliseconds)

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
      <img alt="Poster" src={images[currentImageIndex]} className="SliderScreen-Img" />
      <div className="SliderScreen-Div">
        <button onClick={goToPrevImage}>Left</button>
        <button onClick={goToNextImage}>Right</button>

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
