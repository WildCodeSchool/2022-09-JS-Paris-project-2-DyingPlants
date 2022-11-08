import React from "react";
import PropTypes from "prop-types";

export default function Button({ text }) {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <button
        type="button"
        className="button buttonHeader"
        style={{ color: "black" }}
      >
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};
