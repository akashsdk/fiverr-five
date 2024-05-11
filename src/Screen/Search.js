import React, { useState } from "react";
import "./Search.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { LeftOutlined, CloseOutlined } from "@ant-design/icons";

export default function Search() {
  // Buck-Button
  const goBack = () => {
    window.history.back();
  };

  // Search
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const cancelSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="body">
      <Header />
      <div className="box">
        <div className="Search-Body">
          <div className="Search-Box">
            <button onClick={goBack} className="Search-Back-Button">
              <LeftOutlined className="Search-Back-Icon" />
            </button>
            <div className="Search-Div">
              <input
                className="Search-Input-Search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search shows, movies, artists, etc"
              />
              {searchQuery && (
                <button onClick={cancelSearch} className="Search-Cancel-Button">
                  <CloseOutlined />
                </button>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
