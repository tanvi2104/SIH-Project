import React, { Component } from 'react';
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import axios from 'axios';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import './App.css';

const app = new axios.App({ 
  method: "POST",
    url: "https://detect.roboflow.com/tree-top-view/2",
    params: {
        api_key: "rdlxQ2kUnRiOkQO6wjjD",
        image: "IMAGE_URL"
    }
})
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error.message);
});



class App extends Component{
  constructor()
  {
    super();
    this.state={
      input:'',
      image:''
    }
  }

  onInputChange =(event)=>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({image: this.state.input});
    app.models.predict("rdlxQ2kUnRiOkQO6wjjD", this.state.input)
    
  }

  onRouteChange= (route) =>{
    if(route === 'back'){
      this.setState({isAbout: false})
    }
    else if(route==='home'){
      this.setState({isAbout: true})
    }
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
