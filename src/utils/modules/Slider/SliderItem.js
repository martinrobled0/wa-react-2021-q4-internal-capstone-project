import PropTypes from "prop-types";

export const SliderItem = ({ children, width }) => {
  return (
    <div className="Slider-item" style={{ width: width }}>
      {children}
    </div>
  );
};

SliderItem.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string,
  src: PropTypes.string,
};
