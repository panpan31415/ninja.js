const getTotalNumberOfPages = (rows = [], rowsPerPage = 5) => {
  if (rowsPerPage === 0) {
    return 0;
  }
  return Math.ceil(rows.length / rowsPerPage);
};

const search = (rows = [], searchText = "") => {
  let rowsFound = [];
  if (searchText) {
    rowsFound = rows.filter((row) => {
      return (
        row.name1.toLowerCase().search(searchText.toLowerCase()) > -1 ||
        (row.email &&
          row.email.toLowerCase().search(searchText.toLowerCase()) > -1)
      );
    });
  } else {
    rowsFound = rows;
  }
  return rowsFound;
};

export { getTotalNumberOfPages, search };
