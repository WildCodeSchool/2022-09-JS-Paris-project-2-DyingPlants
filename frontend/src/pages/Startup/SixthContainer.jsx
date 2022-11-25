import "./Startup.css";
import { HiArrowRight } from "react-icons/hi";

export default function SixthContainer({ colors }) {
  const { background1, background2, background3, background4, font1, font2 } =
    colors;
  return (
    <div
      id="sixthContainer"
      style={{ backgroundColor: background2, color: font2 }}
    >
      <h2>Une question ? Nous sommes là pour vous.</h2>
      <p className="mediumOpac">
        Nos conseillers sont disponible sur le tchat ou par mail de 8h à 21h en
        semaine et de 9h à 20h le week-end pour répondre à toutes vos questions.
        Et en moyenne, ils répondent en moins de 2 minutes.
      </p>
      <div id="conseillerDivContainer">
        <div className="conseillerDiv" style={{ backgroundColor: background4 }}>
          <div className="conseillerImgContainer one" />
          <p className="conseillerName">Arthur</p>
          <p className="mediumOpac small">Service client</p>
          <p className="mediumOpac small">Madrid, Spain</p>
        </div>
        <div className="conseillerDiv" style={{ backgroundColor: background4 }}>
          <div className="conseillerImgContainer two" />
          <p className="conseillerName">Miriam</p>
          <p className="mediumOpac small">Service client</p>
          <p className="mediumOpac small">Paris, France</p>
        </div>
        <div className="conseillerDiv" style={{ backgroundColor: background4 }}>
          <div className="conseillerImgContainer three" />
          <p className="conseillerName">Hughes</p>
          <p className="mediumOpac small">Service client</p>
          <p className="mediumOpac small">Madrid, Spain</p>
        </div>
        <div className="conseillerDiv" style={{ backgroundColor: background4 }}>
          <div className="conseillerImgContainer four" />
          <p className="conseillerName">Luisa</p>
          <p className="mediumOpac small">Service client</p>
          <p className="mediumOpac small">Paris, France</p>
        </div>
      </div>
      <button
        type="button"
        id="obtainPriceButton"
        style={{ color: background1, backgroundColor: "transparent" }}
        className="navButton arrowButton"
      >
        <HiArrowRight size="1.4rem" /* style={{maxHeight: "230px"}} */ />
        J'ai une question
      </button>
    </div>
  );
}
