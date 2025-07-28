import '../App.css';
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

function SectionVisible(props) {
    return (
        <div>
            {props.items}
            <LinearProgress variant="determinate" color="secondary" value={props.progress}/>
        </div>
    );
}

export default SectionVisible;