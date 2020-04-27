import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1100345574.jpeg" alt="thumbnail"/>
                    <div className="caption">
                        <h3>Iphone 6</h3>
                        <p>16.000.000 VND</p>
                        <p>
                            <a href="#" className="btn btn-primary">Mua hàng</a>
                        </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Product;
