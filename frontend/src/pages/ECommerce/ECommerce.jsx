import React from "react";
import "./ECommerce.css";
import Product from "./Product";

export default function ECommerce() {
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
    <div className="ecommerce">
       <div className="header">
         <ul>
           <li>Home</li>
           <li>Shop</li>
           <li>Blog</li>
           </ul>
        </div>
        <div className="content">
          <div className="banner">
            <div className="bannerContainer">
              <div className="bannerImg">
              <h1>Name of your site</h1>
              </div>
            </div>
          </div>
          <div className="sidebarProducts">
            <div className="sidebar">
              <div className="collection">
                <div className="collectionContainer">
                  <h2 className="title_collection">COLLECTIONS</h2>
                  <p>Collection printemps</p>
                  <p>Collection été</p>
                  <p>Collection automne</p>
                  <p>Collection hiver</p>
                </div>
              </div>
              <img src="/src/assets/ecommerce/img-sidebar.png" alt="sidebar" />
              <div className="storeInfo">
                <div className="storeInfoContainer">
                  <h2 className="title_store_info">INFOS BOUTIQUE</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore error tempora autem nam molestias quasi ducimus voluptates, beatae obcaecati eum expedita vero praesentium totam non ipsa soluta deserunt? Cupiditate, facilis!
                  </p>
                </div>
              </div>
            </div>
            <div className="products">
              <div className="currentProduct">
                <div className="currentProductImg">
                </div>
              </div>
              <div className="productList">
                <h3 className="titleProduct">Rings</h3>
                <div className="productListItem">
                  {rings.map((i) => {return <Product pic={i.picture} title={i.title} price={i.price} />;})}
                </div>
                </div>
              <div className="productList">
                <h3 className="titleProduct">Bracelets</h3>
                <div className="productListItem">
                  {rings.map((i) => {return <Product pic={i.picture} title={i.title} price={i.price} />;})}
                </div>
              </div>
              <div className="productList">
                <h3 className="titleProduct">Necklace</h3>
                <div className="productListItem">
                  {rings.map((i) => {return <Product pic={i.picture} title={i.title} price={i.price} />;})}
                </div>
              </div>
            </div>
            </div>
            <div className="footer">
              <ul>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Autre</li>
                </ul>
            </div>
      </div>
    </div>
  );
}
