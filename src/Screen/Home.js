import React, { useState, useEffect } from "react";
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
  return (
    <div className="body">
      <Header />
      <div className="box">
        <SliderScreen />
        {/* Recently Added */}
        <div className="HomeBox1">
          <MovieSlider Img={Img1} name="Wonder Woman" imd="8.5" />

          <MovieSlider Img={Img2} name="Ami bangladesh" imd="6.0" />

          <MovieSlider Img={Img3} name="Bahubali 2" imd="8.0" />

          <MovieSlider Img={Img4} name="Bhilaa-2024" imd="7.5" />

          <MovieSlider Img={Img5} name="Black Panther" imd="8.0" />

          <MovieSlider Img={Img6} name="Fast & Furious 6" imd="7.0" />

          <MovieSlider Img={Img7} name="Glass" imd="8.0" />

          <MovieSlider Img={Img8} name="Kaiser" imd="7.5" />

          <MovieSlider Img={Img9} name="RRR-2022" imd="7.5" />

          <MovieSlider Img={Img10} name="Tallenge - The Conjuring 2" imd="5.5" />

          <MovieSlider Img={Img11} name="Advocate Achinta Aich" imd="0.0" />

          <MovieSlider Img={Img12} name="Animal-2024" imd="8.0" />

          <MovieSlider Img={Img13} name="Priyotoma" imd="7.0" />
        </div>

        <div style={{ height: "1000px" }}></div>
        <Footer />
      </div>
    </div>
  );
}
