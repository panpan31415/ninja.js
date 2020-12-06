import React from "react";
import _ from "lodash";
import "./styles.scss";

class RowsPerPageInput extends React.Component {
  onChangeHandler = (event) => {
    this.props.setRowsPerPage(event.target.value);
  };
  render() {
    const { rowsPerPage, min, max } = this.props;
    return (
      <div className="rows-per-page-input">
        <label
          className="rows-per-page-input__label"
          htmlFor="rows-per-page-input">
          rows per page:
        </label>
        <select
          className="rows-per-page-input__input"
          id="rows-per-page-input"
          type="number"
          value={rowsPerPage}
          onChange={this.onChangeHandler}>
          {_.range(min, max + 1).map((number) => {
            return (
              <option key={number} value={number}>
                {number}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default RowsPerPageInput;
