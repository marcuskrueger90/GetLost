import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Navbar, Nav } from "react-bootstrap";
import { Particles } from 'react-particles-js';
import moment from 'moment';
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
          <Navbar.Toggle className="toggler justify-content-end" style={{ width: "100%" }} aria-controls="basic-navbar-nav" />
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="pt-3 dash-container mb-5">
          <div className="card text-center">
            <h5>Planned trip to:</h5><p>{this.state.trip.address} {this.state.trip.city} {this.state.trip.state} {this.state.trip.zip}</p>
            <h5>Scheduled return date/time:</h5><p>{moment(this.state.trip.tripEndDateTime, "YYYY-MM-DD HH:mm:ss.SZ").format("MM-DD-YYYY HH:mm A")}</p>
            
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
                  <option value="AE">Armed Forces Europe (Military "State")</option>
                  <option value="AP">Armed Forces Pacific (Military "State")</option>
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

              <Form.Group className="px-1 text-dark">
                <Datetime
                  type="arrival"
                  name="tripEndDateTime"
                  inputProps={{ placeholder: "Scheduled return date/time", readOnly: true}}
                  onChange={moment => this.handleDateTimePicker(moment, 'tripEndDateTime')}
                  value={this.state.tripEndDateTime}
                />
              </Form.Group>
            </Form>
            <Button onClick={this.submit} className="btn btn-links mb-3 submit">Submit</Button>
        </div>
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