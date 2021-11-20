import React from "react";
import PropTypes from "prop-types";
import { ProductCardWrapper } from "./ProductCard.styled";

export const ProductCard = ({ name, price, mainimage, category }) => {
  const categoryName = category.slug;
  const { url, alt } = mainimage;
  return (
    <ProductCardWrapper>
      <div className="ProductCard-image">
        <img src={url} alt={alt} />
      </div>
      <div className="ProductCard-details">
        <div className="ProductCard-product">
          <div className="ProductCard-name">{name}</div>
          <div className="ProductCard-slug">{categoryName}</div>
        </div>
        <div className="ProductCard-price">$ {price}</div>
      </div>
    </ProductCardWrapper>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  mainimage: PropTypes.any,
  category: PropTypes.any,
};
