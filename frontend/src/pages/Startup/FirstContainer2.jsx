import React from "react";
import "./Startup.css";
import ButtonFirstContainer from "./ButtonFirstContainer";

export default function FirstContainer2({ colors }) {
  const { background1, background2, background3, font1, font2 } = colors;
  return (
    <div className="firstContainer" style={{ backgroundColor: background1 }}>
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
