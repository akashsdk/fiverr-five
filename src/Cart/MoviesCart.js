import React, { useState } from "react";
import { Drawer } from "antd";
import { AppstoreAddOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./MoviesCart.css";
import Icon from "../Icon/IMDb.png";

export default function MoviesCart({
  Img,
  Name,
  Catalogue,
  IMD,
  Language,
  Released,
  Plot,
  mainCatalogue,
  Director,
  Writer,
}) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Link className="MoviesCart-Body" onClick={showDrawer}>
        <img className="MoviesCart-Img" src={Img} alt="Cart" />
        <div className="MoviesCart-Box">
          <p className="MoviesCart-Text1">{Name}</p>
          <p className="MoviesCart-Text2">{Catalogue}</p>
          <p className="MoviesCart-Text2">{Language}</p>
          <div className="MoviesCart-Div">
            <img src={Icon} className="MoviesCart-Icon" alt="" />
            <p>{IMD}</p>
          </div>
          <p className="MoviesCart-Text2">Released: {Released}</p>
          <p className="MoviesCart-Text3">Plot: {Plot}</p>
        </div>
      </Link>
      <Drawer
        title={mainCatalogue}
        placement="right"
        onClose={onClose}
        open={open}
        width={"100%"}
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          borderRadius: "5px",
          height: "80vh",
          marginTop: "10vh",
          backgroundColor: "#fff",
        }}
      >
        <div className="MoviesCart-Drawer">
          <img className="MoviesCart-Drawer-Img" src={Img} alt="Cart" />
          <div className="MoviesCart-Drawer-Box">
            <p className="MoviesCart-Drawer-Text1">{Name}</p>
            <p className="MoviesCart-Drawer-Text5">{Catalogue}</p>
            <p className="MoviesCart-Drawer-Text2">{Language}</p>
            <div className="MoviesCart-Div">
              <img src={Icon} className="MoviesCart-Drawer-Icon" alt="" />
              <p className="MoviesCart-Drawer-Text4">{IMD}</p>
            </div>
            <p className="MoviesCart-Drawer-Text2">
              Released: <p className="MoviesCart-Drawer-Text5"> {Released}</p>
            </p>
            <p className="MoviesCart-Drawer-Text2">
              Director: <p className="MoviesCart-Drawer-Text5"> {Director}</p>
            </p>
            <p className="MoviesCart-Drawer-Text2">
              Writer: <p className="MoviesCart-Drawer-Text5"> {Writer}</p>
            </p>
            <p className="MoviesCart-Drawer-Text3">Plot: {Plot}</p>

            <div className="MoviesCart-Drawer-Line" />

            <div className="MoviesCart-Div">
              <button className="MoviesCart-Drawer-Button">
                <AppstoreAddOutlined className="MoviesCart-Drawer-Icon3"/>
                <p> WatchList</p>
              </button>

              <button  className="MoviesCart-Drawer-Button">
                <CaretRightOutlined className="MoviesCart-Drawer-Icon2"/>
                <p>Play Now</p>
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
