import React from "react";
import PropTypes from "prop-types";
import { usePagination, DOTS } from "../../hooks/usePagination";
import { PaginationWrapper } from "./Pagination.styled";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationWrapper>
      <ul className="pagination-container">
        <li className="pagination-item" onClick={onPrevious}>
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          return (
            <li
              key={pageNumber}
              className="pagination-item"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li className="pagination-item" onClick={onNext}>
          <div className="arrow right" />
        </li>
      </ul>
    </PaginationWrapper>
  );
};

export default Pagination;

Pagination.propTypes = {
  onPageChange: PropTypes.any,
  totalCount: PropTypes.any,
  siblingCount: PropTypes.any,
  currentPage: PropTypes.any,
  pageSize: PropTypes.any,
};
