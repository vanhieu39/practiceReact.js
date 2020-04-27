import React, { Component } from "react";
// Import Component

class Reset extends Component {
  onResetDeault=()=>{
    this.props.onSettingDefault(true)
  }
  render() {
    return (
        <button type="button" className="btn btn-primary"
        onClick={this.onResetDeault}
        >
        reset
      </button>
    );
  }
}

export default Reset;
