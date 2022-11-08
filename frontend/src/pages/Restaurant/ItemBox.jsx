import React from "react";
import "./Restaurant.css";
import PropTypes from "prop-types";

function ItemBox({ backColor, image, darkColor, whatColor, primaryColor }) {
  return (
    <div style={{ backgroundColor: backColor }} className="itemBlock">
      <img src={image} alt="item" className="itemPicture" />
      <div className="itemDetails">
        <div className="textTop">
          <h6 style={{ color: darkColor }}>Item</h6>
          <p style={{ color: whatColor }}>$ 00.00 USD</p>
        </div>
        <p style={{ color: whatColor }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <input type="number" className="input" />
        <button
          style={{ backgroundColor: primaryColor, color: darkColor }}
          type="button"
          className="buttonAdd"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

ItemBox.propTypes = {
  backColor: PropTypes.string,
  image: PropTypes.string,
  darkColor: PropTypes.string,
  whatColor: PropTypes.string,
  primaryColor: PropTypes.string,
};

export default ItemBox;
