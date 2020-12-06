import React from "react";
import Row from "./Row";
const Table = ({ rowsFound, currentPageNumber, rowsPerPage }) => (
  <table>
    <tbody>
      {rowsFound
        .slice(
          (currentPageNumber - 1) * rowsPerPage,
          currentPageNumber * rowsPerPage
        )
        .map((row) => (
          <Row key={row.per_id} row={row} />
        ))}
    </tbody>
  </table>
);

export default Table;
