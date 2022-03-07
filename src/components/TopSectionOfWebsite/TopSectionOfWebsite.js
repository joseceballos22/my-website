import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopSectionOfWebsite.css';
import { NewButton, ImageLink, Link } from '../index';
import { Container, Row, Col } from 'react-bootstrap';
import instagramImage from '../../images/instagramIcon.png';
import { Page } from '../../core/constants';

/**
 * This Class will represent the top section of the website (In other words the dashboard of the website)
 */
export default function TopSectionOfWebsite() {
  // Need to convert the React Component Class into a function in order to use the hooks   
  let navigate = useNavigate(); 
        return (
            <div className='topSectionOfWebsite'>
            <Container>
              <Row>
                <Col>
                  760-123-4567
                </Col>
                <Col>
                    <NewButton context="Home" onClick={() => navigate('/')}></NewButton>
                    <NewButton context="Store" onClick={() => navigate('/store')} ></NewButton>
                    <NewButton context="About Us" onClick={() => navigate('/about-us')} ></NewButton>
                    <NewButton context="Log In" onClick={() => navigate('/log-in')} ></NewButton>
                    <ImageLink link="https://www.instagram.com/sweetsbymaria__/" image={instagramImage}></ImageLink>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col>
                  <Link link="https://www.SweetsByMaria.us" text="SweetsByMaria.us"></Link>
                </Col>
                <Col>
                  <NewButton context="Terms and Conditions" onClick={() => navigate('/terms-and-conditions')} ></NewButton>
                </Col>
              </Row>
            </Container>
          </div>
        );
}