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

        this.handleItemChange = this.handleItemChange.bind(this);
    }

    handleItemChange(item, value) {
        var actualItems = this.state.itemsChecked;
        if (value) {
            this.setState({
                itemsChecked: [...actualItems, item]
            });
        } else {
            this.setState(prevState => ({
                itemsChecked: prevState.itemsChecked.filter(h => h !== item)
            }));
        }

    }

    handleItemVisibilityChange = (item, value) => {
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


    }

    render() {

        const items = this.props.items.map(item => {
            return (
                <Item
                    label={item}
                    id={item} /* todo refactor */
                    onChange={this.handleItemChange}
                    onVisibilityChange={this.handleItemVisibilityChange}
                    value={this.state[item]}
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
                    itemsAll={itemsVisible}></SectionHeader>
                {items}
                <LinearProgress variant="determinate" color="secondary" value={progress} />
                <HiddenSection items={this.state.itemsHidden} />
                {/* <div>{JSON.stringify(this.state)}</div> */}
            </div>
        );
    }

}

export default Section;