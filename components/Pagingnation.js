import React from "react";
import usePagination, { DOTS } from "../utils/hooks/usePagination";
function Pagingnation(props) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange?.[paginationRange?.length - 1];
  return (
    <ul className="pagination generic-pagination pr-1">
      {/* Left navigation arrow */}
      <li
        className={`page-item ${currentPage === 1 && "disable"}`}
        onClick={onPrevious}
      >
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">
            <i className="la la-arrow-left" />
          </span>
          <span className="sr-only">Previous</span>
        </a>
      </li>
      {paginationRange?.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li className=" page-item">
              <a href="#">&#8230;</a>
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={index}
            className={` page-item ${currentPage === pageNumber && "active"}`}
            onClick={() => onPageChange(pageNumber)}
          >
            <a className="page-link" href="#">
              {pageNumber}
            </a>
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={`page-item ${currentPage === lastPage && "disable"}`}
        onClick={onNext}
      >
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">
            <i className="la la-arrow-right" />
          </span>
          <span className="sr-only">Previous</span>
        </a>
      </li>
    </ul>
  );
}

export default Pagingnation;
