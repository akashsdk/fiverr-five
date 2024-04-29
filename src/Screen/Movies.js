import React from "react";
import "./Movies.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MoviesScreen from "../Others/MoviesScreen";

export default function Movies() {
  return (
    <div className="body">
      <Header />
      <div className="box">
        <MoviesScreen/>
        <Footer />
      </div>
    </div>
  );
}
