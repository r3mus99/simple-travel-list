import './App.css';
import Item from './Item';
import React, { Component } from 'react';
import ItemButton from './ItemButton';

class HiddenSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemsVisible: false
        }
    }

    handleClick = () => {
        const newValue = !this.state.itemsVisible;
        // alert("i am handling click")
        this.setState({itemsVisible: newValue});
    }

    render() {
        const buttonDisabled = this.props.items.length === 0;
        const items = this.state.itemsVisible 
            ? this.props.items.map(item => {
                return (
                    <Item 
                        label={item}
                        id={item} /* todo refactor */
                        onChange={(item, value) => {}}
                        onVisibilityChange={(item, value) => {}}
                        /* value={this.state[item]}*/
                    />
                )
            })
            : null;

        return(
            <div>
                <ItemButton 
                    itemsVisible={this.state.itemsVisible}
                    disabled={buttonDisabled}
                    onClick={this.handleClick}/>
                { items }
            </div>
        );
    }
}

export default HiddenSection;