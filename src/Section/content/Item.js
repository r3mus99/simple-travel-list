import '../../App.css';
import React, { Component } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

class SingleItem extends Component {

    handleChange = () => {
        this.props.onChange(this.props.id)
    };

    handleVisibility = () => {
        this.props.onVisibilityChange(this.props.id);
    };

    render() {
        let visibilityButton;
        if (!this.props.visible) {
            visibilityButton = <Visibility />;
        } else {
            visibilityButton = <VisibilityOff />;
        }


        return (
            <div className="item">
                <Checkbox style={{ width: 'auto' }}
                    checked={this.props.checked}
                    onClick={this.handleChange}
                    disabled={!this.props.visible} />

                <Button
                    style={{ justifyContent: "left", width: '90%' }}
                    onClick={this.handleChange}
                    disabled={!this.props.visible}>
                    {this.props.label}
                </Button>

                <IconButton style={{ width: 'auto' }}
                    aria-label="hide"
                    className="grayIcon"
                    onClick={this.handleVisibility}>
                    {visibilityButton}
                </IconButton>

            </div>
        )
    }
}

export default SingleItem;