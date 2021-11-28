import { LoaderWrapper } from "./Loader.styled";
import PropTypes from "prop-types";

export const Loader = () => {
  return <LoaderWrapper>CARGANDO ....</LoaderWrapper>;
};

Loader.propTypes = {
  loading: PropTypes.bool,
};
