import React,{Component} from "react";

class Product extends Component {
  // constructor(props){
  //   super(props)
  //   this.addToCard = this.addToCard.bind(this)
  //   console.log(props)
  // }
  addToCard = ()=>{
    alert(this.props.children)
  };
  render(){
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
             <img src={this.props.image}/>
              <div className="caption">
                  <h3>{this.props.children}</h3>
                  <p>
                   {this.props.price} vnđ
                  </p>
                  <p>
                    <a 
                    className="btn btn-primary"
                    onClick={this.addToCard}
                    >Mua ngay</a>
                  </p>
                </div>
           </div>
        </div>  
    
    );
  }
}

export default Product;
