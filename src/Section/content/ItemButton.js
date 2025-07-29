import '../../App.css';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ItemButton = (props)=> {
    const handleChange = () => props.onChange(props.id);
    const handleVisibility = () => props.onVisibilityChange(props.id);

    return (
        <div className="Item">
            <Checkbox style={{ width: 'auto', color: props.color }}
                checked={props.checked}
                onClick={handleChange}
                disabled={!props.visible} />

            <Button
                style={{ justifyContent: "left", width: '90%', color: props.color }}
                onClick={handleChange}
                disabled={!props.visible}>
                {props.label}
            </Button>

            <IconButton style={{ width: 'auto' }}
                aria-label="hide"
                className="GrayIcon"
                onClick={handleVisibility}>
                {!props.visible ? <Visibility/> : <VisibilityOff/>}
            </IconButton>

        </div>
        )

}

export default ItemButton;