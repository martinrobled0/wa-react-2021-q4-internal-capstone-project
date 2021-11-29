import { PaginationWrapper } from "./Pagination.styled";
import PropTypes from "prop-types";

export const Pagination = ({ size }) => {
  return (
    <PaginationWrapper>
      <a href="#">&laquo;</a>

      {Array.from(Array(size), (e, i) => {
        return <a href="#">{i + 1}</a>;
      })}

      <a href="#">&raquo;</a>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  results: PropTypes.number,
  size: PropTypes.number,
  results_per_page: PropTypes.number,
};
