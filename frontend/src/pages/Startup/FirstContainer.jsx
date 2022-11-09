import React from "react";
import "./Startup.css";

export default function FirstContainer({ colors }) {
  const { background1, background2, background3, font1, font2 } = colors;
  return (
    <header>
      <div className="firstContainer" style={{ backgroundColor: background1 }}>
        <div style={{ width: "70%", margin: "auto" }}>
          <div style={{ width: "70%" }}>
            <h1>
              L'assurance qui vous dit tout <br /> (sur tout)
            </h1>
            <p>
              Y'a pas de loup chez Luko : des contrats clairs, des
              remboursements 2x plus rapides, un modèle 100% digital et
              transparent. Comme ça, vous gagnez du temps, et de l'argent.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
