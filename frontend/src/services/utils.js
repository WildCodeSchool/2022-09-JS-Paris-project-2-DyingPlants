import axios from "axios";
import { hexToRgb } from "./helpers";

export async function monochromOrComplementaryFetch(fetchType) {
  const response = await axios.get(
    `https://random-palette-generator.p.rapidapi.com/palette/${fetchType}/1/5`,
    {
      headers: {
        "X-RapidAPI-Key": "f6b8a1ebfamsh0541ebd7a0ace36p1b5919jsnc2c6a020858d",
        "X-RapidAPI-Host": "random-palette-generator.p.rapidapi.com",
      },
    }
  );
  return response.data.data[0].palette;
}

export async function topPaletteFetch() {
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
  return response.data.result.map(
    (elt) => `rgb(${elt[0]}, ${elt[1]}, ${elt[2]})`
  );
}

export async function fetchFromInput(selectedColors) {
  const input = () => {
    const inputs = [];
    for (let i = 0; i < 5; i += 1) {
      if (typeof selectedColors[i] !== "undefined") {
        inputs.push(selectedColors[i].match(/\d+/g));
      } else {
        inputs.push("N");
      }
    }
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
  return result.data.result.map(
    (elt) => `rgb(${elt[0]}, ${elt[1]}, ${elt[2]})`
  );
}
