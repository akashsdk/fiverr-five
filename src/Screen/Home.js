import React from "react";
import "./Home.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SliderScreen from "../Others/SliderScreen";

import MovieSlider from "../Cart/MovieSlider";

import Img1 from "../Img/Karagar pster.jpeg";
export default function Home() {
  return (
    <div className="body">
      <Header />
      <div className="box">
        <SliderScreen />
        {/* Recently Added */}
        <div className="HomeBox1">
          <MovieSlider Img={Img1} name="Karagar" imd="7.5" />

          <MovieSlider Img={Img1} name="Karagar ok ok ok ok ok ok ok ok ok"  imd="0.0"/>
        </div>
        <div style={{ height: "1000px" }}></div>
        <Footer />
      </div>
    </div>
  );
}
