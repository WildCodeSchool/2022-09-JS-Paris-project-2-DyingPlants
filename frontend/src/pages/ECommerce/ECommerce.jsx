import React, { useState } from "react";
import "./ECommerce.css";
import axios from "axios";
import PaletteTop from "../../components/PaletteTop";
import ProductList from "./ProductList";

export default function ECommerce() {
  const [navbarFooter, setDarkColor] = useState("rgb(44, 44, 44)");
  const [primaryColor, setPrimaryColor] = useState("rgb(148, 148, 148)");
  const [backPageColor, setBackPageColor] = useState("rgb(230, 230, 230)");
  const [backColor, setBackColor] = useState("white");
  const [whatColor, setWhatColor] = useState("whitesmoke");

  const options = {
    method: "GET",
    url: "https://random-palette-generator.p.rapidapi.com/palette/Shades/1/5",
    headers: {
      "X-RapidAPI-Key": "f6b8a1ebfamsh0541ebd7a0ace36p1b5919jsnc2c6a020858d",
      "X-RapidAPI-Host": "random-palette-generator.p.rapidapi.com",
    },
  };

  let colors;

  const fetchColorsEcommerce = async () => {
    await axios
      .request(options)
      .then(function y(response) {
        colors = response.data.data[0].palette;
      })
      .catch(function (error) {
        console.error(error);
      });

    setDarkColor(colors[0]);
    setPrimaryColor(colors[1]);
    setBackPageColor(colors[2]);
    setBackColor(colors[3]);
    setWhatColor(colors[4]);
  };

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
        <ul
          style={{ backgroundColor: navbarFooter }}
          className="navBarEcommerce"
        >
          <li style={{ color: whatColor }}>Home</li>
          <li style={{ color: whatColor }}>Shop</li>
          <li style={{ color: whatColor }}>Blog</li>
          <button type="button" onClick={fetchColorsEcommerce}>
            Change colors
          </button>
        </ul>
      </div>
      <div className="content">
        <div className="banner">
          <div className="bannerContainer">
            <div className="bannerImg">
              <h1
                style={{
                  color: navbarFooter,
                  border: `0.3rem solid ${navbarFooter}`,
                }}
              >
                Name of your site
              </h1>
            </div>
          </div>
        </div>

        <div className="sidebarProducts">
          <div className="sidebar">
            <div
              className="collection"
              style={{ border: `2px solid ${navbarFooter}` }}
            >
              <div className="collectionContainer">
                <h2
                  className="title_collection"
                  style={{ backgroundColor: navbarFooter }}
                >
                  COLLECTIONS
                </h2>
                <p>Collection printemps</p>
                <p>Collection été</p>
                <p>Collection automne</p>
                <p>Collection hiver</p>
              </div>
            </div>
            <img src="/src/assets/ecommerce/img-sidebar.png" alt="sidebar" />
            <div
              style={{ border: `2px solid ${navbarFooter}` }}
              className="storeInfo"
            >
              <div className="storeInfoContainer">
                <h2 className="title_store_info">INFOS BOUTIQUE</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore error tempora autem nam molestias quasi ducimus
                  voluptates, beatae obcaecati eum expedita vero praesentium
                  totam non ipsa soluta deserunt? Cupiditate, facilis!
                </p>
              </div>
            </div>
          </div>
          <div className="products">
            <div className="currentProduct">
              <div className="currentProductImg" />
            </div>
            <ProductList
              array={rings}
              color={backPageColor}
              typoColor={whatColor}
            />
            <ProductList
              array={rings}
              color={backPageColor}
              typoColor={whatColor}
            />
            <ProductList
              array={rings}
              color={backPageColor}
              typoColor={whatColor}
            />
          </div>
        </div>
        <div className="footer">
          <ul
            style={{ backgroundColor: navbarFooter }}
            className="navBarEcommerce"
          >
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Autre</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {" "}
        <PaletteTop
          darkColor={navbarFooter}
          primaryColor={primaryColor}
          backPageColor={backPageColor}
          backColor={backColor}
          whatColor={whatColor}
        />
      </div>
    </div>
  );
}
