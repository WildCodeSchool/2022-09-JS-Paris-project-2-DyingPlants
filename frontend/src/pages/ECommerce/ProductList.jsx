import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import Product from "./Product";

export default function ProductList({ array, color, labelColor, typoColor }) {
  return (
    <div className="productList">
      <h3
        className="titleProduct"
        style={{ backgroundColor: labelColor, color: typoColor }}
      >
        {" "}
        {Object.keys({ array })[0]}
      </h3>
      <div className="productListItem">
        {array.map((i) => {
          return (
            <Product
              key={uuid()}
              color={color}
              typoColor={typoColor}
              pic={i.picture}
              title={i.title}
              price={i.price}
            />
          );
        })}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  color: PropTypes.string,
  typoColor: PropTypes.string,
  array: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};
