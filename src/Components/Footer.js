import React, { useState } from "react";
import "./Footer.css";

import { Button, Drawer, Space, Input, notification } from "antd";
import {
  FacebookOutlined,
  XOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import Img1 from "../Img/Feedback-removebg-preview.png";
import Img2 from "../Icon/WebSite Logo.png";
import Img3 from "../Img/App store logo.png";
import Img4 from "../Img/play soter.png";
import { Link } from "react-router-dom";

const { TextArea } = Input;
export default function Footer() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Submit Successfully 🤗",
      description:
        "Dear Customer, Your feedback is very valuable to us and will be saved for our future development. Thank you 🥰",
    });
  };
  const openNotificationWithIcon2 = (type) => {
    api[type]({
      message: "Something Missing! 🤔",
      description:
        " Dear Customer, something is missing in this form, maybe a Name, Message, or Both. So, please try again! ",
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      text: "",
    });
  };

  const handleSend = () => {
    console.log("Form Data:", formData);

    if (formData.name === "" || formData.text === "") {
      setTimeout(() => {
        openNotificationWithIcon2("error");
      }, 1000);
    } else {
      setOpen(false);

      setTimeout(() => {
        openNotificationWithIcon("success");
      }, 2000);

      setFormData({
        name: "",
        email: "",
        text: "",
      });
    }
  };
  return (
    <div className="Footer-Body">
      {contextHolder}
      <div className="Footer-Box">
        <div className="Footer-Box1">
          <img className="Footer-Box1-Img" src={Img2} alt="logo" />
          <div className="Footer-Box1-Box">
            <p className="Footer-Box-text1">Email:</p>
            <p className="Footer-Box-text2">cinemaroobd@gmail.com</p>
            <p className="Footer-Box-text1">Phone:</p>
            <p className="Footer-Box-text2">01500-000000</p>
          </div>
          <p className="Footer-Box-text4">Get in touch</p>
          <div className="Footer-Box1-Box2">
            <FacebookOutlined className="Footer-Box1-Icon" />
            <XOutlined className="Footer-Box1-Icon" />
            <YoutubeOutlined className="Footer-Box1-Icon" />
            <InstagramOutlined className="Footer-Box1-Icon" />
            <LinkedinOutlined className="Footer-Box1-Icon" />
          </div>
          <div className="Footer-Box1-Div">
            <img className="Footer-Box1-Img2" src={Img3} alt="logo" />
            <img className="Footer-Box1-Img2" src={Img4} alt="logo" />
          </div>
        </div>

        <div className="Footer-Box2">
          <div className="Footer-Box2-Div">
            <p className="Footer-Box-text3">EXPLORE</p>
            <Link className="Footer-Box-Link" to="/shows">
              Latest Shows
            </Link>
            <Link className="Footer-Box-Link" to="/movies">
              Latest Movies
            </Link>
            <Link className="Footer-Box-Link" to="/categories">
              All Categories
            </Link>
            <Link className="Footer-Box-Link" to="/shows">
              Upcoming Shows
            </Link>
            <Link className="Footer-Box-Link" to="/movies">
              Upcoming Movies
            </Link>
          </div>
          <div className="Footer-Box2-Div">
            <p className="Footer-Box-text3">COMPANY</p>
            <Link className="Footer-Box-Link" to="/settings">
              Setting
            </Link>
            <Link className="Footer-Box-Link" to="/watchlist">
              Watchlist
            </Link>
            <Link className="Footer-Box-Link" to="/history">
              History
            </Link>
            <Link className="Footer-Box-Link" to="/profile">
              Profile
            </Link>
            <Link className="Footer-Box-Link" to="/about">
              About Us
            </Link>
            <Link className="Footer-Box-Link" to="/contacts">
              Contacts
            </Link>
          </div>
          <div className="Footer-Box2-Div">
            <p className="Footer-Box-text3">Other's Link</p>
            <Link className="Footer-Box-Link" to="/blog">
              Blog
            </Link>
            <Link className="Footer-Box-Link" to="/tos">
              Terms of Service
            </Link>
            <Link className="Footer-Box-Link" to="/policy">
              Privacy Policy
            </Link>
            <Link className="Footer-Box-Link" to="/faq">
              FAQ
            </Link>
          </div>
        </div>

        <div className="Footer-Box3">
          <p className="Footer-Box-text7">Question:</p>
          <input placeholder="Email:" className="Footer-Box3-Input"/>
          <input placeholder="Text:" className="Footer-Box3-Input"/>
          <button className="Footer-Box3-Button">Sent</button>
        </div>

      </div>

      <div className="Footer-div">
        <p className="Footer-Box-text5">
          Copyright &copy; {new Date().getFullYear()} CinemarooBD
          <br />
          All rights reserved.
        </p>

        <p className="Footer-Box-text6">
          Powered by CinemarooBD.
          <br />
          <button onClick={showDrawer} className="Footer-div-Button">
            Get FeedBack
          </button>
        </p>
      </div>

      <Drawer
        title="Feedback Form"
        placement="bottom"
        width={500}
        height={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button
              onClick={onClose}
              style={{ borderColor: "#fb6565", color: "#0493a9" }}
            >
              Cancel
            </Button>
          </Space>
        }
      >
        <div className="footer-Drawer">
          <div className="footer-Drawer-Box">
            <div className="footer-Drawer-TextDiv">
              <p className="footer-Drawer-Text">Name:</p>
              <p className="footer-Drawer-Text2">*</p>
            </div>
            <Input
              placeholder="Your Name"
              allowClear
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="footer-Drawer-Input"
            />
            <p className="footer-Drawer-Text">Email:</p>
            <Input
              placeholder="Your Email Id"
              allowClear
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="footer-Drawer-Input"
            />
            <div className="footer-Drawer-TextDiv">
              <p className="footer-Drawer-Text">Message:</p>
              <p className="footer-Drawer-Text2">*</p>
            </div>

            <TextArea
              allowClear
              showCount
              maxLength={500}
              name="text"
              value={formData.text}
              onChange={handleInputChange}
              placeholder="Your FeedBack"
              style={{
                height: 120,
                resize: "none",
              }}
              className="footer-Drawer-TextArea"
            />
            <div className="footer-Drawer-ButtonDiv">
              <Button
                className="footer-Drawer-Button"
                onClick={handleReset}
                danger
              >
                Reset
              </Button>
              <Button
                className="footer-Drawer-Button2"
                onClick={handleSend}
                type="primary"
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="footer-Drawer-Box2">
            <img className="footer-Drawer-Img" alt="" src={Img1} />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
