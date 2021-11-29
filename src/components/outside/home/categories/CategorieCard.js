import React from "react";
import PropTypes from "prop-types";
import { CardWrapper } from "./CategorieCard.styled";
import { Link, Outlet } from "react-router-dom";

export const CategorieCard = ({ name, main_image, renderImage = true, id }) => {
  const { url, alt } = main_image;
  return (
    <CardWrapper id={id}>
      <div className="CardWrapper-title">
        {renderImage && <Link to={`category=${id}`}>{name}</Link>}
        {!renderImage && name}
      </div>
      {renderImage && <img src={url} alt={alt} />}
      <Outlet />
    </CardWrapper>
  );
};

CategorieCard.propTypes = {
  name: PropTypes.string,
  main_image: PropTypes.any,
  renderImage: PropTypes.bool,
  id: PropTypes.any,
};
