import {
  fetchFromInput,
  monochromOrComplementaryFetch,
  topPaletteFetch,
} from "@services/utils";
import { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import "./Palette.css";

export default function Palette({ labelAndColorArray }) {
  // palette top//
  const labels = labelAndColorArray.map((elt) => elt.label);
  const currentColors = labelAndColorArray.map((elt) => elt.color);
  const setters = labelAndColorArray.map((elt) => elt.setter);

  // palette bottom//
  const [fetchType, setFetchType] = useState("complementary");
  const [fetchedColors, setFetchedColors] = useState([]);
  const [lockedColors, setLockedColors] = useState([]);
  const [hoveredDiv, setHoveredDiv] = useState(null);
  const [colorPerDivItem, setColorsPerDivItem] = useState([
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleChangeColor = (i) => {
    const nextColor =
      colorPerDivItem[i] === null || colorPerDivItem[i] === 4
        ? fetchedColors[0]
        : fetchedColors[colorPerDivItem[i] + 1];

    setters[i](nextColor);

    setColorsPerDivItem((prev) => {
      const newArr = [...prev];
      newArr[i] = newArr[i] === null || newArr[i] === 4 ? 0 : newArr[i] + 1;
      return newArr;
    });
  };

  async function handleFetch() {
    if (lockedColors.length) {
      setFetchedColors(await fetchFromInput(lockedColors, fetchedColors));
      /* await colorMindFetchFromColors(); */
    } else if (fetchType === "topPalette") {
      setFetchedColors(await topPaletteFetch());
      /* await colorMindBrandNewFetch(); */
    } else {
      setFetchedColors(await monochromOrComplementaryFetch(fetchType));
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
        height: "300px",
        left: 0,
        right: 0,
        margin: "0 auto",
        bottom: "100px",
        width: "80%",
        maxWidth: "800px",
      }}
    >
      <div
        className="paletteTop"
        style={{
          width: "100%",
          minHeigth: "40%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {currentColors.map((elt, i) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              minWidth: "20%",
              width: "20%",
            }}
          >
            <div
              className="colorBox"
              style={{
                backgroundColor: elt,
                height: "80px",
                borderTopLeftRadius: i === 0 ? "10px" : "initial",
                borderTopRightRadius: i === 4 ? "10px" : "initial",
              }}
            >
              <button type="button" onClick={() => handleChangeColor(i)}>
                change
              </button>
            </div>{" "}
            <div
              style={{
                backgroundColor: "white",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                paddingTop: "5px",
                paddingBottom: "5px",
                borderBottomLeftRadius: i === 0 ? "10px" : "initial",
                borderBottomRightRadius: i === 4 ? "10px" : "initial",
              }}
            >
              {" "}
              <p
                className="textPalette"
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                }}
              >
                {labels[i]}
              </p>
              <p
                className="textPalette"
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                }}
              >
                {elt}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="paletteBas"
        style={{
          minHeight: "40%",
          maxHeight: "40%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="colorsContainer"
          style={{
            width: "100%",
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
                  height: "80px",
                  borderTopLeftRadius: i === 0 ? "10px" : "initial",
                  borderTopRightRadius: i === 4 ? "10px" : "initial",
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
            width: "100%",
            height: "40px",
            margin: "0 auto",
            gap: "15px",
            alignItems: "center",
            backgroundColor: "white",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
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
