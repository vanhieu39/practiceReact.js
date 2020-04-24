import React, { Component } from "react";
import PopupSmartphone from './popupSmartphone'

import swal from 'sweetalert';

class Smartphone extends Component {
  handlerCart=()=>{
    swal({
      title: "Are you sure?",
      text: "Your money wil be discount!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("You lost your money!", {
          icon: "success",
        });
      } else {
        swal("Your money is safe!");
      }
    });
  }
  render() {
    return (
      <div className="Smartphone">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <div className="card bg-light" style={{ width: '275px' }}>
              <img
                className="card-img-top"
               src={this.props.imgURL}
                alt="Card image"
                style={{ maxWidth: "100%", height: 250 }}
              />
              <div className="card-body text-center">
                <h4 className="card-title text-center">{this.props.phoneName}</h4>
                <h4 className="card-title text-center">{this.props.price}</h4>
                <p className="card-text">
                 {this.props.desc}
                </p>
                <a  className="btn btn-primary" data-toggle="modal" data-target={`#${this.props.id}`}>
                  Detail
                </a>
                <a  className="btn btn-danger"
                  onClick={this.handlerCart}
                >
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <PopupSmartphone id={this.props.id}
                phoneName = {this.props.phoneName}
                desc={this.props.desc}
                price = {this.props.price}
                screen = {this.props.screen}
                frontCamera = {this.props.frontCamera}
                backCamera = {this.props.backCamera}

        />
      </div>
    );
  }
}
export default Smartphone;
