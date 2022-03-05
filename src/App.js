import React from 'react';
// import Button from 'react-bootstrap/Button';
import { Container, Image, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Adding the boot strap css 
import sweetsByMaria from './images/sweetsByMaria.png';
import bestInTheHD from './images/bestInTheHD.png';
import openNow from './images/openNow.png';
import instagramImage from './images/instagram.png';
import './App.css';

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
      {/* This will represent the top section of the website */}
        <div className='topSectionOfWebsite'>
          <Container>
            <Row>
              <Col>
                760-123-4567
              </Col>
              <Col>
                  <a href='https://www.instagram.com/sweetsbymaria__/' className='linkText'>
                    <img src={instagramImage} className="iconImageStyle"></img>
                  </a>
                  <Button className='buttonStyle'>
                    Log In
                  </Button>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col>
                <a href='https://www.SweetsByMaria.us' className='linkText'>
                SweetsByMaria.us
                </a>
              </Col>
              <Col>
                  <Button className='buttonStyle'>
                    Home
                  </Button>
                  <Button className='buttonStyle'>
                    Store
                  </Button>
                  <Button className='buttonStyle'>
                    About Us
                  </Button>
              </Col>
            </Row>
          </Container>
        </div>

        <div className='middleOfWebsite'>
            Sweets By Maria
          {/* <Card className='cardStyle'>
            <Card.Header as="h1"> Card Header</Card.Header>
            <Card.Title>
              Hello World
            </Card.Title>
            <Card.Text>
              Card Text hello world 1211111111111111111111111111111111111111111111111111111111111111111111111111111
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