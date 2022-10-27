import React from "react";
import "./Content.css";
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import Products from "./Products";
import Footer from "./Footer"

export default function Content() {
  return (
    <div className="content">
      <div>
        <Banner />
      </div>
      <div className="sidebarProducts">
        <Sidebar />
        <Products />
      </div>
      <Footer />
    </div>
  );
}
