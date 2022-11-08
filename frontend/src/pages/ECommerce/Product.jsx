import React from "react";
import "./Product.css";
import PropTypes from "prop-types";

export default function Product({
  mykey,
  color,
  typoColor,
  pic,
  title,
  price,
}) {
  return (
    <div key={mykey} style={{ backgroundColor: color }} className="product">
      <div className="productPic">
        <img src={pic} alt={title} />
      </div>
      <h3 style={{ color: typoColor }}>{title}</h3>
      <p style={{ color: typoColor }}>{price}</p>
      <div className="button">
        <button className="buyButton" type="button">
          Buy it now !
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  mykey: PropTypes.number,
  pic: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  color: PropTypes.string,
  typoColor: PropTypes.string,
};
