import PropTypes from "prop-types";

export default function EcommerceHeader({ colorUl, colorIl }) {
  return (
    <div className="header">
      <ul style={{ backgroundColor: colorUl }} className="navBarEcommerce">
        <li style={{ color: colorIl }}>Home</li>
        <li style={{ color: colorIl }}>Shop</li>
        <li style={{ color: colorIl }}>Blog</li>
      </ul>
    </div>
  );
}

EcommerceHeader.propTypes = {
  colorUl: PropTypes.string,
  colorIl: PropTypes.string,
  fetchColors: PropTypes.func,
};
