import React, { Component } from 'react';
import Navigation from "./components/Navigation/Navigation";
//import AboutUs from "./components/AboutUs/AboutUs";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import './App.css';

class App extends Component{
  constructor()
  {
    super();
    this.state={
      input:'',
      route:'signin'
    }
  }

  onInputchange =(event)=>{
      console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  onRouteChange= () =>{
    this.setState({route:'home'});
  }
  render(){
    return (
      <div className="App">
        <div>
          <Navigation />
          <Rank />
          <ImageLinkForm 
          onInputchange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;
