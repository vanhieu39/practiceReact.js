import React from "react";
import "./App.css";

// Import Component
import Header from './components/Headers'
import Product from './components/Product'


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Product/>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <Product/>
          </div>
      </div>
    </div>
  );
}

export default App;
