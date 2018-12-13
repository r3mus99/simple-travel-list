import '../App.css';
import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";

class SectionVisible extends Component {

    render() {
        const customEnterAnimation = {
            from: { transform: 'scale(0.8, 0.8) translateY(0px)' },
            to:   { transform: 'scale(0.2, 0.2) translateY(+20px)' }
        };

        return (
            <div>
                <FlipMove
                    duration={100}
                    enterAnimation={'accordionVertical'}
                    leaveAnimation={'none'} // todo
                    >
                    {this.props.items}
                </FlipMove>

                <LinearProgress variant="determinate" color="secondary" value={this.props.progress} />
            </div>
        );
    }
}

export default SectionVisible;