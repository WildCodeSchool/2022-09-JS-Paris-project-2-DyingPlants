import React from "react";
import "./Startup.css";

export default function ButtonFirstContainer({ text }) {
  return (
    <button
      type="button"
      className="buttonFirstContainer"
      style={{ color: "black" }}
    >
      {text}
    </button>
  );
}
