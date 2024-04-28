import React, { useState, useEffect } from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import {
  SearchOutlined,
  MenuOutlined,
  CloseOutlined,
  SettingOutlined,
  DesktopOutlined,
  HistoryOutlined,
  UserOutlined,
  ContactsOutlined,
  CustomerServiceOutlined,
  FacebookOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  FileSearchOutlined,
  PlaySquareOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";

import HeaderLogo from "../Icon/WebSite Logo.png";
import Img1 from "../Img/App store logo.png";
import Img2 from "../Img/play soter.png";

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

  // Drawer
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onLink = () => {
    setOpen(false);
    handleTextClick(4);
  };

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

      <div className="HeaderLeftBox2">
        <Link to="/" onClick={() => handleTextClick(0)}>
          <img src={HeaderLogo} className="HeaderImg" alt="Logo" />
        </Link>

        

        <Link
          to="/shows"
          className="HeaderLink"
          onClick={() => handleTextClick(1)}
        >
          <VideoCameraAddOutlined className="HeaderIcon"/>
        </Link>

        <Link
          to="/movies"
          className="HeaderLink"
          onClick={() => handleTextClick(2)}
        >
          <PlaySquareOutlined className="HeaderIcon"/>
        </Link>

        <Link
          to="/categories"
          className="HeaderLink"
          onClick={() => handleTextClick(3)}
        >
          <FileSearchOutlined  className="HeaderIcon"/>
        </Link>
      </div>

      <div className="HeaderRightBox">
        <Link
          to="/search"
          className="HeaderLink"
          onClick={() => handleTextClick(4)}
        >
          <SearchOutlined className="HeaderIcon" />
        </Link>

        <MenuOutlined className="HeaderIcon" onClick={showDrawer} />
      </div>

      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        key="right"
        className="HeaderDrawer"
        style={{ backgroundColor: "black", }}
        width={400}
      >
        <div
          
        >
          <div className="HeaderDrawer-TopDiv">
            <CloseOutlined onClick={onClose} className="HeaderIcon" />
          </div>

          <div className="HeaderDrawer-Mid-Div">
            <Link to="/settings" className="HeaderLink2" onClick={onLink}>
              <SettingOutlined className="HeaderIcon2" />
              <p className="Header-Text2">Setting</p>
            </Link>

            <Link to="/watchlist" className="HeaderLink2" onClick={onLink}>
              <DesktopOutlined className="HeaderIcon2" />
              <p className="Header-Text2">Watchlist</p>
            </Link>

            <Link to="/history" className="HeaderLink2" onClick={onLink}>
              <HistoryOutlined className="HeaderIcon2" />
              <p className="Header-Text2">History</p>
            </Link>

            <Link to="/profile" className="HeaderLink2" onClick={onLink}>
              <UserOutlined className="HeaderIcon2" />
              <p className="Header-Text2">Profile</p>
            </Link>

            <Link to="/about" className="HeaderLink2" onClick={onLink}>
              <ContactsOutlined className="HeaderIcon2" />
              <p className="Header-Text2">About Us</p>
            </Link>

            <Link to="/contacts" className="HeaderLink2" onClick={onLink}>
              <CustomerServiceOutlined className="HeaderIcon2" />
              <p className="Header-Text2">Contacts</p>
            </Link>
          </div>
          <div className="Header-Drawer-Box">
            <p className="Header-Drawer-Text3">AVAILABLE ON:</p>
            <div style={{ display: "flex" }}>
              <button className="Header-Drawer-Button">
                <img src={Img1} alt="" className="Header-Drawer-Img" />
              </button>
              <button className="Header-Drawer-Button">
                <img src={Img2} alt="" className="Header-Drawer-Img2" />
              </button>
            </div>

            <div className="Header-Drawer-Line" />

            <p className="Header-Drawer-Text3">FOLLOW US:</p>
            <div style={{ display: "flex" }}>
              <a href="" target="_blank" className="Header-Drawer-aTag">
                <FacebookOutlined className="Header-Drawer-Icon" />
              </a>

              <a href="" target="_blank" className="Header-Drawer-aTag">
                <TwitterOutlined className="Header-Drawer-Icon" />
              </a>

              <a href="" target="_blank" className="Header-Drawer-aTag">
                <WhatsAppOutlined className="Header-Drawer-Icon" />
              </a>

              <a href="" target="_blank" className="Header-Drawer-aTag">
                <YoutubeOutlined className="Header-Drawer-Icon" />
              </a>

              <a href="" target="_blank" className="Header-Drawer-aTag">
                <InstagramOutlined className="Header-Drawer-Icon" />
              </a>

              <a href="" target="_blank" className="Header-Drawer-aTag">
                <LinkedinOutlined className="Header-Drawer-Icon" />
              </a>
            </div>

            <div className="Header-Drawer-Line" />

            <div style={{ display: "flex" }}>
              <Link to="/about" className="HeaderLink3" onClick={onLink}>
                <p className="Header-Drawer-Text4">.About Us</p>
              </Link>

              <Link to="/blog" className="HeaderLink3" onClick={onLink}>
                <p className="Header-Drawer-Text4">.Blog</p>
              </Link>

              <Link to="/contacts" className="HeaderLink3" onClick={onLink}>
                <p className="Header-Drawer-Text4">.Contacts</p>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
