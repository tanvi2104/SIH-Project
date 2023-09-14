import React, { Component } from 'react';
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import './App.css';


class App extends Component{
  constructor()
  {
    super();
    this.state={
      input:'',
      image:''
    }
  }

  render(){
    return (
      <div className="App">
        <div>
          <Navigation />
          <Rank />
          <ImageLinkForm />
        </div>
      </div>
    );
  }
}

export default App;
