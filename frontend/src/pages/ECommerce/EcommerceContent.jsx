import PropTypes from "prop-types";
import ProductList from "./ProductList";

export default function EcommerceContent({
  colorNavbarFooter,
  array,
  color,
  typoColor,
  labelColor,
}) {
  return (
    <div className="content">
      <div className="banner">
        <div className="bannerContainer">
          <div className="bannerImg">
            <h1
              style={{
                color: colorNavbarFooter,
                border: `0.3rem solid ${colorNavbarFooter}`,
              }}
            >
              Name of your site
            </h1>
          </div>
        </div>
      </div>

      <div className="sidebarProducts">
        <div className="sidebar">
          <div
            className="collection"
            style={{ border: `2px solid ${colorNavbarFooter}` }}
          >
            <div className="collectionContainer">
              <h2
                className="title_collection"
                style={{ backgroundColor: colorNavbarFooter }}
              >
                COLLECTIONS
              </h2>
              <p>Collection printemps</p>
              <p>Collection été</p>
              <p>Collection automne</p>
              <p>Collection hiver</p>
            </div>
          </div>
          <img src="/src/assets/ecommerce/img-sidebar.png" alt="sidebar" />
          <div
            style={{ border: `2px solid ${colorNavbarFooter}` }}
            className="storeInfo"
          >
            <div className="storeInfoContainer">
              <h2 className="title_store_info">INFOS BOUTIQUE</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                error tempora autem nam molestias quasi ducimus voluptates,
                beatae obcaecati eum expedita vero praesentium totam non ipsa
                soluta deserunt? Cupiditate, facilis!
              </p>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="currentProduct">
            <div className="currentProductImg" />
          </div>
          <ProductList
            array={array}
            color={color}
            labelColor={labelColor}
            typoColor={typoColor}
          />
          <ProductList
            array={array}
            color={color}
            labelColor={labelColor}
            typoColor={typoColor}
          />
          <ProductList
            array={array}
            color={color}
            labelColor={labelColor}
            typoColor={typoColor}
          />
        </div>
      </div>
    </div>
  );
}

EcommerceContent.propTypes = {
  colorNavbarFooter: PropTypes.string,
  color: PropTypes.string,
  typoColor: PropTypes.string,
  array: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};
