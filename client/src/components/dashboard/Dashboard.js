import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Navbar, Nav, Row, Col } from "react-bootstrap";
import Particles from 'react-particles-js';
// import moment from 'moment';
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./dash.css";
import axios from "axios";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    telephone: "",
    date: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    tripEndDateTime: "",
    trip:[]
  };


getTripData = ()=>{
  axios({
    url: `/api/users/trips/${this.state.userid}`,
    method: "GET",
  })
    .then((response) => {
      const tripData = response.data;
      this.setState({trip: tripData})
      
    })
    .catch(() => {
      console.log("Internal server error");
    });
};


  handleDateTimePicker = (moment, name) => this.setState({ [name]: moment.toDate() });

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };
  submit = event => {
    event.preventDefault();

    const payload = {
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      address: this.state.address,
      tripEndDateTime: this.state.tripEndDateTime
    };


    axios({
      url: `/api/users/trips/${this.state.userid}`,
      method: "POST",
      data: payload
    })
      .then(() => {
      
      })
      .catch(() => {
        console.log("Internal server error");
      });

      this.getTripData();
  };


  cancel = event => {
    event.preventDefault();

    const payload2 = {
      city: null,
      state: null,
      zip: null,
      address: null,
      tripEndDateTime: null
    };

    axios({
      url: `/api/users/trips/${this.state.userid}`,
      method: "POST",
      data: payload2
    })
      .then(() => {
        console.log("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal server error");
      });

      this.getTripData();
    };


  componentDidMount() {
    this.setState({ userid: this.props.auth.user.id },()=>{
      this.getTripData()});
  }
  render() {
    const { user } = this.props.auth;

    return (
      <div className="dash-background-sky">
        <div className="dash-background-mountain">
        <Particles className="dash-p"
          params={{
            "particles": {
              "number": {
                "value": 300,
                  "density": {
                    "enable": true,
                    "value_area": 2500
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
        <Navbar expand="lg" className="nav-bckgrnd d-flex justify-space-between align-items-center">
          <img
            className="pic"
            src={require("../../images/logo.svg")}
            alt="dawn pic"
          />
          <Navbar.Brand href="/" className="brand">
            {" "}
            Nomadic Security
          </Navbar.Brand>
          <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav mr-auto">
            <Nav className="ml-auto">
              <Navbar.Text className="user">
                Welcome, <b>{user.name.split(" ")[0]}</b>!
              </Navbar.Text>
              <br />
              <Button
                variant="outline-light"
                onClick={this.onLogoutClick}
                className="btn btn-links logout"
              >
                Logout
              </Button>
              {/* <Nav.Link className="navItem" href="/register">Register</Nav.Link>
      <Nav.Link className="navItem" href="/login">Log In</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="pt-3 dash-container">
          <div className="card text-center">
            <h4>Current Trip: </h4>
            <h5>(Alarm Dispatch Location)</h5>
            <h5>(Expected Arrival Time)</h5>
            
            <Button variant="danger"
              onClick={this.cancel} className="btn btn-lg logout">Arrived Safe - Cancel Alarm
              </Button>
            <hr />

            <h4>New Alarm (Location and Time)</h4>
            <Form>
              <Form.Group className="px-1">
                <Form.Control
                  type="address"
                  name="address"
                  placeholder="Address"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="px-1">
                <Form.Control
                  type="city"
                  name="city"
                  placeholder="City"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="px-1">
                <Form.Control
                  as="select"
                  type="state"
                  name="state"
                  onChange={this.handleChange}
                >
                  <option value={null} disabled selected hidden required>
                    State
                  </option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="AE">AE</option>
                  <option value="AP">AP</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="px-1">
                <Form.Control
                  type="zipcode"
                  name="zip"
                  placeholder="Zipcode"
                  maxLength="5"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="px-1">
                <Datetime
                  type="arrival"
                  name="tripEndDateTime"
                  inputProps={{ placeholder: "Scheduled return date/time", readOnly: true}}
                  onChange={moment => this.handleDateTimePicker(moment, 'tripEndDateTime')}
                  value={this.state.tripEndDateTime}
                />
              </Form.Group>
            </Form>
            <Button onClick={this.submit} className="btn btn-links mb-3">Submit</Button>
        </div>
      </Container>
      <Container>
        <Row>
            <Col>
            <h2>You Have a Planned Trip to:</h2>
              <p>{this.state.trip.address}</p>
              <p>{this.state.trip.city}, {this.state.trip.state} {this.state.trip.zip} </p>
            </Col>
            <Col>
            <h2>Your return date and time is:</h2>
              <p>{this.state.trip.tripEndDateTime} </p>
            </Col>
        </Row>
          </Container>
          </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);




// export default connect(mapStateToProps, { logoutUser })(Dashboard);

