import './App.css';
import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

class SingleItem extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            chcboxValue: true
        };
    
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(){
        this.setState({chcboxValue: !this.state.chcboxValue});
    }

    render() {
        return(
            <div className="item">
                <Checkbox checked={this.state.chcboxValue}/>
                <Button onClick={this.handleChange}>
                    {this.props.label}
                </Button>
            </div>
        )
    }
}

export default SingleItem;