import './App.css';
import React, { Component } from 'react';
import Item from './Item';
import LinearProgress from '@material-ui/core/LinearProgress';
import HiddenSection from './HiddenSection';
import SectionHeader from './Section/SectionHeader';

class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsChecked: [],
            itemsHidden: [],
            itemsVisible: this.props.items,
        };
    }

    handleItemChange = (item) => {
        const isItemChecked = this.isItemChecked(item);
        const actualItems = this.state.itemsChecked;

        if (isItemChecked) {
            this.setState(prevState => ({
                itemsChecked: prevState.itemsChecked.filter(h => h !== item)
            }));
        } else {
            this.setState({
                itemsChecked: [...actualItems, item]
            });
        }
    };

    isItemChecked(item) {
        return this.state.itemsChecked.indexOf(item) !== -1;
    }

    isItemVisible(item) {
        return this.state.itemsVisible.indexOf(item) !== -1;
    }

    handleItemVisibilityChange = (item) => {
        const value = this.isItemVisible(item);
        var actualHidden = this.state.itemsHidden;
        var actualVisible = this.state.itemsVisible;

        if (value) {
            // add item to hidden array
            this.setState({
                itemsHidden: [...actualHidden, item]
            });
            this.setState(prevState => ({
                itemsVisible: prevState.itemsVisible.filter(h => h !== item)
            }));
        } else {
            this.setState({
                itemsVisible: [...actualVisible, item]
            });
            // remove item from hidden array
            this.setState(prevState => ({
                itemsHidden: prevState.itemsHidden.filter(h => h !== item)
            }));
        }
    };

    render() {

        const items = this.props.items.map(item => {
            return (
                <Item
                    label={item}
                    id={item} /* todo refactor */
                    onChange={this.handleItemChange}
                    onVisibilityChange={this.handleItemVisibilityChange}
                    checked={this.isItemChecked(item)}
                    visible={this.isItemVisible(item)}
                />
            )
        });

        const itemsVisible = this.state.itemsVisible.length;
        const itemsChecked = this.state.itemsChecked.length;
        const progress = (itemsChecked / itemsVisible) * 100;

        return (
            <div className="Section">
                <SectionHeader
                    header={this.props.header}
                    itemsChecked={itemsChecked}
                    itemsAll={itemsVisible}/>
                {items}
                <LinearProgress variant="determinate" color="secondary" value={progress} />
                <HiddenSection items={this.state.itemsHidden} />
                <div>{"checked: " + JSON.stringify(this.state.itemsChecked)}</div>
                <div>{"visible: " + JSON.stringify(this.state.itemsVisible)}</div>
                <div>{"hidden: " + JSON.stringify(this.state.itemsHidden)}</div>
            </div>
        );
    }

}

export default Section;