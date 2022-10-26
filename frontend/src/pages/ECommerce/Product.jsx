import React from "react";
import "./Product.css";
import PropTypes from "prop-types";

export default function Product({ pic, title, price }) {
  return (
    <div className="product">
      <img src={pic} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button type="button">Buy it now !</button>
    </div>
  );
}

Product.propTypes = {
  pic: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};
