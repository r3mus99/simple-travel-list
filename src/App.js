import React, { Component } from 'react';
import './App.css';
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

    // todo replace with map
    const itemsMain = [
      "peniaze a platobná karta",
      "občianský preukaz",
      "vodičský preukaz",
      "cestovný pas",
      "kartička cestovného poistenia",
      "kartička zdravotného poistenia",
      "dokumenty od cestovnej kancelárie",
      "lieky, ktoré beriem",
      "lieky, ktoré by sa mohli hodiť",
      "okuliare",
      "telefón (+ nabíjačka)",
      "zámky na batožinu (+ kľúče)"
    ]

    const itemsClothes = [
      "košele",
      "nohavice",
      "oblek a kravata",
      "plavky"
    ]

    return (
      <div className="App">
        <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />

        <Section header="Hlavné" items={itemsMain} />
        <Section header="Oblečenie" items={itemsClothes} />
      </div>
    );
  }
}

export default App;
