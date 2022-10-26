import React from "react";
import "./Content.css";
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import Product from "./Product";

export default function Content() {
    return (
        <div>
            <Banner />
            <Sidebar />
            <Product />
        </div>);
}