import React from "react";
import "./Blog.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Blog() {
  return (
    <div className="body">
      <Header />
      <div className="box">
        Blog
        <Footer />
      </div>
    </div>
  );
}
