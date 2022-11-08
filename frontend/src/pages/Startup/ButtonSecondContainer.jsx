import React from "react";
import "./Startup.css";

export default function buttonSecondContainer({ text }) {
  return (
    <button
      type="button"
      className="buttonSecondContainer"
      style={{ color: "black" }}
    >
      {text}
    </button>
  );
}
