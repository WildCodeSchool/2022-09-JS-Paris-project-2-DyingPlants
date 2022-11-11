import React, { useState } from "react";
import "./ECommerce.css";
import axios from "axios";
import PaletteTop from "../../components/PaletteTop";
import Content from "./EcommerceContent";
import EcommerceHeader from "./EcommerceHeader";
import Footer from "./EcommerceFooter";
import Palette from "../../components/palette/Palette";

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
      <EcommerceHeader
        colorUl={navbarFooter}
        colorIl={whatColor}
        fetchColors={fetchColorsEcommerce}
      />
      <Content
        colorNavbarFooter={navbarFooter}
        array={rings}
        color={backPageColor}
        typoColor={whatColor}
      />
      <Footer colorUl={navbarFooter} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {" "}
        <Palette
          labelAndColorArray={[
            ["navbarFooter", navbarFooter, setDarkColor],
            ["primaryColor", primaryColor, setPrimaryColor],
            ["backPageColor", backPageColor, setBackPageColor],
            ["backColor", backColor, setBackColor],
            ["whatColor", whatColor, setWhatColor],
          ]}
        />
      </div>
    </div>
  );
}
