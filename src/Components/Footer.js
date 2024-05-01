import React, { useState } from "react";
import "./Footer.css";

import {
  Button,
  Dropdown,
  Tooltip,
  Drawer,
  Space,
  Input,
  notification,
} from "antd";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  HomeOutlined,
  AppstoreOutlined,
  ContactsOutlined,
  MacCommandOutlined,
  DesktopOutlined,
  CustomerServiceOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import img from "../Img/Feedback-removebg-preview.png";

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
      <div className="Footer-Box">box</div>
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
              style={{ borderColor: "#fb6565", color: "red" }}
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
            <img className="footer-Drawer-Img" alt="" src={img} />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
