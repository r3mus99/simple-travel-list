import '../App.css';
import React, { Component } from 'react';

class SectionHeader extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Left">
                    <p>{this.props.header}</p>
                </div>
                <div className="Right">
                    <p>{this.props.itemsChecked}/{this.props.itemsAll}</p>
                </div>
            </div>
        );
    }
}

export default SectionHeader;