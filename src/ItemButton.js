import './App.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/KeyboardArrowDown';

class ItemButton extends Component {

    render() {
        return(
            <div style={{width: "auto"}}>
                <Button fullWidth>
                    <Icon/>
                </Button>
            </div>
        );
    }

}

export default ItemButton;