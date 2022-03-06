import React from "react";
import './ImageLink.css';

/** An Image link is a Image you can click and will redirect you to a link */
class ImageLink extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <a href={this.props.link} className='linkText spaceElementsHorz'>
            <img src={this.props.image} className="iconImageStyle"></img>
          </a>
        );
    }
}
