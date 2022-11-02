import React from "react";
import "./Product.css";
import PropTypes from "prop-types";

export default function Product({ mykey, pic, title, price }) {
  return (
    <div key={mykey} className="product">
      <div className="productPic">
        <img src={pic} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{price}</p>
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
};
