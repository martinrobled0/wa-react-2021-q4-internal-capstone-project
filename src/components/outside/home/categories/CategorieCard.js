import React from "react";
import PropTypes from "prop-types";
import { CardWrapper } from "./CategorieCard.styled";

export const CategorieCard = ({ name, main_image }) => {
  const { url, alt } = main_image;
  return (
    <CardWrapper>
      <div className="CardWrapper-title">{name}</div>
      <img src={url} alt={alt} />
    </CardWrapper>
  );
};

CategorieCard.propTypes = {
  name: PropTypes.string,
  main_image: PropTypes.any,
};
