import React from "react";
import PaginationButtons from "./PaginationButtons";
import RowsPerPageInput from "./RowsPerPageInput";

const PaginationBox = ({
  currentPageNumber,
  totalNumberOfPages,
  setCurrentPageNumber,
  rowsPerPage,
  setRowsPerPage,
}) => {
  return (
    <div className="pagination-box">
      <PaginationButtons
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
      />
      <RowsPerPageInput
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        min={1}
        max={10}
      />
    </div>
  );
};

export default PaginationBox;
