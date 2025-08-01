import React, {Component} from 'react';
import './App.css';
import Section from './Section/Section';
import data from './data.json';
// todo SK / EN translate
// todo IDs to sections and items
// todo man / woman
// todo bussiness trip / holiday
// todo summer / winter

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

    return (
      <div className="App">
        {data.content.map(section => {
          return <Section section={section}/>
        })}
      </div>
    );
  }
}

export default App;
