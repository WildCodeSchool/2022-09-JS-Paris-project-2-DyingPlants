import {
  chakraColorRGB as chakraColors,
  findMono,
  getTextColor,
} from "@services/helpers";
import { fetchFromInput, topPaletteFetch } from "@services/utils";
import { useRef, useState } from "react";

import {
  AiFillLock,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { BsPaletteFill, BsTrash } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import "./soloPalette.style.css";

export default function SoloPalette({ labelAndColorObj }) {
  const { labels, colors: initialColors, setters } = labelAndColorObj;

  const [mode, setMode] = useState("top");
  const [generatedColors, setGeneratedColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [lockedColors, setLockedColors] = useState([]);
  const [hoveredTopColors, setHoveredTopColors] = useState(null);
  const [hoveredMiddleColors, setHoveredMiddleColors] = useState(null);
  const [hoveredBottomColors, setHoveredBottomColors] = useState(null);

  const [display, toggleDisplay] = useState(true);

  const colorIndexMemo = useRef(initialColors.map((_, i) => i));

  const colorStock = [
    ...initialColors,
    ...lockedColors.slice(3),
    ...generatedColors.slice().reverse(),
    ...lockedColors.slice(0, 3).reverse(),
  ];

  const handleChangeMode = (e) => {
    setMode(e.target.value);
    setSelectedColors([]);
  };

  const handleGenerate = async () => {
    if (!selectedColors.length) {
      const colorKeys = Object.keys(chakraColors);
      if (mode === "monochromatic") {
        setGeneratedColors(
          chakraColors[
            colorKeys[
              Math.floor(Math.random() * Object.keys(chakraColors).length)
            ]
          ]
        );
      } else if (mode === "top") {
        setGeneratedColors(await topPaletteFetch());
      }
    } else if (mode === "monochromatic") {
      setGeneratedColors(findMono(selectedColors[0]));
    } else {
      setGeneratedColors(await fetchFromInput(selectedColors));
    }
    colorIndexMemo.current = initialColors.map((_, i) => i);
    setSelectedColors([]);
  };

  const handleNextColor = (idx) => {
    let nextColorIndex =
      colorIndexMemo.current[idx] === colorStock.length - 1
        ? 0
        : colorIndexMemo.current[idx] + 1;
    setters[idx]((prev) => {
      if (prev === colorStock[nextColorIndex]) {
        nextColorIndex =
          nextColorIndex === colorStock.length - 1 ? 0 : nextColorIndex + 1;
      }
      return colorStock[nextColorIndex];
    });
    colorIndexMemo.current[idx] = nextColorIndex;
  };

  const handlePrevColor = (idx) => {
    let prevColorIndex =
      colorIndexMemo.current[idx] === 0
        ? colorStock.length - 1
        : colorIndexMemo.current[idx] - 1;
    setters[idx]((prev) => {
      if (prev === colorStock[prevColorIndex]) {
        prevColorIndex =
          prevColorIndex === 0 ? colorStock.length - 1 : prevColorIndex - 1;
      }
      return colorStock[prevColorIndex];
    });
    colorIndexMemo.current[idx] = prevColorIndex;
  };

  return display ? (
    <div id="soloPalette">
      <div className="colorsContainer">
        <button
          type="button"
          id="hidePalette"
          onClick={() => toggleDisplay((prev) => !prev)}
        >
          <RiCloseCircleFill size="2rem" color="red" />
        </button>
        {initialColors.map((elt, i) => {
          const selected = selectedColors.includes(elt);
          const hovered = hoveredTopColors === i;
          const locked = lockedColors.includes(elt);
          const textColor = getTextColor(elt);
          return (
            <div
              className="colorContainer"
              key={uuidv4()}
              style={{
                backgroundColor: elt,
                borderTopRightRadius:
                  i === initialColors.length - 1 ? "10px" : "0px",
                borderTopLeftRadius: i === 0 ? "10px" : "0px",
              }}
              onMouseEnter={() => setHoveredTopColors(i)}
              onMouseLeave={() => setHoveredTopColors(null)}
            >
              <p className="label" style={{ color: textColor }}>
                {labels[i]}
              </p>
              <input
                type="checkbox"
                className="top"
                style={{
                  display: selected || hovered ? "initial" : "none",
                }}
                checked={selected}
                onChange={() =>
                  setSelectedColors(
                    selected
                      ? selectedColors.filter((ele) => ele !== elt)
                      : [...selectedColors, elt]
                  )
                }
                disabled={
                  (!selected &&
                    mode === "monochromatic" &&
                    selectedColors.length > 0) ||
                  (!selected && selectedColors.length > 2)
                }
              />
              <div
                className="colorIconButtonsContainer"
                style={{
                  display: hovered ? "flex" : "none",
                  color: textColor,
                }}
              >
                <button
                  className="colorIconButton"
                  type="button"
                  onClick={() => {
                    handlePrevColor(i);
                  }}
                >
                  <AiOutlineDoubleLeft size="15px" />
                </button>
                <button
                  type="button"
                  className="colorIconButton"
                  onClick={() => setLockedColors([...lockedColors, elt])}
                  disabled={locked || lockedColors.length > 5}
                >
                  <AiFillLock size="15px" />
                </button>
                <button
                  type="button"
                  className="colorIconButton"
                  onClick={() => {
                    handleNextColor(i);
                  }}
                >
                  <AiOutlineDoubleRight size="15px" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div id="paletteMiddle">
        <div className="lockedColorsContainer">
          {lockedColors.length
            ? lockedColors.map(function (elt, i) {
                const selected = selectedColors.includes(elt);
                const hovered = hoveredMiddleColors === i;
                const textColor = getTextColor(elt);
                return i < 3 ? (
                  <div
                    className="colorContainer"
                    key={uuidv4()}
                    style={{
                      backgroundColor: elt,
                    }}
                    onMouseEnter={() => setHoveredMiddleColors(i)}
                    onMouseLeave={() => setHoveredMiddleColors(null)}
                  >
                    <div className="lockedColorIcon">
                      <AiFillLock size="1rem" color={textColor} />
                    </div>
                    <input
                      type="checkbox"
                      className="bottom"
                      style={{
                        display: selected || hovered ? "initial" : "none",
                      }}
                      checked={selected}
                      onChange={() =>
                        setSelectedColors(
                          selected
                            ? selectedColors.filter((ele) => ele !== elt)
                            : [...selectedColors, elt]
                        )
                      }
                      disabled={
                        (!selected &&
                          mode === "monochromatic" &&
                          selectedColors.length > 0) ||
                        (!selected && selectedColors.length > 2)
                      }
                    />
                    <div
                      className="colorIconButtonContainer"
                      style={{
                        display: hovered ? "flex" : "none",
                        color: textColor,
                      }}
                    >
                      <button
                        className="colorIconButton lockContainer"
                        type="button"
                        onClick={() =>
                          setLockedColors((prev) =>
                            prev.filter((ele) => ele !== elt)
                          )
                        }
                      >
                        <BsTrash size="15px" />
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })
            : ""}
        </div>
        <form>
          <div className="formItemContainer">
            <label htmlFor="mode">Mode :</label>
            <select id="mode" value={mode} onChange={handleChangeMode}>
              <option value="top">Top</option>
              <option value="monochromatic">Monochromatic</option>
            </select>
          </div>
          <div className="formItemContainer">
            <p>Input{mode === "top" ? "s" : ""} : </p>
            <div
              id="inputContainer"
              style={{ width: mode === "top" ? "120px" : "40px" }}
            >
              {selectedColors.map((ele) => (
                <div className="inputColor" style={{ backgroundColor: ele }} />
              ))}
            </div>
          </div>
          <button
            id="generateButton"
            type="button"
            onClick={() => handleGenerate()}
          >
            Generate Colors
          </button>
        </form>
        <div className="lockedColorsContainer">
          {lockedColors.length
            ? lockedColors.map(function (elt, i) {
                const selected = selectedColors.includes(elt);
                const hovered = hoveredMiddleColors === i;
                const textColor = getTextColor(elt);
                return !(i < 3) ? (
                  <div
                    className="colorContainer"
                    key={uuidv4()}
                    style={{
                      backgroundColor: elt,
                    }}
                    onMouseEnter={() => setHoveredMiddleColors(i)}
                    onMouseLeave={() => setHoveredMiddleColors(null)}
                  >
                    <div className="lockedColorIcon">
                      <AiFillLock size="1rem" color={textColor} />
                    </div>

                    <input
                      type="checkbox"
                      className="right"
                      style={{
                        display: selected || hovered ? "initial" : "none",
                      }}
                      checked={selected}
                      onChange={() =>
                        setSelectedColors(
                          selected
                            ? selectedColors.filter((ele) => ele !== elt)
                            : [...selectedColors, elt]
                        )
                      }
                      disabled={
                        (!selected &&
                          mode === "monochromatic" &&
                          selectedColors.length > 0) ||
                        (!selected && selectedColors.length > 2)
                      }
                    />
                    <div
                      className="colorIconButtonContainer"
                      style={{
                        display: hovered ? "flex" : "none",
                        color: textColor,
                      }}
                    >
                      <button
                        type="button"
                        className="colorIconButton lockContainer"
                        onClick={() =>
                          setLockedColors((prev) =>
                            prev.filter((ele) => ele !== elt)
                          )
                        }
                      >
                        <BsTrash size="15px" />
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })
            : ""}
        </div>
      </div>
      <div className="colorsContainer">
        {generatedColors.length
          ? generatedColors.map((elt, i) => {
              const selected = selectedColors.includes(elt);
              const hovered = hoveredBottomColors === i;
              const locked = lockedColors.includes(elt);
              const textColor = getTextColor(elt);
              return (
                <div
                  className="colorContainer"
                  key={uuidv4()}
                  style={{
                    backgroundColor: elt,
                    borderBottomRightRadius:
                      i === generatedColors.length - 1 ? "10px" : "0px",
                    borderBottomLeftRadius: i === 0 ? "10px" : "0px",
                  }}
                  onMouseEnter={() => setHoveredBottomColors(i)}
                  onMouseLeave={() => setHoveredBottomColors(null)}
                >
                  <input
                    type="checkbox"
                    className="bottom"
                    style={{
                      display: selected || hovered ? "initial" : "none",
                    }}
                    checked={selected}
                    onChange={() =>
                      setSelectedColors(
                        selected
                          ? selectedColors.filter((ele) => ele !== elt)
                          : [...selectedColors, elt]
                      )
                    }
                    disabled={
                      (!selected &&
                        mode === "monochromatic" &&
                        selectedColors.length > 0) ||
                      (!selected && selectedColors.length > 2)
                    }
                  />
                  <div
                    className="colorIconButtonContainer"
                    style={{
                      display: hovered ? "flex" : "none",
                      color: textColor,
                    }}
                  >
                    <button
                      className="colorIconButton lockContainer"
                      type="button"
                      onClick={() => setLockedColors([...lockedColors, elt])}
                      disabled={locked || lockedColors.length > 5}
                    >
                      <AiFillLock size="15px" />
                    </button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  ) : (
    <button
      id="showPalette"
      type="button"
      onClick={() => {
        toggleDisplay((prev) => !prev);
      }}
    >
      <BsPaletteFill size="4rem" />
    </button>
  );
}
