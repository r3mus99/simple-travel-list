import '../App.css';
import React, { Component } from 'react';
import Item from './content/Item';
import SectionHidden from './SectionHidden';
import SectionHeader from './SectionHeader';
import SectionVisible from "./SectionVisible";

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
        // window.localStorage.setItem(this.props.header, JSON.stringify(this.state));
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
        // window.localStorage.setItem(this.props.header, JSON.stringify(this.state));
    };

    mapItem = (item) => {
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
    };

    render() {

        const itemsVisibleMapped = this.state.itemsVisible.map(this.mapItem);
        const itemsHiddenMapped = this.state.itemsHidden.map(this.mapItem);

        const itemsVisibleLength = this.state.itemsVisible.length;
        const itemsCheckedLength = this.state.itemsChecked
            .filter(item => this.isItemVisible(item)).length;
        // count only visible items as checked
        const progress = (itemsCheckedLength / itemsVisibleLength) * 100;

        return (
            <div className="Section">
                <SectionHeader
                    header={this.props.header}
                    itemsChecked={itemsCheckedLength}
                    itemsAll={itemsVisibleLength} />
                <SectionVisible
                    items={itemsVisibleMapped}
                    progress={progress} />
                <SectionHidden
                    items={itemsHiddenMapped} />
                {/*<div>{"checked: " + JSON.stringify(this.state.itemsChecked)}</div>*/}
                {/*<div>{"visible: " + JSON.stringify(this.state.itemsVisible)}</div>*/}
                {/*<div>{"hidden: " + JSON.stringify(this.state.itemsHidden)}</div>*/}
            </div>
        );
    }

}

export default Section;