import React from "react";
import "./Shows.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ShowsScreen from "../Others/ShowsScreen";

export default function Shows() {
  return (
    <div className="body">
      <Header />
      <div className="box">
        <ShowsScreen/>
        <Footer />
      </div>
    </div>
  );
}
