import React from "react";
import Product from "./Product";``
import CurrentProduct from "./CurrentProduct";
import "./Products.css";

export default function Products() {
    const products = [
        {
          picture: "pic",
          title: "Product",
          price: 300
        },
         {
          picture: "pic",
          title: "Product",
          price: 300
        },
         {
          picture: "pic",
          title: "Product",
          price: 300
        },
         {
          picture: "pic",
          title: "Product",
          price: 300
        },
         {
          picture: "pic",
          title: "Product",
          price: 300
        }
        ]
    return (
        <div>
            <CurrentProduct />
            <Product />
            <Product />
        </div>);
}