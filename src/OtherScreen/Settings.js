import React, { useState } from "react";
import "./Settings.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Settings() {
  const [page, setPage] = useState(1);
  return (
    <div className="body">
      <Header />
      <div className="box">
        <div className="Settings-Body">
          <div className="Settings-Left">
            <p className="Settings-Text1">Settings</p>
            <div className="Settings-Left-Box">
              <button
                className="Settings-Left-Button"
                onClick={() => {
                  setPage(1);
                }}
                style={{
                  color: page === 1 ? "#fff" : "#817f7f",
                }}
              >
                Account Info
              </button>
              <button
                className="Settings-Left-Button"
                onClick={() => {
                  setPage(2);
                }}
                style={{
                  color: page === 2 ? "#fff" : "#817f7f",
                }}
              >
                Profile
              </button>
              <Link to="/history" className="Settings-Left-Link">
                Watch History
              </Link>
              <Link to="/shows" className="Settings-Left-Link">
                TV Shows
              </Link>
              <Link to="/movies" className="Settings-Left-Link">
                Movies
              </Link>
              <Link to="/contacts" className="Settings-Left-Link">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="Settings-Right">
            {page === 1 ? (
              <div className="Settings-Right-Box">
                <div className="Settings-Right-Div">
                  <p className="Settings-Text2">Name:</p>
                  <input placeholder="" className="Settings-Input"/>
                </div>

                <div className="Settings-Right-Div">
                  <p className="Settings-Text2">Email:</p>
                  <input placeholder="" className="Settings-Input"/>
                </div>

                <div className="Settings-Right-Div">
                  <p className="Settings-Text2">Phone:</p>
                  <input placeholder="" className="Settings-Input"/>
                </div>

                <div className="Settings-Right-Div">
                  <button className="Settings-Right-button">Update</button>
                </div>
              </div>
            ) : page === 2 ? (
              <div style={{ width: "100%" }}>2</div>
            ) : (
              <h1> Error page</h1>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
