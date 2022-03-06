import React from 'react';
import './TopSectionOfWebsite.css';
import { NewButton, ImageLink, Link } from '../index';
import { Container, Row, Col } from 'react-bootstrap';
import instagramImage from '../../images/instagramIcon.png';

/**
 * This Class will represent the top section of the website (In other words the dashboard of the website)
 */
 export default class TopSectionOfWebsite extends React.Component {
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
                    <NewButton context="Home"></NewButton>
                    <NewButton context="Store"></NewButton>
                    <NewButton context="About Us"></NewButton>
                    <NewButton context="Log In"></NewButton>
                    <ImageLink link="https://www.instagram.com/sweetsbymaria__/" image={instagramImage}></ImageLink>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col>
                  <Link link="https://www.SweetsByMaria.us" text="SweetsByMaria.us"></Link>
                </Col>
                <Col>
                  <NewButton context="Terms and Conditions"></NewButton>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}