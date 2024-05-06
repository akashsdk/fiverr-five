import React from "react";
import "./Search.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { LeftOutlined } from "@ant-design/icons";

export default function Search() {
  // Buck-Button
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="body">
      <Header />
      <div className="box">
        <div className="Search-Body">
          <div className="Search-Box">
            <button onClick={goBack} className="Search-Back-Button">
              <LeftOutlined className="Search-Back-Icon"/>
            </button>
            <div className="Search-Div">
              <input className="Search-Input-Search"/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
