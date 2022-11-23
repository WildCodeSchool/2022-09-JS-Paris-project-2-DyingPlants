import "./Startup.css";

import { IoMdClose } from "react-icons/io";

export default function ThirdContainer({ colors }) {
  const { background1, background2, background3, font1, font2 } = colors;
  return (
    <div
      id="#thirdContainer"
      style={{ backgroundColor: background3, color: font1 }}
    >
      <div id="thirdContainerInnerDiv">
        <div>
          <h2>Nos engagements</h2>
          <p className="opac75">
            Chez Luko, nous travaillons chaque jour afin de proposer un meilleur
            modèle et service d'assurance,qui soit vraiment du côté des assurés.
          </p>
          <p className="mediumOpac mt">
            Luko respecte des normes sociales et environnementales élevées et
            s'engage à continuer de progresser.
          </p>
        </div>
        <div id="engagementsDiv">
          <div className="engagement" style={{ borderColor: background1 }}>
            <h3>Un prix juste</h3> <IoMdClose size="2rem" />
          </div>
          <p className="mt">
            Votre assurance augmente chaque année et vous ne savez pas pourquoi
            ? Chez Luko, nous nous engageons à construire une politique plus
            équitable et proposer le meilleur rapport qualité et prix, sur la
            durée.
          </p>
          <div className="engagement" style={{ borderColor: background1 }}>
            <h3>Un modèle transparent</h3>{" "}
            <IoMdClose size="2rem" style={{ transform: "rotate(45deg)" }} />
          </div>
          <div className="engagement" style={{ borderColor: background1 }}>
            <h3>Un service 5 étoiles</h3>{" "}
            <IoMdClose size="2rem" style={{ transform: "rotate(45deg)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
