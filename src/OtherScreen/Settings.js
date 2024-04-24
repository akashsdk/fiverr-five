import React from "react";
import "./Settings.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Settings() {
  return (
    <div className="body">
      <Header />
      <div className="box">
        Settings
        <Footer />
      </div>
    </div>
  );
}
