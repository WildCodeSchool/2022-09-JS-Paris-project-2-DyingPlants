import React from "react";
import "./Startup.css";

export default function FifthContainer() {
  return (
    <main>
      <div className="fifthContainer">
        <div className="underFifth" style={{ width: "50%" }}>
          <h3>Plus de 400 000 assurés ont sauté le pas. Et vous ?</h3>
          <p>Ils ont confié leur foyer à Luko. Découvrez pourquoi.</p>
        </div>
        <div className="avisClients">
          <button
            type="button"
            className="buttonHeader"
            style={{ color: "black" }}
          >
            Lire nos autres avis clients
          </button>
        </div>
      </div>
    </main>
  );
}
