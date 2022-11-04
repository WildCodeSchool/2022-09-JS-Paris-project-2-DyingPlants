import React from "react";
import PropTypes from "prop-types";

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
        width: "600px",
        height: "180px",
        borderRadius: "20px",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="colorBox" style={{ backgroundColor: darkColor }}>
          {" "}
        </div>
        <p style={{ textAlign: "center", marginTop: "10px" }}>Background 1</p>
        <p style={{ textAlign: "center", marginTop: "10px" }}>{darkColor}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="colorBox" style={{ backgroundColor: primaryColor }}>
          {" "}
        </div>
        <p style={{ textAlign: "center", marginTop: "10px" }}>Background 2</p>
        <p style={{ textAlign: "center", marginTop: "10px" }}>{primaryColor}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="colorBox" style={{ backgroundColor: backPageColor }}>
          {" "}
        </div>
        <p style={{ textAlign: "center", marginTop: "10px" }}>Background 3</p>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          {backPageColor}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="colorBox" style={{ backgroundColor: backColor }}>
          {" "}
        </div>
        <p style={{ textAlign: "center", marginTop: "10px" }}>Typography 1</p>
        <p style={{ textAlign: "center", marginTop: "10px" }}>{backColor}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="colorBox" style={{ backgroundColor: whatColor }}>
          {" "}
        </div>
        <p style={{ textAlign: "center", marginTop: "10px" }}>Typography 2</p>
        <p style={{ textAlign: "center", marginTop: "10px" }}>{whatColor}</p>
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