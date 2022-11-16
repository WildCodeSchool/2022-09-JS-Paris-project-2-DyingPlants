import { HiArrowRight } from "react-icons/hi";
import computerSet from "../../assets/startup/computerSet.png";
import "./Startup.css";

export default function SecondContainer({ colors }) {
  const { background1, background2, background3, font1, font2 } = colors;
  return (
    <div id="secondContainer">
      <div id="secondContainerInnerDiv">
        <div id="computerImgContainer">
          <img src={computerSet} alt="" />
        </div>
        <div id="secondContainerTextContainer">
          <h2>Vous êtes entre de bonnes mains.</h2>
          <div>
            <h3> 2 minutes, top chrono</h3>
            <p>
              Des contrats clairs et personnalisables pour assurer ce qui compte
              pour vous en quelques clics
            </p>
          </div>
          <div>
            <h3>7 jours sur 7</h3>
            <p>
              Toujours à vos côtés : des équipes vous répondent tous les jours
              (même dimanche) en moins de 100 secondes
            </p>
          </div>
          <div>
            <h3>2x plus rapide</h3>
            <p>
              Un pépin chez vous ? Vous êtes remboursé avant même d'avoir dit
              "ouf"
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        style={{ color: background1 }}
        className="navButton "
      >
        <HiArrowRight size="1.4rem" /* style={{maxHeight: "230px"}} */ />
        Mon devis en 2 minutes
      </button>
    </div>
  );
}
