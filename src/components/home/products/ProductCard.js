import React from "react";
import PropTypes from "prop-types";
import { ProductCardWrapper } from "./ProductCard.styled";
import { Link } from "react-router-dom";

export const ProductCard = ({ name, price, mainimage, category, id }) => {
  const categoryName = category.slug;
  const { url, alt } = mainimage;
  return (
    <ProductCardWrapper>
      <Link className="cardLink" to={`/products/${id}`}>
        <div className="product-card-image">
          <img src={url} alt={alt} />
        </div>
        <div className="product-card-details">
          <div className="product-card-product">
            <div className="product-card-name">{name}</div>
            <div className="product-card-slug">{categoryName}</div>
          </div>
          <div className="product-card-actions">
            <div className="product-card-price">$ {price}</div>
            <button className="product-card-button">Add to cart</button>
          </div>
        </div>
      </Link>
    </ProductCardWrapper>
  );
};

ProductCard.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  price: PropTypes.number,
  mainimage: PropTypes.any,
  category: PropTypes.any,
};
