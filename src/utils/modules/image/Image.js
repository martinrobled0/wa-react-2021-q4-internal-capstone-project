import React from "react";
import PropTypes from "prop-types";
import { ImageDisplay } from "./Image.styled";

const ImageC = ({ src, width, height, alt = "image" }) => (
  <ImageDisplay
    src={src}
    width={width}
    height={height}
    alt={alt}
  ></ImageDisplay>
);

ImageC.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageC;
