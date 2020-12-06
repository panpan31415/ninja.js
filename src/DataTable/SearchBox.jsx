import React from "react";

class SearchBox extends React.Component {
  onChange = (event) => this.props.updateSearchText(event.target.value);
  render() {
    return (
      <div className="p-b-1">
        <input
          type="search"
          className="form-control"
          placeholder="Søg brugere"
          onChange={this.onChange}
          value={this.props.searchText}
        />
      </div>
    );
  }
}

export default SearchBox;
