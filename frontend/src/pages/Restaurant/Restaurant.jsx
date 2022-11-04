import { useState } from "react";
import axios from "axios";
import burgerMenu from "../../assets/imgPageResto/burgerMenu.png";
import shop from "../../assets/imgPageResto/cadi.png";
import imgFooter from "../../assets/imgPageResto/imgFooter.jpg";
import imgSection3 from "../../assets/imgPageResto/imgPrez.jpg";
import imgResto1 from "../../assets/imgPageResto/imgResto1.jpg";
import imgDesk from "../../assets/imgPageResto/imgRestoDesk.jpg";
import plat1 from "../../assets/imgPageResto/plat1.jpg";
import plat2 from "../../assets/imgPageResto/plat2.jpg";
import plat3 from "../../assets/imgPageResto/plat3.jpg";
import plat4 from "../../assets/imgPageResto/plat4.jpg";

import "./Restaurant.css";
/* import Palette from Palette; */

export default function Restaurant() {
  const [darkColor, setDarkColor] = useState("rgb(44, 44, 44)");
  const [primaryColor, setPrimaryColor] = useState("rgb(148, 148, 148)");
  const [backPageColor, setBackPageColor] = useState("rgb(230, 230, 230)");
  const [backColor, setBackColor] = useState("white");
  const [whatColor, setWhatColor] = useState("rgb(55, 55, 55)");

  const options = {
    method: "GET",
    url: "https://random-palette-generator.p.rapidapi.com/palette/Shades/1/5",
    headers: {
      "X-RapidAPI-Key": "f6b8a1ebfamsh0541ebd7a0ace36p1b5919jsnc2c6a020858d",
      "X-RapidAPI-Host": "random-palette-generator.p.rapidapi.com",
    },
  };

  let colors;

  const fetchColors = async () => {
    const test = await axios
      .request(options)
      .then(function y(response) {
        colors = response.data.data[0].palette;
      })
      .catch(function (error) {
        console.error(error);
      });
    test();

    setDarkColor(colors[0]);
    setPrimaryColor(colors[1]);
    setBackPageColor(colors[2]);
    setBackColor(colors[3]);
    setWhatColor(colors[4]);
  };

  return (
    <div style={{ backgroundColor: backPageColor }} id="page">
      <header className="restoHeader">
        <div id="topBar" style={{ backgroundColor: backColor }}>
          <p style={{ color: darkColor, borderColor: darkColor }}>
            Logo <br />
            Name
          </p>
          <nav id="navBar">
            <ul style={{ color: darkColor }} id="navUl">
              <li className="linkNav">Home</li>
              <li className="linkNav">Menu</li>
              <li className="linkNav">Order</li>
              <li className="linkNav">FAQ</li>
              <li className="linkNav">Contact Us</li>
            </ul>
            <img src={burgerMenu} alt="burger menu" id="burgerMenu" />
          </nav>

          <button
            onClick={fetchColors}
            style={{ backgroundColor: primaryColor }}
            type="button"
            id="buttonAdd"
          >
            <img src={shop} alt="logo du site" id="imgShop" />
          </button>
        </div>
      </header>
      <main className="restoMain">
        <section
          style={{ backgroundColor: backColor }}
          className="restoSection1"
        >
          <img src={imgResto1} alt="item food" id="mainPicture" />
          <img src={imgDesk} alt="item food" id="mainPicDesk" />
          <h2 style={{ color: darkColor }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p style={{ color: whatColor }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            blandit odio non ultricies fermentum. Cras suscipit semper blandit.
            Interdum et malesuada fames ac ante.
          </p>
          <button
            style={{ backgroundColor: primaryColor, color: darkColor }}
            type="button"
          >
            Place an Order
          </button>
        </section>
        <section className="restoSection2">
          <div id="topElements">
            <h3 style={{ color: darkColor }}>Lorem Ipsum Dolor</h3>
            <div id="buttonElement">
              <button
                style={{ backgroundColor: primaryColor, color: darkColor }}
                type="button"
                className="buttonSec2-1"
              >
                Products
              </button>
              <button
                style={{ backgroundColor: backColor, color: darkColor }}
                type="button"
                className="buttonSec2"
              >
                Sides
              </button>
              <button
                style={{ backgroundColor: backColor, color: darkColor }}
                type="button"
                className="buttonSec2"
              >
                Drinks
              </button>
            </div>
          </div>
          <div id="allItems">
            <div style={{ backgroundColor: backColor }} className="itemBlock">
              <img src={plat1} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ color: darkColor }}>Item</h6>
                  <p style={{ color: whatColor }}>$ 00.00 USD</p>
                </div>
                <p style={{ color: whatColor }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor, color: darkColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: backColor }} className="itemBlock">
              <img src={plat2} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ color: darkColor }}>Item</h6>
                  <p style={{ color: whatColor }}>$ 00.00 USD</p>
                </div>
                <p style={{ color: whatColor }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor, color: darkColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: backColor }} className="itemBlock">
              <img src={plat3} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ color: darkColor }}>Item</h6>
                  <p style={{ color: whatColor }}>$ 00.00 USD</p>
                </div>
                <p style={{ color: whatColor }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor, color: darkColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: backColor }} className="itemBlock">
              <img src={plat1} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ color: darkColor }}>Item</h6>
                  <p style={{ color: whatColor }}>$ 00.00 USD</p>
                </div>
                <p style={{ color: whatColor }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor, color: darkColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: backColor }} className="itemBlock">
              <img src={plat2} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ color: darkColor }}>Item</h6>
                  <p style={{ color: whatColor }}>$ 00.00 USD</p>
                </div>
                <p style={{ color: whatColor }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor, color: darkColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: backColor }} className="itemBlock">
              <img src={plat3} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ color: darkColor }}>Item</h6>
                  <p style={{ color: whatColor }}>$ 00.00 USD</p>
                </div>
                <p style={{ color: whatColor }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor, color: darkColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: backColor }} className="itemBlock">
              <img src={plat4} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ color: darkColor }}>Item</h6>
                  <p style={{ color: whatColor }}>$ 00.00 USD</p>
                </div>
                <p style={{ color: whatColor }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor, color: darkColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: backColor }} className="itemBlock">
              <img src={plat4} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ color: darkColor }}>Item</h6>
                  <p style={{ color: whatColor }}>$ 00.00 USD</p>
                </div>
                <p style={{ color: whatColor }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor, color: darkColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: backColor }} className="itemBlock">
              <img src={plat4} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ color: darkColor }}>Item</h6>
                  <p style={{ color: whatColor }}>$ 00.00 USD</p>
                </div>
                <p style={{ color: whatColor }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor, color: darkColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <button
            style={{ backgroundColor: primaryColor, color: darkColor }}
            type="button"
            id="buttonSeeFull"
          >
            See Full Menu
          </button>
        </section>
        <section
          style={{ backgroundColor: backColor }}
          className="restoSection3"
        >
          <img src={imgSection3} alt="" />
          <div id="textSection3">
            <h3 style={{ color: darkColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p style={{ color: whatColor }}>
              Lorem ipsum dolor sit amet connpmsectetur adipisicing elit.
              Repellat praesentium fugiat quod temporibus ratione modi tempore
              dolorum sequi? Harum, praesentium.
            </p>
            <button
              style={{ backgroundColor: primaryColor, color: darkColor }}
              type="button"
            >
              See Our FAQ
            </button>
          </div>
        </section>
      </main>
      <footer style={{ backgroundColor: primaryColor }} id="restoFooter">
        <img src={imgFooter} alt="" id="firstFootPic" />
        <h3 style={{ color: darkColor }}>Thank you for using our app.</h3>
        <img src={imgFooter} alt="" id="secFootPic" />
      </footer>
    </div>
  );
}
