import React, { Component } from 'react';
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import './App.css';

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div className="App">
        <div>
          <Navigation />
          <ImageLinkForm />
        </div>
      </div>
      
    );
  }
}

export default App;
