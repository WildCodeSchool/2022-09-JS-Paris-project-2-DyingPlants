import React from "react";
import "./Content.css";
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import Products from "./Products";

export default function Content() {
    return (
        <div>
            <Banner />
            <Sidebar />
            <Products />
        </div>);
}