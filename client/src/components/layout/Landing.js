import React, { Component } from "react";
// import "./Landing.css"
import Particles from 'react-particles-js';

import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button, Carousel, OverlayTrigger, Popover, ButtonToolbar } from "react-bootstrap";
// import { Popper } from 'react-popper';
import "./landing.css";


class Landing extends Component {

  render() {

    return (
      <div>
        <div className="background-sky">
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 200,
                  "density": {
                    "enable": true,
                    "value_area": 1500
                  }
                },
                "line_linked": {
                  "enable": true,
                  "opacity": 0.02
                },
                "move": {
                  "direction": "right",
                  "speed": 0.08
                },
                "color": {
                  "value": "#fff"
                },
                "size": {
                  "value": 1.5
                },
                "opacity": {
                  "anim": {
                    "enable": true,
                    "speed": .2,
                    "opacity_min": 0.05
                    }
                }
            },
            "retina_detect": true
        }} />
        </div>

        <div className="background-mountain">
         
          <div className="landing">
          
            <Container className="welcome ">
              
              <Row style={{ position: 'relative', zIndex: 3 }}>
                <Col lg={4} className="landing-bckgrnd">
                  <Card.Title className="card-title">
                  <img className="landing-logo" src={require('../../images/logo.svg')} alt="logo"></img>
                    <h1 className="title">Nomadic Security</h1>
                    <span className="h5 ">Travel Safely!</span>
                  </Card.Title>
                
                  <Card.Body className="card-content text-center">
                    <ul className="card-ul">
                      <li>
                        Plan Trips
                      </li>
                      <li>
                        Safety Tips
                      </li>
                      <li>
                        Emergency Services
                      </li>
                      <li>
                        Quick and Easy
                      </li>
                    </ul>
                    <Row className="landing-links">
                      <Button className="btn-links" size="lg">
                        <Link to="/register" className="text">Sign Up!</Link>
                      </Button>
                      <Button className="btn-links" size="lg">
                        <Link to="/login" className="text">Login!</Link>
                      </Button>
                    </Row>
                  </Card.Body>
                </Col>
              

                <Col sm={8} className="car-padding">
                <Carousel>
                    <Carousel.Item>
                    <img
                      className="d-block w-100 avatars"
                      src={require('../../images/olderman.svg')}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5>"Very easy to use. Safety has really helped our family. Nice work on your app! I STRONGLY recommend Nomadic Security to EVERYONE interested in a outdoor lifestyle!"</h5>
                      <p>- Randene L.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                    
                    <Carousel.Item>
                    <img
                      className="d-block w-100 avatars"
                      src={require('../../images/man.svg')}
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h5>"I am so pleased with this product. I would like to personally thank you for your outstanding product. Hiking has completely surpassed our expectations."</h5>
                      <p>- Sloane L.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                    
                    <Carousel.Item>
                    <img
                      className="d-block w-100 avatars"
                      src={require('../../images/boy.svg')}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h5>"Absolutely wonderful! I like Hiking more and more each day because it makes my life a lot easier. Thank You! Nomadic Security saved my life!"</h5>
                      <p>- Yigal G.</p>
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                    <img
                      className="d-block w-100 avatars"
                      src={require('../../images/girl.svg')}
                      alt="Fourth slide"
                    />
                    <Carousel.Caption>
                      <h5>"The service was excellent. I would be lost without Nomadic Security. Thanks guys, keep up the good work!"</h5>
                      <p>- Marji T.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>         
                </Col>
                
              </Row>
              
              </Container>
          </div>
          
        </div>

       </div>
    );
  }
}

export default Landing;




  /* <div className="">
              <Link to="/register"className="">Register</Link>
            </div>
            <div className="">
              <Link to="/login" className="">Log In</Link>
    </div> */




      // <div className="landing">
      // <Container className="welcome" sm={12}>
      // <Card style={{position: 'relative', zIndex:3}} sm={12}>
      // <Card.Body className="card-content">
      //   This is some text within a card body. 
      //   <br/>
      //   <Link to="/register"className="">Plan trip (if logged in)</Link>
      //   <br/>
      //   <Link to="/login" className="">Log In</Link>

      // </Card.Body>
      // </Card>
      // </Container>
      // </div>
