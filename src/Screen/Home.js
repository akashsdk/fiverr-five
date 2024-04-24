import React from "react";
import "./Home.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SliderScreen from "../OtherScreen/SliderScreen";

export default function Home() {
  return (
    <div className="body">
      <Header />
      <div className="box">
        <SliderScreen />
        <p>Home</p>
        <div style={{ height: "1000px" }}>jj</div>
        <Footer />
      </div>
    </div>
  );
}
