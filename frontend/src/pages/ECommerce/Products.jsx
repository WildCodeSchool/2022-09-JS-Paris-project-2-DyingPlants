import React from "react";
import Product from "./Product";
import CurrentProduct from "./CurrentProduct";
import "./Products.css";

export default function Products() {
  const products = [
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
    {
      picture: "/src/assets/ecommerce/ring_1.png",
      title: "Product",
      price: 300,
    },
  ];
  return (
    <div className="products">
      <CurrentProduct />
      <div className="productList">
        {products.map((i) => {
          return <Product pic={i.picture} title={i.title} price={i.price} />;
        })}
      </div>
      <p>See more </p>
    </div>
  );
}
