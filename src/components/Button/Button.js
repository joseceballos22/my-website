import React from 'react';
import { Button } from 'react-bootstrap'
import './Button.css';
/**
 * Under the hood this will use bootstrap-react Button but it will be customized to exclude certain things 
 */
class Button extends React.Component {
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