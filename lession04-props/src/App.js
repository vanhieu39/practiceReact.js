import React, { Component } from "react";
import "./App.css";

// Import Component
import Product from "./components/Product";

class App extends Component {
  render() {
    let product = [
      {
        id:1,
        name:"Apple Iphone 6 plus 16GB",
        price:"15000000",
        status: false,
        image:"https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/i/p/iphone-6-128gb-quoc-te-like-new-didongviet-3_1.jpg"
      },
      {
        id:2,
        name:"Note 7",
        price:"20000000",
        status: false,
        image:"https://clickbuy.com.vn/uploads/2019/08/thumb_RMN7_6.1.jpg"
      },
      {
        id:3,
        name:"Apple Iphone xmax",
        price:"30000000",
        status: true,
        image:"https://i1.wp.com/www.bebright.com.ng/wp-content/uploads/2019/03/iphone-xmax-1.jpg?fit=680%2C680&ssl=1",
      }
    ]
    let elemetns = product.map((product,index)=>{
      if(product.status){
        return  <Product 
              key={index}
              price={product.price}
              image= {product.image}
            >name={product.name}</Product>
      }
    })
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </nav>

        <div className="container">
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               {elemetns}
              </div>
            </div>
          
        </div>
      </div>
    );
  }
}

export default App;
