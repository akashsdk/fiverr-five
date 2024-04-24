import React, { useState, useEffect } from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import HeaderLogo from "../Img/Header Logo.png";

export default function Header() {
  // Color Change
  const storedColors = localStorage.getItem("selectedTextColors");
  const [textColors, setTextColors] = useState(
    storedColors
      ? JSON.parse(storedColors)
      : ["black", "black", "black", "black", "black", "black", "black"]
  );

  const handleTextClick = (index) => {
    const updatedColors = textColors.map((_, i) =>
      i === index ? "red" : "black"
    );
    setTextColors(updatedColors);
    localStorage.setItem("selectedTextColors", JSON.stringify(updatedColors));
  };

  useEffect(() => {
    localStorage.setItem("selectedTextColors", JSON.stringify(textColors));
  }, [textColors]);

  return (
    <div className="HeaderBody">
      <div className="HeaderLeftBox">
        <Link to="/" onClick={() => handleTextClick(0)}>
          <img src={HeaderLogo} className="HeaderImg" alt="Logo" />
        </Link>

        <Link to="/" className="HeaderLink" onClick={() => handleTextClick(0)}>
          <p className="Header-Text1">Home</p>
          <div className={`HeaderLine ${textColors[0]}`} />
        </Link>

        <Link
          to="/shows"
          className="HeaderLink"
          onClick={() => handleTextClick(1)}
        >
          <p className="Header-Text1">Shows</p>
          <div className={`HeaderLine ${textColors[1]}`} />
        </Link>

        <Link
          to="/movies"
          className="HeaderLink"
          onClick={() => handleTextClick(2)}
        >
          <p className="Header-Text1">Movies</p>
          <div className={`HeaderLine ${textColors[2]}`} />
        </Link>

        <Link
          to="/categories"
          className="HeaderLink"
          onClick={() => handleTextClick(3)}
        >
          <p className="Header-Text1">Categories</p>
          <div className={`HeaderLine ${textColors[3]}`} />
        </Link>
      </div>

      <div className="HeaderRightBox">aksh</div>
    </div>
  );
}
