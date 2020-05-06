import React, { Component } from "react";

//import component
import Search from './TaskSearch'
import Sort from './TaskSort'

class Control extends Component {
  render() {
    return (
        <div className="row mt-15">
            {/* search */}
            <Search
            onSearch= {this.props.onSearch}
            />
            {/* sort */}
            <Sort
            onSort = {this.props.onSort}
            sortBy = {this.props.sortBy}
            sortValue = {this.props.sortValue}
            />
        </div>
    )
  }
}

export default Control;
