import React from "react";
import "./Movies.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Movies() {
  return (
    <div className="body">
      <Header />
      <div className="box">
        Movies
        <Footer />
      </div>
    </div>
  );
}
