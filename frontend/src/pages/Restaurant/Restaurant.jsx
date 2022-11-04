import shop from "../../assets/imgPageResto/cadi.png";
import burgerMenu from "../../assets/imgPageResto/burgerMenu.png";
import imgResto1 from "../../assets/imgPageResto/imgResto1.jpg";
import imgDesk from "../../assets/imgPageResto/imgRestoDesk.jpg";
import plat1 from "../../assets/imgPageResto/plat1.jpg";
import plat2 from "../../assets/imgPageResto/plat2.jpg";
import plat3 from "../../assets/imgPageResto/plat3.jpg";
import plat4 from "../../assets/imgPageResto/plat4.jpg";
import imgFooter from "../../assets/imgPageResto/imgFooter.jpg";
import imgSection3 from "../../assets/imgPageResto/imgPrez.jpg";
import "./Restaurant.css";

export default function Restaurant() {
  const darkColor = "rgb(44, 44, 44)";
  const primaryColor = "rgb(148, 148, 148)";
  const backColor = "white";

  return (
    <div id="page">
      <header className="restoHeader">
        <div id="topBar">
          <p style={{ backgroundColor: darkColor }}>
            Logo <br />
            Name
          </p>
          <nav id="navBar">
            <ul style={{ backgroundColor: darkColor }} id="navUl">
              <li className="linkNav">Home</li>
              <li className="linkNav">Menu</li>
              <li className="linkNav">Order</li>
              <li className="linkNav">FAQ</li>
              <li className="linkNav">Contact Us</li>
            </ul>
            <img src={burgerMenu} alt="burger menu" id="burgerMenu" />
          </nav>
          <button
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
          <h2 style={{ backgroundColor: darkColor }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            blandit odio non ultricies fermentum. Cras suscipit semper blandit.
            Interdum et malesuada fames ac ante.
          </p>
          <button style={{ backgroundColor: primaryColor }} type="button">
            Place an Order
          </button>
        </section>
        <section className="restoSection2">
          <div id="topElements">
            <h3 style={{ backgroundColor: darkColor }}>Lorem Ipsum Dolor</h3>
            <div id="buttonElement">
              <button
                style={{ backgroundColor: primaryColor }}
                type="button"
                className="buttonSec2-1"
              >
                Products
              </button>
              <button
                style={{ backgroundColor: backColor }}
                type="button"
                className="buttonSec2"
              >
                Sides
              </button>
              <button
                style={{ backgroundColor: backColor }}
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
                  <h6 style={{ backgroundColor: darkColor }}>Item</h6>
                  <p>$ 00.00 USD</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="itemBlock">
              <img src={plat2} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ backgroundColor: darkColor }}>Item</h6>
                  <p>$ 00.00 USD</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="itemBlock">
              <img src={plat3} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ backgroundColor: darkColor }}>Item</h6>
                  <p>$ 00.00 USD</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="itemBlock">
              <img src={plat1} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ backgroundColor: darkColor }}>Item</h6>
                  <p>$ 00.00 USD</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="itemBlock">
              <img src={plat2} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ backgroundColor: darkColor }}>Item</h6>
                  <p>$ 00.00 USD</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="itemBlock">
              <img src={plat3} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ backgroundColor: darkColor }}>Item</h6>
                  <p>$ 00.00 USD</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="itemBlock">
              <img src={plat4} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ backgroundColor: darkColor }}>Item</h6>
                  <p>$ 00.00 USD</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="itemBlock">
              <img src={plat4} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ backgroundColor: darkColor }}>Item</h6>
                  <p>$ 00.00 USD</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="itemBlock">
              <img src={plat4} alt="item" className="itemPicture" />
              <div className="itemDetails">
                <div className="textTop">
                  <h6 style={{ backgroundColor: darkColor }}>Item</h6>
                  <p>$ 00.00 USD</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <input type="number" className="input" />
                <button
                  style={{ backgroundColor: primaryColor }}
                  type="button"
                  className="buttonAdd"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <button
            style={{ backgroundColor: primaryColor }}
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
            <h3 style={{ backgroundColor: darkColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p>
              Lorem ipsum dolor sit amet connpmsectetur adipisicing elit.
              Repellat praesentium fugiat quod temporibus ratione modi tempore
              dolorum sequi? Harum, praesentium.
            </p>
            <button style={{ backgroundColor: primaryColor }} type="button">
              See Our FAQ
            </button>
          </div>
        </section>
      </main>
      <footer style={{ backgroundColor: primaryColor }} id="restoFooter">
        <img src={imgFooter} alt="" id="firstFootPic" />
        <h3 style={{ backgroundColor: darkColor }}>
          Thank you for using our app.
        </h3>
        <img src={imgFooter} alt="" id="secFootPic" />
      </footer>
    </div>
  );
}
