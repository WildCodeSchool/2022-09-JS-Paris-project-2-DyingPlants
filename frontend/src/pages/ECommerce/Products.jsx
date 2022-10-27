import React from "react";
import Product from "./Product";
import CurrentProduct from "./CurrentProduct";
import "./Products.css";

export default function Products() {
  const rings = [
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
        <h3 className= "titleProduct">Rings</h3>
        <div className="productListItem">
        {rings.map((i) => {
          return <Product pic={i.picture} title={i.title} price={i.price} />;
        })}
        </div>
      </div>
      <div className="productList">
        <h3 className= "titleProduct">Bracelets</h3>
        <div className="productListItem">
        {rings.map((i) => {
          return <Product pic={i.picture} title={i.title} price={i.price} />;
        })}
        </div>
      </div>
      <div className="productList">
        <h3 className= "titleProduct">Necklace</h3>
        <div className="productListItem">
        {rings.map((i) => {
          return <Product pic={i.picture} title={i.title} price={i.price} />;
        })}
        </div>
        
      </div>
      <p>See more </p>
    </div>
  );
}
