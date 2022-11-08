import PropTypes from "prop-types";
import "./ECommerce.css";

export default function EcommerceFooter({ colorUl }) {
  return (
    <div className="footer">
      <ul style={{ backgroundColor: colorUl }} className="navBarEcommerce">
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Autre</li>
      </ul>
    </div>
  );
}

EcommerceFooter.propTypes = {
  colorUl: PropTypes.string,
};
