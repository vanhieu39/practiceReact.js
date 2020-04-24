import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import Promotion from "./Components/Promotion";
import Smartphone from "./Components/Smartphone";

import smartphones from "./Data/SmartphoneData";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spInfo: smartphones,
    };
  }
  render() {
   let elemSmartphone = this.state.spInfo.map((sp,index)=>{
     return <Smartphone 
                id = {sp.id}
                phoneName = {sp.name}
                desc={sp.desc}
                imgURL = {require(`${sp.img}`)}
                price = {sp.price}
                screen = {sp.screen}
                frontCamera = {sp.frontCamera}
                backCamera = {sp.backCamera}
              />     
   })
    return (
      <div className="App">
        <Header />
        <Carousel />
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
          {elemSmartphone}
          </div>
        </section>
        <Promotion />
      </div>
    );
  }
}

export default App;
