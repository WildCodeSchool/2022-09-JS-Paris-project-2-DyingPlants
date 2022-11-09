import React from "react";
import "./Startup.css";

export default function ButtonSecondContainer({ text }) {
  return (
    <button
      type="button"
      className="buttonSecondContainer"
      style={{ color: "#0053f1" }}
    >
      {text}
    </button>
  );
}
