import '../App.css';
import React, { Component } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

class SectionVisible extends Component {

    render() {
        const customEnterAnimation = {
            from: { transform: 'scale(0.8, 0.8) translateY(0px)' },
            to:   { transform: 'scale(0.2, 0.2) translateY(+20px)' }
        };

        return (
            <div>
                {this.props.items}
                <LinearProgress variant="determinate" color="secondary" value={this.props.progress} />
            </div>
        );
    }
}

export default SectionVisible;