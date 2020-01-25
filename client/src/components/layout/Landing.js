import React, { Component } from "react";
import "./Landing.css"
import Particles from 'react-particles-js';

// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col, Row, Image, Card, Container} from "react-bootstrap"
import "./landing.css"


class Landing extends Component {
  render() {
    return (
      <div >
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
           <div className="">
             <h4>
               This is the Landing/Home Page
             </h4>
             <p>
               Full-stack MERN app with user authentication via
               passport and JWTs
             </p>
            <br />
            {/* <img className="background-pics" src={require('../../images/sky.png')} alt="dawn pic"></img> */}
            {/* <div className="">
              <Link to="/register"className="">Register</Link>
            </div>
            <div className="">
              <Link to="/login" className="">Log In</Link>
    </div> */}
          </div>
         </div>
       </div>
      
//       <div className="landing">
//       <Image className="landing-img" style={{ position: 'absolute', zIndex:1}} src={require('../../images/mountain.jpg')} alt="Photo by Julian Zett on Unsplash" fluid />
//       <Container className="welcome" sm={12}>
//       <Card style={{position: 'relative', zIndex:3}} sm={12}>
//       <Card.Body className="card-content">
//         This is some text within a card body. 
//         <br/>
//         <Link to="/register"className="">Plan trip (if logged in)</Link>
//         <br/>
//         <Link to="/login" className="">Log In</Link>

//       </Card.Body>
//       </Card>
//       </Container>
//       </div>

    );
  }
}

export default Landing;




 {/* <div className="">
              <Link to="/register"className="">Register</Link>
            </div>
            <div className="">
              <Link to="/login" className="">Log In</Link>
    </div> */}
