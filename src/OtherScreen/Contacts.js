import React, { useState } from "react";
import "./Contacts.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { notification } from "antd";

export default function Contacts() {
  const [api, contextHolder] = notification.useNotification();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [other, setOther] = useState("");
  const [loading, setLoading] = useState(false);

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        openNotificationWithIcon(
          "success",
          "Success",
          "Your message has been sent successfully."
        );
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setOther("");
      }, 1000);
    } else {
      openNotificationWithIcon(
        "warning",
        "Warning",
        "Please fill in all required fields."
      );
    }
  };

  return (
    <div className="body">
      {contextHolder}
      <Header />
      <div className="box">
        <div className="Contacts-Body">
          <h1 className="Contacts-Title">Contact Us</h1>
          <div className="Contacts-Info">
            <p className="Contacts-Text">Email: cinemaroobd@gmail.com</p>
            <p className="Contacts-Text">Phone: +1234567890</p>
            <p className="Contacts-Text">Address: 123 Street, City, Country</p>
          </div>
          <div className="Contacts-Form">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                placeholder="Message*"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input
                type="text"
                placeholder="Other's"
                value={other}
                onChange={(e) => setOther(e.target.value)}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
