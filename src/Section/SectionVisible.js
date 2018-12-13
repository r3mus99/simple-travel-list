import '../App.css';
import React, { Component } from 'react';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";

class SectionVisible extends Component {

    render() {
        return (
            <div>
                {this.props.items}
                <LinearProgress variant="determinate" color="secondary" value={this.props.progress} />
            </div>
        );
    }
}

export default SectionVisible;