import React from "react";
import "./Contacts.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { notification } from 'antd';

export default function Contacts() {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
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
            <form>
              <input type="text" placeholder="Name*" />
              <input type="email" placeholder="Email*" />
              <input type="phone" placeholder="Phone" />
              <textarea placeholder="Message*"></textarea>
              <input type="text" placeholder="Other's" />
              <button type="submit" onClick={() => openNotificationWithIcon('success')}>Send</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
