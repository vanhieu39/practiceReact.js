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
    console.log("HIeu");
    console.log(this.state.spInfo);
    return (
      <div className="App">
        <Header />
        <Carousel />
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <Smartphone />
            <Smartphone />
            <Smartphone />
            <Smartphone />
          </div>
        </section>
        <Promotion />
      </div>
    );
  }
}

export default App;
