import '../../App.css';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import IconDown from '@mui/icons-material/KeyboardArrowDown';
import IconUp from '@mui/icons-material/KeyboardArrowUp';

class ItemButton extends Component {

    render() {
        const icon = this.props.contentVisible && !this.props.disabled
            ? <IconUp/>
            : <IconDown/>;

        return(
            <div style={{width: "auto"}}>
                <Button 
                    fullWidth disabled={this.props.disabled}
                    onClick={this.props.onClick}>
                    {icon}
                </Button>
            </div>
        );
    }

}

export default ItemButton;