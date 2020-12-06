import React, { Component } from "react";
import DataTable from "./DataTable";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <DataTable rows={this.props.rows || []} />
      </div>
    );
  }
}

export default App;
