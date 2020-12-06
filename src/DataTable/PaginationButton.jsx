import React from "react";

const PaginationButton = ({
  pageNumber,
  currentPageNumber,
  setCurrentPageNumber,
}) => {
  const clickHandler = (event) => {
    event.preventDefault();
    setCurrentPageNumber(pageNumber);
  };
  return (
    <button
      className={`page-item mr-1 page-link ${
        currentPageNumber === pageNumber ? "button-outline" : ""
      }`}
      onClick={clickHandler}>
      {pageNumber}
    </button>
  );
};

export default PaginationButton;
