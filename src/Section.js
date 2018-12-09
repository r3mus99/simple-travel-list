import './App.css';
import React, { Component } from 'react';
import Item from './Item';
import LinearProgress from '@material-ui/core/LinearProgress';

class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsChecked: 0,
            itemsAvailable: this.props.items.length
        };

        this.handleItemChange = this.handleItemChange.bind(this);
    }

    handleItemChange(item, value) {
        var actualItems = this.state.itemsChecked;
        if (value) {
            actualItems++;
        } else {
            actualItems--;
        }

        this.setState({ 
            [item]: value,
            itemsChecked: actualItems 
        });
    }

    render() {
        const items = this.props.items.map(item => (
            <Item 
                label={item}
                id={item} /* todo refactor */
                onChange={this.handleItemChange}
                value={this.state[item]}
            />
        ));

        const itemsAll = this.state.itemsAvailable;
        const itemsChecked = this.state.itemsChecked;
        const progress = (itemsChecked / itemsAll) * 100;

        return(
            <div className="Section">
                <p className="Header1">{this.props.header} {itemsChecked}/{itemsAll}</p>
                {items}
                <div>{JSON.stringify(this.state)}</div>
                <LinearProgress variant="determinate" color="secondary" value={progress} />
            </div>
        );
    }

}

export default Section;