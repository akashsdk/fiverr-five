import React from "react";
import "./MoviesScreen.css";
import MoviesCart from "../Cart/MoviesCart";

import Img1 from "../Data/Movie Pic-1.jpeg";

export default function MoviesScreen() {
  return (
    <div className="MoviesScreen-Body">
      <MoviesCart
        Img={Img1}
        Name="DeAr (2024)"
        Catalogue="Drama, Family, Romance"
        Language="Tamil"
        IMD="6.8"
        Released="Apr 11, 2024 (India)"
        Plot="A newly married couple faces challenges when the wife snoring interrupts the husband sleep. Their struggles depict the compromises needed for a lasting marriage."
      />
      <MoviesCart Img={Img1}
        Name="h"
        Catalogue=""
        Language=""
        IMD=""
        Released=""
        Plot=""
        />
      <MoviesCart />

      <div style={{height:'1000px'}}></div>
    </div>
  );
}
