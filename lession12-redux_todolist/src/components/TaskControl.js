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
           
            />
            {/* sort */}
            <Sort/>
        </div>
    )
  }
}

export default Control;
