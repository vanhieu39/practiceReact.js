import React, { Component } from "react";
import "./App.css";

// Import Component


class App extends Component {
 
  constructor(props){
    super(props)
    this.state = {
      products: [
        {
          id:1,
          name:"Apple Iphone 6 plus 16GB",
          price:"15000000",
          status: true,
          image:"https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/i/p/iphone-6-128gb-quoc-te-like-new-didongviet-3_1.jpg"
        },
        {
          id:2,
          name:"Note 7",
          price:"20000000",
          status: true,
          image:"https://clickbuy.com.vn/uploads/2019/08/thumb_RMN7_6.1.jpg"
        },
        {
          id:3,
          name:"Apple Iphone xmax",
          price:"30000000",
          status: true,
          image:"https://i1.wp.com/www.bebright.com.ng/wp-content/uploads/2019/03/iphone-xmax-1.jpg?fit=680%2C680&ssl=1",
        }
      ],
      isActice:false
    }
  }
  onSetState = () =>{
    this.setState({isActice: !this.state.isActice})
  }
  onClick(){
    console.log("app.js")
  };
  render() {
  
    let elemetns = this.state.products.map((product,index)=>{
      if(this.state.isActice){
        return   <tr key={index}>
                    <td scope="row">{index+1}</td>
                    <td>{product.name}</td>
                    <td><span>{product.price}</span></td>
                  </tr>
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
                State
              </a>
            </li>
          
          </ul>
        </nav>

        <div className="container">
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
               {elemetns}
              </tbody>
            </table>
             <button 
             ype="button" 
             className="btn btn-primary"
             onClick={this.onSetState}
             >
               Actice:{this.state.isActice?'true':"false"}
               </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
