import React from "react";
import "./Startup.css";

export default function SecondContainer() {
  return (
    <div className="secondContainer">
      <div style={{ width: "50%", marginLeft: "auto" }}>
        <div>
          <h3>Vous êtes entre de bonnes mains.</h3>
        </div>
        <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
          <h3> 2 minutes, top chrono</h3>
          <p>
            Des contrats clairs et personnalisables pour assurer ce qui compte
            pour vous en quelques clics
          </p>
        </div>
        <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
          <h3>7 jours sur 7</h3>
          <p>
            Toujours à vos côtés : des équipes vous répondent tous les jours
            (même dimanche) en moins de 100 secondes
          </p>
        </div>
        <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
          <h3>2x plus rapide</h3>
          <p>
            Un pépin chez vous ? Vous êtes remboursé avant même d'avoir dit
            "ouf"
          </p>
        </div>
      </div>
    </div>
  );
}
