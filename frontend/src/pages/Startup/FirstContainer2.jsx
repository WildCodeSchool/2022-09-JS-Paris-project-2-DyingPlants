import React from "react";
import "./Startup.css";
import ButtonFirstContainer from "./ButtonFirstContainer";

export default function FirstContainer2() {
  return (
    <div className="firstContainer">
      <div style={{ width: "70%", margin: "auto" }}>
        <div id="buttonFirstContainer" style={{ display: "flex" }}>
          <ButtonFirstContainer text="Assurance habitation" />
          <ButtonFirstContainer text="Assurance emprunteur" />
          <ButtonFirstContainer text="Trottinettes électriques" />
        </div>
      </div>
    </div>
  );
}
