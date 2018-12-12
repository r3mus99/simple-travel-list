import './App.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import IconDown from '@material-ui/icons/KeyboardArrowDown';
import IconUp from '@material-ui/icons/KeyboardArrowUp';

class ItemButton extends Component {

    render() {
        const icon = this.props.itemsVisible && !this.props.disabled
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