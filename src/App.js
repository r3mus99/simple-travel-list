import React, { Component } from 'react';
import './App.css';
import SingleItem from './SingleItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SingleItem label="občianský preukaz"/>
        <SingleItem label="cestovný pas"/>
        <SingleItem label="kartička cestovného poistenia"/>
        <SingleItem label="kartička zdravotného poistenia"/>
      </div>
      
    );
  }
}

export default App;
