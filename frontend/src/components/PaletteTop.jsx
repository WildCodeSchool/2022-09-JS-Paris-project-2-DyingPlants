import React from "react";
import PropTypes from "prop-types";
import "./PaletteTop.css";

function PaletteTop({
  darkColor,
  primaryColor,
  backPageColor,
  backColor,
  whatColor,
}) {
  return (
    <div
      style={{
        backgroundColor: "white",
        position: "fixed",
        bottom: "10%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: "20px",
      }}
      className="boxContainer"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="colorBox" style={{ backgroundColor: darkColor }}>
          {" "}
        </div>

        <p
          className="textPalette"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          Background 1
        </p>
        <p
          className="textPalette"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          {darkColor}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="colorBox" style={{ backgroundColor: primaryColor }}>
          {" "}
        </div>
        <p
          className="textPalette"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          Background 2
        </p>
        <p
          className="textPalette"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          {primaryColor}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="colorBox" style={{ backgroundColor: backPageColor }}>
          {" "}
        </div>
        <p
          className="textPalette"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          Background 3
        </p>
        <p
          className="textPalette"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          {backPageColor}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="colorBox" style={{ backgroundColor: backColor }}>
          {" "}
        </div>
        <p
          className="textPalette"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          Typography 1
        </p>
        <p
          className="textPalette"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          {backColor}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="colorBox" style={{ backgroundColor: whatColor }}>
          {" "}
        </div>
        <p
          className="textPalette"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          Typography 2
        </p>
        <p
          className="textPalette"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          {whatColor}
        </p>
      </div>
    </div>
  );
}
PaletteTop.propTypes = {
  darkColor: PropTypes.string,
  primaryColor: PropTypes.string,
  backPageColor: PropTypes.string,
  backColor: PropTypes.string,
  whatColor: PropTypes.string,
};

export default PaletteTop;
