import React from 'react';
import './TopSectionOfWebsite.css';
import { Button, ImageLink, Link } from '../index';
import { Container, Row, Col } from 'react-bootstrap';
import instagramImage from '../../images/instagramIcon.png';

/**
 * This Class will represent the top section of the website (In other words the dashboard of the website)
 */
class TopSectionOfWebsite extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='topSectionOfWebsite'>
            <Container>
              <Row>
                <Col>
                  760-123-4567
                </Col>
                <Col>
                    <Button context="Home"></Button>
                    <Button context="Store"></Button>
                    <Button context="About Us"></Button>
                    <Button context="Log In"></Button>
                    <ImageLink link="https://www.instagram.com/sweetsbymaria__/" image={instagramImage}></ImageLink>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col>
                  <Link link="https://www.SweetsByMaria.us" text="SweetsByMaria.us"></Link>
                </Col>
                <Col>
                  <Button context="Terms and Conditions"></Button>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}