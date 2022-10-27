import shop from "../../assets/imgPageResto/cadi.png";
import burgerMenu from "../../assets/imgPageResto/burgerMenu.png";
import imgResto1 from "../../assets/imgPageResto/imgResto1.jpg";
import plat1 from "../../assets/imgPageResto/plat1.jpg";
import plat2 from "../../assets/imgPageResto/plat2.jpg";
import plat3 from "../../assets/imgPageResto/plat3.jpg";
import plat4 from "../../assets/imgPageResto/plat4.jpg";
import imgFooter from "../../assets/imgPageResto/imgFooter.jpg";
import imgSection3 from "../../assets/imgPageResto/imgPrez.jpg";

import "./Restaurant.css";

export default function Restaurant() {
  return (
    <div id="page">
      <header className="restoHeader">
        <div id="topBar">
          <p>
            Logo <br />
            Name
          </p>
          <img src={burgerMenu} alt="burger menu" id="burgerMenu" />
          {/* <nav id="navBar">
            <ul id="navUl">
              <li className="linkNav">Home</li>
              <li className="linkNav">Lorem</li>
               <li className="linkNav">Ipsum</li>
              <li className="linkNav">Dolor</li>
  <li className="linkNav">Sitamet</li> 
            </ul>
          </nav> */}
          <button type="button" id="buttonAdd">
            <img src={shop} alt="logo du site" id="imgShop" />
          </button>
        </div>
      </header>
      <main className="restoMain">
        <section className="restoSection1">
          <img src={imgResto1} alt="item" id="mainPicture" />
          <h2>
            Lorem, ipsum <br />
            dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            blandit odio non ultricies fermentum. Cras suscipit semper blandit.
            Interdum et malesuada fames ac ante.
          </p>
          <button type="button">Place an Order</button>
        </section>
        <section className="restoSection2">
          <div id="topElements">
            <h3>Lorem Ipsum Dolor</h3>
            <div id="buttonElement">
              <button type="button" className="buttonSec2-1">
                Products
              </button>
              <button type="button" className="buttonSec2">
                Sides
              </button>
              <button type="button" className="buttonSec2">
                Drinks
              </button>
            </div>
          </div>

          <div className="itemBlock">
            <img src={plat1} alt="item" className="itemPicture" />
            <div className="itemDetails">
              <div className="textTop">
                <h6>Item</h6>
                <p>$ 00.00 USD</p>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <input type="number" className="input" />
              <button type="button" className="buttonAdd">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="itemBlock">
            <img src={plat2} alt="item" className="itemPicture" />
            <div className="itemDetails">
              <div className="textTop">
                <h6>Item</h6>
                <p>$ 00.00 USD</p>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <input type="number" className="input" />
              <button type="button" className="buttonAdd">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="itemBlock">
            <img src={plat3} alt="item" className="itemPicture" />
            <div className="itemDetails">
              <div className="textTop">
                <h6>Item</h6>
                <p>$ 00.00 USD</p>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <input type="number" className="input" />
              <button type="button" className="buttonAdd">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="itemBlock">
            <img src={plat4} alt="item" className="itemPicture" />
            <div className="itemDetails">
              <div className="textTop">
                <h6>Item</h6>
                <p>$ 00.00 USD</p>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <input type="number" className="input" />
              <button type="button" className="buttonAdd">
                Add To Cart
              </button>
            </div>
          </div>

          <button type="button" id="buttonSeeFull">
            See Full Menu
          </button>
        </section>
        <section className="restoSection3">
          <img src={imgSection3} alt="" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            praesentium fugiat quod temporibus ratione modi tempore dolorum
            sequi? Harum, praesentium.
          </p>
          <button type="button">See Our FAQ</button>
        </section>
      </main>
      <footer id="restoFooter">
        <img src={imgFooter} alt="" />
        <h3>Thank you for using our app.</h3>
      </footer>
    </div>
  );
}
