import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import LinearProgress from '@material-ui/core/LinearProgress';
import Section from './Section';

class App extends Component {
  
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      // this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };
  
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

    // todo replace with map
    const testItems = ["test1", "test2", "test3"];
    const itemsMain = [
      "peniaze a platobná karta",
      "občianský preukaz",
      "vodičský preukaz",
      "cestovný pas",
      "kartička cestovného poistenia",
      "kartička zdravotného poistenia",
      "dokumenty od cestovnej kancelárie",
      "ColoredLine",
      "lieky, ktoré beriem",
      "lieky, ktoré by sa mohli hodiť",
      "ColoredLine",
      "okuliare",
      "telefón (+ nabíjačka)",
      "zámky na batožinu (+ kľúče)"
    ]

    return (
      <div className="App">
        <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
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
          <Item label="lieky, ktoré beriem"/>
          <Item label="lieky, ktoré by sa mohli hodiť"/>
          <ColoredLine color="gainsboro" />
          <Item label="okuliare"/>
          <Item label="telefón (+ nabíjačka)"/>
          <Item label="zámky na batožinu (+ kľúče)"/>
        </div>
        <div className="Section">
          <p className="Header1">Oblečenie</p>
          <Item label="košele"/>
          <Item label="nohavice"/>
          <Item label="oblek a kravata"/>
          <Item label="plavky"/>
        </div>
        <Section header="test1" items={testItems}/>
        <Section header="test2" items={itemsMain}/>
      </div>
    );
  }
}

export default App;
