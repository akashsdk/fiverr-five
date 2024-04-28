import React, { useState, useEffect } from 'react';
import "./Home.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SliderScreen from "../Others/SliderScreen";

import MovieSlider from "../Cart/MovieSlider";

import Img1 from "../Data/ Wonder Woman.webp";
import Img2 from "../Data/Ami bangladesh.jpeg";
import Img3 from "../Data/Bahubali 2.jpeg";
import Img4 from "../Data/Bhilaa-2024.jpeg";
import Img5 from "../Data/Black Panther.jpg";
import Img6 from "../Data/Fast & Furious 6.jpeg";
import Img7 from "../Data/Glass.jpeg";
import Img8 from "../Data/Kaiser.jpg";
import Img9 from "../Data/RRR-2022.jpg";
import Img10 from "../Data/Tallenge - The Conjuring 2.jpg";
import Img11 from "../Data/advocate achinta aich.jpg";
import Img12 from "../Data/animal-2024.jpeg";
import Img13 from "../Data/priyotoma.jpg";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const boxes = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'green' },
    { color: 'yellow' },
    { color: 'orange' }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideRight();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []); // Run only once when component mounts

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? boxes.length - 1 : prevIndex - 1));
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === boxes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="body">
      <Header />
      <div className="box">
        <SliderScreen />
        {/* Recently Added */}
        <div className="HomeBox1">
          <MovieSlider Img={Img1} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img2} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img3} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img4} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img5} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img6} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img7} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img8} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img9} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img10} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img11} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img12} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img13} name="Karagar" imd="7.5" />
        </div>






        <div className="box-slider">
      <div className="boxes" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {boxes.map((box, index) => (
          <div key={index} className="box" style={{ backgroundColor: box.color }}></div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={slideLeft}>Left</button>
        <button onClick={slideRight}>Right</button>
      </div>
    </div>



    
        <div style={{ height: "1000px" }}></div>
        <Footer />
      </div>
    </div>
  );
}
