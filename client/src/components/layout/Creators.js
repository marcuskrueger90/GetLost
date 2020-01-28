import React, { Component } from "react";
import Particles from 'react-particles-js';
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "./creators.css"



class Creators extends Component {

    render() {
        return (
            <>
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
              <Container>
                  <Row className="mt-5 text-center">
                  <Col lg={4}>
                    <div class="flip-card">
                    <div className="flip-card-inner backgrnd">
                     <Card className="">
                     <div class="flip-card-front">
                         <img />
                        <h3 className="name">Marcus Krueger</h3>
                        </div>
                        <div class="flip-card-back">
                        <a href="https://github.com/marcuskrueger90" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                        <br />
                        <a href="https://www.linkedin.com/in/marcus-krueger-47766012b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                     </Card> 
                     </div>
                     </div> 
                    </Col>

                    <Col lg={4}>
                    <div class="flip-card">
                    <div className="flip-card-inner backgrnd">
                     <Card className="">
                     <div class="flip-card-front">
                         <img />
                        <h3 className="name">Jake Campbell</h3>
                        </div>
                        <div class="flip-card-back">
                        <a href="https://github.com/HoveringTorso" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                        <br />
                        <a href="https://www.linkedin.com/in/ian-applekamp-316256186/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                     </Card>
                     </div>
                     </div> 
                    </Col>

                    <Col lg={4}>
                    <div class="flip-card">
                    <div className="flip-card-inner backgrnd">
                     <Card className="">
                     <div class="flip-card-front">
                         <img />
                        <h3 className="name">Ian Applekamp</h3>
                        </div>
                        <div class="flip-card-back">
                        <a href="https://github.com/Ieapplekamp" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                        <br />
                        <a href="https://www.linkedin.com/in/ian-applekamp-316256186/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                     </Card> 
                     </div>
                     </div> 
                    </Col>
                  </Row>

                  <Row className="mt-3 justify-content-around text-center">
                  <Col lg={4}>
                    <div class="flip-card">
                    <div className="flip-card-inner backgrnd">
                     <Card className="">
                     <div class="flip-card-front">
                         <img />
                        <h3 className="name">Jensey Fifer</h3>
                        </div>
                        <div class="flip-card-back">
                        <a href="https://github.com/seyleigh" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                        <br />
                        <a href="https://www.linkedin.com/in/jensey-fifer/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                     </Card> 
                     </div>
                     </div> 
                    </Col>

                    <Col lg={4}>
                    <div class="flip-card">
                        <div className="flip-card-inner backgrnd">
                     <Card className="">
                     <div class="flip-card-front">
                         <img />
                        <h3 className="name">Justin Carlson</h3>
                        </div>
                        <div class="flip-card-back">
                        <a href="https://github.com/justincarlson7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                        <br />
                        <a href="https://www.linkedin.com/in/justin-carlson-03797432/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                     </Card> 
                     </div>
                     </div> 
                    </Col>
                  </Row>
                  <Button href="/" className="regBtn mt-5" block>
                 Back to home
                </Button>
              </Container>

        
            </div>
            </>
        )
    }



}

export default Creators;