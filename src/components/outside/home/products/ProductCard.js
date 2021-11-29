import React from "react";
import PropTypes from "prop-types";
import { ProductCardWrapper } from "./ProductCard.styled";
import { Link } from "react-router-dom";

export const ProductCard = ({ name, price, mainimage, category, id }) => {
  const categoryName = category.slug;
  const { url, alt } = mainimage;
  return (
    <Link to={`/products/${id}`}>
      <ProductCardWrapper>
        <div className="ProductCard-image">
          <img src={url} alt={alt} />
        </div>
        <div className="ProductCard-details">
          <div className="ProductCard-product">
            <div className="ProductCard-name">{name}</div>
            <div className="ProductCard-slug">{categoryName}</div>
          </div>
          <div className="ProductCard-actions">
            <div className="ProductCard-price">$ {price}</div>
            <button className="ProductCard-button">Add to cart</button>
          </div>
        </div>
      </ProductCardWrapper>
    </Link>
  );
};

ProductCard.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  price: PropTypes.number,
  mainimage: PropTypes.any,
  category: PropTypes.any,
};
