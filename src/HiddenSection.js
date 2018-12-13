import './App.css';
import React, { Component } from 'react';
import ItemButton from './ItemButton';

class HiddenSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentVisible: false
        }
    }

    handleClick = () => {
        const newValue = !this.state.contentVisible;
        this.setState({contentVisible: newValue});
    };

    render() {
        const buttonDisabled = this.props.items.length === 0;
        const items = this.state.contentVisible
            ? this.props.items
            : null;

        return(
            <div>
                <ItemButton
                    contentVisible={this.state.contentVisible}
                    disabled={buttonDisabled}
                    onClick={this.handleClick}/>
                { items }
            </div>
        );
    }
}

export default HiddenSection;