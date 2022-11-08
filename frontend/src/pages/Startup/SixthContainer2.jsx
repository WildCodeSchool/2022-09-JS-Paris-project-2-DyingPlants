import React from "react";
import "./Startup.css";

export default function SixthContainer2() {
  return (
    <main>
      <div className="underSixth2">
        <button
          type="button"
          className="button buttonHeader"
          style={{ color: "black" }}
        >
          Andrea Service client Paris, France
        </button>
        <button
          type="button"
          className="button buttonHeader"
          style={{ color: "black" }}
        >
          Yassine Service client Paris, France
        </button>
        <button
          type="button"
          className="button buttonHeader"
          style={{ color: "black" }}
        >
          Mathilde Gestionnaire de sinistre Berlin, Germany
        </button>
        <button
          type="button"
          className="button buttonHeader"
          style={{ color: "black" }}
        >
          Patrick Chef des lapins Paris, France{" "}
        </button>
      </div>
      <h3>
        <button
          type="button"
          className="button buttonHeader"
          style={{ color: "black" }}
        >
          {"--> J'ai une question "}
        </button>
      </h3>
    </main>
  );
}
