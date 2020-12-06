import React, { Fragment } from "react";
import { getTotalNumberOfPages, search } from "./logic";
import PaginationBox from "./PaginationBox";
import Table from "./Table";
import SearchBox from "./SearchBox";

class DataTable extends React.Component {
  state = {
    currentPageNumber: 1,
    rowsPerPage: 5,
    searchText: "",
    rowsFound: [],
  };

  componentDidMount() {
    const rows = this.props.rows;
    this.setState(() => ({
      rowsFound: search(rows, this.state.searchText),
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchText !== prevState.searchText) {
      const rows = this.props.rows;
      this.setState({
        rowsFound: search(rows, this.state.searchText),
      });
    }
    if (this.state.rowsPerPage !== prevState.rowsPerPage) {
      const totalNumberOfPages = getTotalNumberOfPages(
        this.state.rowsFound,
        this.state.rowsPerPage
      );
      if (this.state.currentPageNumber > totalNumberOfPages) {
        this.setState({
          currentPageNumber: 1,
        });
      }
    }
  }

  setCurrentPageNumber = (currentPageNumber) => {
    this.setState(() => ({
      currentPageNumber,
    }));
  };

  updateSearchText = (searchText) => {
    this.setState(() => ({
      searchText,
    }));
  };

  setRowsPerPage = (rowsPerPage) => {
    this.setState(() => ({
      rowsPerPage,
    }));
  };

  render() {
    const {
      rowsFound,
      searchText,
      currentPageNumber,
      rowsPerPage,
    } = this.state;

    const totalNumberOfPages = getTotalNumberOfPages(rowsFound, rowsPerPage);

    return (
      <Fragment>
        <SearchBox
          updateSearchText={this.updateSearchText}
          searchText={searchText}
        />
        <Table
          rowsFound={rowsFound}
          currentPageNumber={currentPageNumber}
          rowsPerPage={rowsPerPage}
        />
        <PaginationBox
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          setCurrentPageNumber={this.setCurrentPageNumber}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={this.setRowsPerPage}
        />
      </Fragment>
    );
  }
}

export default DataTable;
