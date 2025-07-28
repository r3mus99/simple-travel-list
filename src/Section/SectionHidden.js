import '../App.css';
import React, { Component } from 'react';
import ItemButton from './content/ItemButton';

class SectionHidden extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentVisible: false
        }
    }

    handleClick = () => {
        const newValue = !this.state.contentVisible;
        this.setState({ contentVisible: newValue });
    };

    render() {
        const button = this.props.items.length === 0
            ? null
            : <ItemButton
                contentVisible={this.state.contentVisible}
                onClick={this.handleClick} />

        const items = this.state.contentVisible
            ? this.props.items
            : null;

        return (
            <div>
                {button}
                {items}
            </div>
        );
    }
}

export default SectionHidden;