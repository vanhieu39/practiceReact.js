import React, { Component } from "react";

class Headers extends Component {
  showInfor(product){
    if(product.status){
      return   <h3>
                ID : {product.id}<br/>
                Name: {product.name}<br/>
                Price: {product.price}<br/>
                Status: {product.status?'Actice':'Pending'}
            </h3>
    }
  }
  render() {
    let product={
      id: 1,
      name:"Iphone 7 plus",
      price:15000000,
      status: true
    };
    let users = [
      {
        id:1,
        name:"Nguyen van A",
        age:18
      },
      {
        id:2,
        name:"Nguyen van B",
        age:20
      }, {
        id:3,
        name:"Nguyen van c",
        age:30
      }
    ];
    let elements = users.map((user,index)=>{
      return <div key={user.id}>
                <h2>Tên: {user.name}</h2>
                <p>Tuổi: {user.age}</p>
              </div>
    });
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light">
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
        <div className="ml-30">
          {this.showInfor(product)}
          <br/>
          <hr/>
          {elements}
        </div>
      </div>
    );
  }
}

export default Headers;
