import React, { Component } from "react";

class Smartphone extends Component {
  render() {
    return (
      <div className="Smartphone">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <div className="card bg-light" style={{ width: '275px' }}>
              <img
                className="card-img-top"
               src={require('../img/sp_blackberry.png')}
                alt="Card image"
                style={{ maxWidth: "100%", height: 250 }}
              />
              <div className="card-body text-center">
                <h4 className="card-title text-center">Blackberry</h4>
                <p className="card-text">
                  BlackBerry is a line of smartphones, tablets, and services
                  originally designed
                </p>
                <a href="#" className="btn btn-primary">
                  Detail
                </a>
                <a href="#" className="btn btn-danger">
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Smartphone;
