import { HiArrowRight } from "react-icons/hi";
import "./Startup.css";

export default function FourthContainer({ colors }) {
  const { background1, background2, background3, font1, font2 } = colors;
  return (
    <div
      id="fourthContainer"
      style={{ backgroundColor: background2, color: font2 }}
    >
      <div id="fourthContainerInnerDiv">
        <div id="piggyContainer" style={{ backgroundColor: background1 }} />
        <div id="moneyGoesW">
          <h3>Vous voulez savoir où va votre argent ?</h3>
          <p className="mediumOpac">
            <span className="bold">
              L’assurance traditionnelle est bâtie sur un conflit d’intérêt :
            </span>{" "}
            moins vous êtes remboursé, plus l’assureur gagne de l’argent. Nous
            avons donc décidé d'y mettre fin, en adoptant un modèle transparent
            et vertueux : le Giveback.
          </p>
          <div className="moneyGoesDetail" style={{ borderColor: background1 }}>
            <p className="bold">
              30% de votre cotisation est dédié aux frais de gestion de Luko
            </p>
            <p className="opac75">
              Service client, gestion de sinistre, innovation, etc.
            </p>
          </div>
          <div className="moneyGoesDetail" style={{ borderColor: background1 }}>
            <p className="bold">
              70% de votre cotisation est placé dans le pot commun pour tous les
              assurés.
            </p>
            <p className="opac75">
              Si vous avez un sinistre, cet argent sert à vous rembourser.
            </p>
          </div>
          <div className="moneyGoesDetail" style={{ borderColor: background1 }}>
            <p className="bold">
              S'il reste de l'argent en fin d'année, il est reversé à
              l'association de votre choix.
            </p>
            <p className="opac75">Il ne vient pas accroitre nos profits.</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        id="obtainPriceButton"
        style={{ color: background1, backgroundColor: "transparent" }}
        className="navButton arrowButton"
      >
        <HiArrowRight size="1.4rem" />
        Obtenir mon prix
      </button>
    </div>
  );
}
