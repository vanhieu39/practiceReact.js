import React, { Component } from "react";

class PopupSmartphone extends Component {
  render() {
    return (
      <div className="modal fade" id={this.props.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{this.props.phoneName}</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Price</td>
                    <td>{this.props.price}</td>
                  </tr>
                  <tr>
                    <td>Screen</td>
                    <td>{this.props.screen}</td>
                  </tr>
                  <tr>
                    <td>frontCamera</td>
                    <td>{this.props.frontCamera}</td>
                  </tr>
                  <tr>
                    <td>backCamera</td>
                    <td>{this.props.backCamera}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PopupSmartphone;
