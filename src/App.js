import React, { Component } from 'react';
import './App.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import Section from './Section/Section';

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

    const clothingForNight = [
      "pyžamo",
      "štuple do uší",
      "maska na oči"
    ];

    const clothingOther = [
      "spodné prádlo",
      "ponožky"
    ];

    const clothingMain = [
      "nohavice (1ks/4dni)",
      "tričko / sveter / košeľa (1-2ks/deň)"
    ];

    const cosmetics = [
      "dezodorant",
      "voňavka",
      "zubná kefka (+ pasta)"
    ];

    const medicine = [
      "lieky, ktoré beriem",
      "lieky, ktoré by sa mohli hodiť",
      "kartička cestovného poistenia",
      "kartička zdravotného poistenia",
    ];

    // todo replace with map
    const doklady = [
      "peniaze a platobná karta",
      "občianský preukaz",
      "vodičský preukaz",
      "cestovný pas",
    ];

    const electronics = [
      "telefón (+ nabíjačka)",
      "slúchadlá",
      "powerbanka"
    ];

    return (
      <div className="App">
        {/* <LinearProgress color="secondary" variant="determinate" value={this.state.completed} /> */}
        <Section header="Doklady" items={doklady} />
        <Section header="Elektronika" items={electronics} />
        <Section header="Lieky" items={medicine} />
        <Section header="Oblečenie - hlavné" items={clothingMain} />
        <Section header="Oblečenie - doplnky" items={clothingOther} />
        <Section header="Na spanie" items={clothingForNight} />
        <Section header="Kozmetika" items={cosmetics} />
      </div>
    );
  }
}

export default App;
