import '../../App.css';
import React from 'react';
import Button from '@mui/material/Button';
import IconDown from '@mui/icons-material/KeyboardArrowDown';
import IconUp from '@mui/icons-material/KeyboardArrowUp';

function ExpandButton(props) {
    return (
        <div style={{width: "auto"}}>
            <Button
                fullWidth disabled={props.disabled}
                onClick={props.onClick}>
                {props.contentVisible && !props.disabled
                    ? <IconUp/>
                    : <IconDown/>}
            </Button>
        </div>
    );
}

export default ExpandButton;