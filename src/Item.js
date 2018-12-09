import './App.css';
import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOn from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class SingleItem extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            checkBoxValue: false,
            visibility: false
        };

        // todo refactor
        this.handleChange = this.handleChange.bind(this);
        this.handleVisibility = this.handleVisibility.bind(this);
    }

    handleChange() {
        const newValue = !this.state.checkBoxValue;
        this.setState({checkBoxValue: newValue});
        this.props.onChange(this.props.id, newValue)
    }

    handleVisibility() {
        this.setState({visibility: !this.state.visibility});
    }

    render() {
        let visibilityButton;
        if (this.state.visibility) {
            visibilityButton = <VisibilityOn/>;
        } else {
            visibilityButton = <VisibilityOff/>;
        }


        return(
            <div className="item">
                <Checkbox 
                    checked={this.state.checkBoxValue}
                    onClick={this.handleChange}
                    disabled={this.state.visibility}/>
                <Button 
                    onClick={this.handleChange}
                    disabled={this.state.visibility}>
                    {this.props.label}
                </Button>
                <IconButton aria-label="hide" className="grayIcon"
                    onClick={this.handleVisibility}>
                    {visibilityButton}
                </IconButton>
            </div>
        )
    }
}

export default SingleItem;