import React from "react";
import "./Startup.css";

export default function NavContainer() {
  return (
    <header>
      <div className="nav-container">
        <div style={{ width: "70%", margin: "auto" }}>
          <nav id="barNav">
            <span id="logo">Luko</span>
            <ul id="navBarLeftUl">
              <li>Produits</li>
              <li>Engagements</li>
              <li>Aide</li>
              <li>Avis Client</li>
            </ul>
            <ul id="navBarRight">
              <li>Mon espace personnel</li>
              <li>
                <button
                  type="button"
                  className="navButton"
                  style={{ color: "blue" }}
                >
                  Obtenir mon prix
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
