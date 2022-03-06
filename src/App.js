import React from 'react';
// import Button from 'react-bootstrap/Button';
import { Container, Image, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Adding the boot strap css 
import sweetsByMaria from './images/sweetsByMaria.png';
import bestInTheHD from './images/bestInTheHD.png';
import openNow from './images/openNow.png';
import instagramImage from './images/instagramIcon.png';
import './App.css';
import { TopSectionOfWebsite } from './components';

class App extends React.Component {

  constructor() {
    super(); // Need to call super class constructor first before anything else
    this.state = {
      imageCount: 0, // Used to change the state in order to display another image 
    };
  }

  // Sets the document title 
  componentDidMount() {
    document.title = "Home | Sweets By Maria "
  }

  render() {
    return (
      <>
        <TopSectionOfWebsite></TopSectionOfWebsite>
        <div className='middleOfWebsite'>
            Sweets By Maria
          {/* <Card className='cardStyle'>
            <Card.Header as="h1"> Card Header</Card.Header>
            <Card.Title>
              Hello World
            </Card.Title>
            <Card.Text>
              Card Text hello world 
            </Card.Text>
            <Card.Body>
              Card Body
            </Card.Body>
          </Card> */}
        </div>
      </>
    );
  }
}
export default App