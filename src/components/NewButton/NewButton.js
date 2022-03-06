import React from 'react';
import { Button } from 'react-bootstrap'
import './NewButton.css';
/**
 * Under the hood this will use bootstrap-react Button but it will be customized to exclude certain things 
 */
export default class NewButton extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <Button variant= 'outline-*' className='buttonStyle'>
            {this.props.context}
          </Button>
        );
    }
}