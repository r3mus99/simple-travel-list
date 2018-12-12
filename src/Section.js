import './App.css';
import React, { Component } from 'react';
import Item from './Item';
import LinearProgress from '@material-ui/core/LinearProgress';
import HiddenSection from './HiddenSection';

class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsChecked: 0,

            itemsHidden: [],
            itemsVisible: this.props.items.filter((item) => item !== "ColoredLine"),
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

    handleItemVisibilityChange = (item, value) => {
        var actualHidden = this.state.itemsHidden;
        var actualVisible = this.state.itemsVisible;

        if (value) {
            // add item to hidden array
            this.setState({ 
                itemsHidden: [ ...actualHidden, item] 
            });
            this.setState(prevState => ({ 
                itemsVisible: prevState.itemsVisible.filter(h => h !== item) 
            }));
        } else {
            this.setState({ 
                itemsVisible: [ ...actualVisible, item] 
            });
            // remove item from hidden array
            this.setState(prevState => ({ 
                itemsHidden: prevState.itemsHidden.filter(h => h !== item) 
            }));
        }


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

        const itemsAll = this.state.itemsVisible.length;
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
                {/* <HiddenSection items={this.state.itemsVisible}/> */}
                <HiddenSection items={this.state.itemsHidden}/>
            </div>
        );
    }

}

export default Section;