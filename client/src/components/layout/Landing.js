import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Image, Card, Container} from "react-bootstrap"
import "./landing.css"


class Landing extends Component {
  render() {
    return (
      <div className="landing">
      <Image className="landing-img" style={{ position: 'absolute', zIndex:1}} src={require('../../images/mountain.jpg')} alt="Photo by Julian Zett on Unsplash" fluid />
      <Container className="welcome" sm={12}>
      <Card style={{position: 'relative', zIndex:3}} sm={12}>
      <Card.Body className="card-content">
        This is some text within a card body. 
        <br/>
        <Link to="/register"className="">Plan trip (if logged in)</Link>
        <br/>
        <Link to="/login" className="">Log In</Link>

      </Card.Body>
      </Card>
      </Container>
      </div>
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
