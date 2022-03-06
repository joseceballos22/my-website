import React from 'react';
import './Link.css';

class Link extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <a href={this.props.link} className='linkText'>
            {this.props.text}
            </a>
        );
    }
}