import React from "react";
import PaginationButton from "./PaginationButton";
import _ from "lodash";
const PaginationButtons = ({
  totalNumberOfPages,
  currentPageNumber,
  setCurrentPageNumber,
}) => {
  return (
    <div>
      {_.range(totalNumberOfPages).map((index) => {
        return (
          <PaginationButton
            key={index}
            currentPageNumber={currentPageNumber}
            pageNumber={index + 1}
            setCurrentPageNumber={setCurrentPageNumber}
          />
        );
      })}
    </div>
  );
};

export default PaginationButtons;
