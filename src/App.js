import React, { Component } from 'react';
import './App.css';
import Item from './Item';

class App extends Component {
  render() {

    // todo refactor
    const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 1
          }}
      />
    );

    return (
      <div className="App">
        <div className="Section">
          <p className="Header1">Hlavné</p>
          <Item label="peniaze a platobná karta"/>
          <Item label="občianský preukaz"/>
          <Item label="vodičský preukaz"/>
          <Item label="cestovný pas"/>
          <Item label="kartička cestovného poistenia"/>
          <Item label="kartička zdravotného poistenia"/>
          <Item label="dokumenty od cestovnej kancelárie"/>
          <ColoredLine color="gainsboro" />
          <Item label="Lieky, ktoré beriem"/>
          <Item label="Lieky, ktoré by sa mohli hodiť"/>
          <ColoredLine color="gainsboro" />
          <Item label="Okuliare"/>
          <Item label="Telefón (+ nabíjačka)"/>
          <Item label="zámky na batožinu (+ kľúče)"/>
        </div>
        <div className="Section">
          <p className="Header1">Oblečenie</p>
          <Item label="košele"/>
          <Item label="nohavice"/>
          <Item label="oblek a kravata"/>
          <Item label="plavky"/>
        </div>
      </div>
    );
  }
}

export default App;
