import './App.css';
import React, { Component } from 'react';
import Item from './Item';
import LinearProgress from '@material-ui/core/LinearProgress';
import ItemButton from './ItemButton';

class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsChecked: 0,
            itemsHidden: 0,
            moreDisabled: true,
            // todo refactor
            itemsAvailable: this.props.items.filter((item) => item !== "ColoredLine").length
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

    handleItemVisibilityChange = (value) => {
        var actualHidden = this.state.itemsHidden;
        if (value) {
            actualHidden++;
        } else {
            actualHidden--;
        }

        this.setState({ 
            moreDisabled: actualHidden === 0,
            itemsHidden: actualHidden 
        });
    }

    render() {

        const items = this.props.items.map(item => {
            if (item === "ColoredLine") {
                return (<hr/>);
            } else {
                return (
                    <Item 
                        label={item}
                        id={item} /* todo refactor */
                        onChange={this.handleItemChange}
                        onVisibilityChange={this.handleItemVisibilityChange}
                        value={this.state[item]}
                    />
                )
            }
        });

        const itemsAll = this.state.itemsAvailable - this.state.itemsHidden;
        const itemsChecked = this.state.itemsChecked;
        const progress = (itemsChecked / itemsAll) * 100;

        return(
            <div className="Section">
                <div className="Header">
                    <div className="Left">
                        <p>{this.props.header}</p>
                    </div>
                    <div className="Right">
                        <p>{itemsChecked}/{itemsAll}</p>
                    </div>
                </div>
                {items}
                {/* <div>{JSON.stringify(this.state)}</div> */}
                <LinearProgress variant="determinate" color="secondary" value={progress} />
                <ItemButton disabled={this.state.moreDisabled}/>
            </div>
        );
    }

}

export default Section;