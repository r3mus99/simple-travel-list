import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class SingleItem extends Component {


    render() {
        return(
            <div>
                <FormControlLabel
                    control={<Checkbox/>}
                    label={this.props.label}
                />
            </div>
        )
    }

}

export default SingleItem;