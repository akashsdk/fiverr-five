import React from "react";
import "./Profile.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Img1 from "../Img/profile-icon.jpeg";

import { Link } from "react-router-dom";
import { MessageOutlined, SettingOutlined } from "@ant-design/icons";

export default function Profile() {
  return (
    <div className="body">
      <Header />
      <div className="box">
        <div className="Profile-Body">
          <div className="Profile-Top-Box">
            <div className="Profile-Box">
              <div className="Profile-Div">
                <img src={Img1} className="Profile-Img1" alt="pic" />
              </div>
              <div className="Profile-Div2">
                <div className="Profile-Div-Top">
                  <Link className="Profile-Div-Link" to="/settings">
                    <SettingOutlined />
                    Settings
                  </Link>

                  <Link className="Profile-Div-Link" to="/contacts">
                    <MessageOutlined />
                    Message
                  </Link>
                </div>

                <div className="Profile-Div-Bottom">
                  <p>Your Good Name</p>
                  <p>Your Address</p>
                  <p>Your Email Address</p>
                  <p>Your Phone Number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
