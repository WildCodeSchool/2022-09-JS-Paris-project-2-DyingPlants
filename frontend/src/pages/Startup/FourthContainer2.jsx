import React from "react";
import "./Startup.css";
import Button from "./Button";

export default function FourthContainer2() {
  return (
    <div className="fourthContainer">
      <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
        <h3>30% de votre cotisation est dédié aux frais de gestion de Luko</h3>
        <p>Service client, gestion de sinistre, innovation, etc.</p>
      </div>
      <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
        <h3>
          70% de votre cotisation est placé dans le pot commun pour tous les
          assurés.
        </h3>
        <p>Si vous avez un sinistre, cet argent sert à vous rembourser.</p>
      </div>
      <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
        <h3>
          S'il reste de l'argent en fin d'année, il est reversé à l'association
          de votre choix.
        </h3>
        <p>Il ne vient pas accroitre nos profits.</p>
      </div>

      <div className="prix">
        <Button text="Obtenir mon prix" />
      </div>
    </div>
  );
}
