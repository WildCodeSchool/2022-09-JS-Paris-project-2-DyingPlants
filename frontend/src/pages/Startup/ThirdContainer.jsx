import React from "react";
import "./Startup.css";

export default function ThirdContainer({ colors }) {
  const { background1, background2, background3, font1, font2 } = colors;
  return (
    <div style={{ backgroundColor: background3 }} className="thirdContainer">
      <div className="underThird">
        <h3>Nos engagements</h3>
        <p>
          Chez Luko, nous travaillons chaque jour afin de proposer un meilleur
          modèle et service d'assurance,qui soit vraiment du côté des assurés.
        </p>
      </div>
    </div>
  );
}
