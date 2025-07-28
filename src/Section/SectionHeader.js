import '../App.css';
import React from 'react';

function SectionHeader(props) {
    return (
        <div className="Header">
            <div className="Left">
                <p>{props.header}</p>
            </div>
            <div className="Right">
                <p>{props.itemsChecked}/{props.itemsAll}</p>
            </div>
        </div>
    );
}

export default SectionHeader;