import React from "react";
import "./Sidebar.css";
import Collection from "./Collection";
import StoreInfo from "./StoreInfo";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="collection">
        <Collection />
      </div>
      <img src="/src/assets/ecommerce/img-sidebar.png" alt="sidebar" />
      <div className="storeInfo">
        <StoreInfo />
      </div>
    </div>
  );
}
