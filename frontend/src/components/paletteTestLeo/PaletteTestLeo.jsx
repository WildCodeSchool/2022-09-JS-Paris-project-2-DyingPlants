import axios from "axios";
import { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import "./PaletteTestLeo.css";

export default function PaletteTestLeo({ labelAndColorArray }) {
  // palette top//
  const labels = labelAndColorArray.map((elt) => elt[0]);
  const currentColors = labelAndColorArray.map((elet) => elet[1]);
  const setters = labelAndColorArray.map((elt) => elt[2]);

  // palette bottom//
  const [fetchType, setFetchType] = useState("complementary");
  const [fetchedColors, setFetchedColors] = useState([]);
  const [lockedColors, setLockedColors] = useState([]);
  const [hoveredDiv, setHoveredDiv] = useState(null);

  async function colorMindBrandNewFetch() {
    const response = await axios({
      method: "post",
      url: "http://colormind.io/api/",
      data: JSON.stringify({ model: "default" }),
      config: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
    setFetchedColors(
      response.data.result.map((elt) => `rgb(${elt[0]}, ${elt[1]}, ${elt[2]})`)
    );
  }

  async function colorMindFetchFromColors() {
    const input = () => {
      function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? [
              parseInt(result[1], 16),
              parseInt(result[2], 16),
              parseInt(result[3], 16),
            ]
          : null;
      }

      const inputs = [];
      for (let i = 0; i < 5; i += 1) {
        if (typeof lockedColors[i] !== "undefined") {
          inputs.push(
            fetchedColors[lockedColors[i]].includes("#")
              ? hexToRgb(fetchedColors[lockedColors[i]])
              : fetchedColors[lockedColors[i]].match(/\d+/g)
          );
        } else {
          inputs.push("N");
        }
      }
      setLockedColors([]);
      return inputs;
    };

    const result = await axios({
      method: "post",
      url: "http://colormind.io/api/",
      data: JSON.stringify({
        model: "default",
        input: input(),
      }),
      config: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
    setFetchedColors(
      result.data.result.map((elt) => `rgb(${elt[0]}, ${elt[1]}, ${elt[2]})`)
    );
  }

  async function rapidApiFetch() {
    const response = await axios.get(
      `https://random-palette-generator.p.rapidapi.com/palette/${fetchType}/1/5`,
      {
        headers: {
          "X-RapidAPI-Key":
            "f6b8a1ebfamsh0541ebd7a0ace36p1b5919jsnc2c6a020858d",
          "X-RapidAPI-Host": "random-palette-generator.p.rapidapi.com",
        },
      }
    );
    setFetchedColors(response.data.data[0].palette);
  }

  async function handleFetch() {
    if (lockedColors.length) {
      await colorMindFetchFromColors();
    } else if (fetchType === "topPalette") {
      await colorMindBrandNewFetch();
    } else {
      await rapidApiFetch();
    }
  }

  return (
    <div
      className="paletteContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        position: "fixed",
        height: "250px",
        width: "100%",
        left: 0,
        right: 0,
        margin: "0 auto",
        bottom: "100px",
        backgroundColor: "rgba(255, 255, 255, .8)",
      }}
    >
      <div
        className="paletteTop"
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {/* <div
          className="colorsContainer"
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",
          }}
        > */}
        {currentColors.map((elt) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="colorBox"
              style={{
                backgroundColor: elt,
              }}
            />
            <p
              className="textPalette"
              style={{ textAlign: "center", marginTop: "10px" }}
            >
              {elt[0]}
            </p>
            <p
              className="textPalette"
              style={{ textAlign: "center", marginTop: "10px" }}
            >
              {elt[1]}
            </p>
          </div>
        ))}
      </div>
      <div
        className="paletteBas"
        style={{
          width: "80%",
          minHeight: "40%",
          maxHeight: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="colorsContainer"
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",
          }}
        >
          {fetchedColors.map((elt, i) => {
            return (
              <div
                className="colorBox"
                onMouseEnter={() => setHoveredDiv(i)}
                onMouseLeave={() => setHoveredDiv(null)}
                style={{
                  backgroundColor: elt,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  className="buttonLockedColor"
                  style={{
                    display:
                      hoveredDiv === i || lockedColors.includes(i)
                        ? "initial"
                        : "none",
                  }}
                  onClick={() => {
                    setLockedColors((prev) => {
                      if (prev.includes(i)) {
                        return prev.filter((elem) => elem !== i);
                      }
                      return [...prev, i];
                    });
                  }}
                  type="button"
                  aria-label="Save"
                >
                  <AiFillLock />
                </button>
              </div>
            );
          })}
        </div>
        <form
          className="inputContainer"
          style={{
            display: "flex",
            width: "70%",
            margin: "0 auto",
            gap: "15px",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div
            className="fetchTypeContainer"
            style={{ gap: "10px", width: "80%" }}
          >
            <input
              type="radio"
              id="complementary"
              name="fetchType"
              value="complementary"
              checked={fetchType === "complementary"}
              style={{ marginRight: "10px" }}
              onChange={(e) => {
                setFetchType(e.target.value);
              }}
            />
            <label htmlFor="complementary" style={{ marginRight: "15px" }}>
              complementary
            </label>

            <input
              type="radio"
              id="topPalette"
              name="fetchType"
              value="topPalette"
              checked={fetchType === "topPalette"}
              style={{ marginRight: "10px" }}
              onChange={(e) => {
                setFetchType(e.target.value);
              }}
            />
            <label htmlFor="topPalette" style={{ marginRight: "15px" }}>
              Top palette
            </label>

            <input
              type="radio"
              id="monochromatic"
              style={{ marginRight: "15px" }}
              name="fetchType"
              value="monochromatic"
              checked={fetchType === "monochromatic"}
              onChange={(e) => {
                setFetchType(e.target.value);
              }}
            />
            <label htmlFor="monochromatic">monochromatic</label>
          </div>
          <button type="button" onClick={handleFetch}>
            Generate Colors
          </button>
        </form>
      </div>
    </div>
  );
}
