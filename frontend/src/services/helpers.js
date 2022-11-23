import { chakraColors } from "@assets/chakraColors";

const chakraColorC = { ...chakraColors };

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

/* HSL to RGB: */
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */

function hslToRgb(h, s, l) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/* RGB to HSL: */
/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {number}  r       The red color value
 * @param   {number}  g       The green color value
 * @param   {number}  b       The blue color value
 * @return  {Array}           The HSL representation
 */
function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

export const findMono = (rgbColor, nb = 10) => {
  console.log("rgbColor");
  console.log(rgbColor);
  const rgbArr = rgbColor.match(/\d+/g).map((elt) => Number(elt));
  console.log("rgbArr");
  console.log(rgbArr);

  const hue = rgbToHsl(rgbArr[0], rgbArr[1], rgbArr[2])[0] * 360;

  console.log("hue");
  console.log(hue);

  const mainColors = Object.keys(chakraColorC).map((elt) => {
    const colorRange = elt.split("-").map((elet) => Number(elet));
    return (colorRange[0] + colorRange[1]) / 2;
  });

  const closestColor = mainColors.reduce((a, b) => {
    return Math.abs(b - hue) < Math.abs(a - hue) ? b : a;
  });

  console.log("closestColor");
  console.log(closestColor);

  const closestColorIndex = mainColors.indexOf(closestColor);

  const closestColorArray =
    chakraColorC[Object.keys(chakraColorC)[closestColorIndex]];

  const resultHSL = [];

  for (let i = 0; i < nb; i++) {
    const [, iSaturation, iBrightness] = closestColorArray[i]
      .match(/\d+/g)
      .map((elt) => Number(elt));

    /*     result.push(`hsl(${hue}, ${iSaturation}%, ${iBrightness}%)`);
     */
    resultHSL.push([hue, iSaturation, iBrightness]);
  }

  return resultHSL
    .map((elt) => hslToRgb(elt[0] / 360, elt[1] / 100, elt[2] / 100))
    .map((elt) => `rgb(${elt[0]}, ${elt[1]}, ${elt[2]})`);
};

export function getTextColor(rgba) {
  rgba = rgba.match(/\d+/g).map(Number);
  if (rgba[0] * 0.299 + rgba[1] * 0.587 + rgba[2] * 0.114 > 186) {
    return "black";
  } else {
    return "white";
  }
}

export const chakraColorRGB = {};

Object.keys(chakraColorC).forEach((elt) => {
  chakraColorRGB[elt] = chakraColorC[elt].map((ele) => {
    const [a, b, c] = ele.match(/\d+/g).map(Number);
    const [d, e, f] = hslToRgb(a / 360, b / 100, c / 100);
    return `rgb(${d}, ${e}, ${f})`;
  });
});
