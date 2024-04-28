import React, { useState, useEffect, useRef } from "react";
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

  const containerRef = useRef(null);

  const [scrollDirection, setScrollDirection] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    let intervalId;

    if (boxVisible && container) {
      const startScrolling = () => {
        intervalId = setInterval(() => {
          container.scrollLeft += 2 * scrollDirection;
          if (
            container.scrollLeft <= 0 ||
            container.scrollLeft >=
              container.scrollWidth - container.clientWidth
          ) {
            setScrollDirection((prevDirection) => -prevDirection);
          }
        }, 50);
      };

      startScrolling();

      return () => clearInterval(intervalId);
    }
  }, [boxVisible, scrollDirection]);

  return (
    <div className="SliderScreen2-Body">
      <button className="SliderScreen2-Button1" onClick={toggleBoxVisibility}>
        {boxVisible ? "Watch on the GO!" : "Show Watch on the GO!"}
        {boxVisible ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </button>
      {boxVisible && (
        <div className="SliderScreen2-Box" ref={containerRef}>
          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img10} alt="Img" />
          </button>
          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img10} alt="Img" />
          </button>
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
          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img6} alt="Img" />
          </button>
          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img7} alt="Img" />
          </button>
          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img8} alt="Img" />
          </button>
          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img9} alt="Img" />
          </button>
          <button className="SliderScreen2-Button2">
            <img className="SliderScreen2-Img" src={Img10} alt="Img" />
          </button>
        </div>
      )}
    </div>
  );
}
