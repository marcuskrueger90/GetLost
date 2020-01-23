import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"
import Form from "react-bootstrap/Form";
import "./dash.css";
import axios from "axios";



class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  
  state={
    telephone:'',
    date:'',
    trip:[
      {location:[
        {address:'',
        city:'',
        state:'',
        zip:''
        }]
      }
    ],
    tripEndDateTime:'',
    pin:'',
  }

  

  handleChange=(event)=>{
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    this.setState({
      [name]: value
    })
  }
  submit = (event)=>{

    event.preventDefault();

    const payload = {
        telephoe: this.state.telephone,
        date: this.state.date,
        state: this.state.trip.location.state,
        zip: this.state.trip.location.zip,
        address: this.state.trip.location.address,
        tripEndDateTime: this.state.tripEndDateTime,
        pin: this.state.pin

    }

    axios({
        url: '/api/trips',
        method: "POST",
        data: payload

    })
    .then(()=>{
        console.log('Data has been sent to the server');
    })
    .catch(()=>{
        console.log('Internal server error')
    })
}
  

  render() {
    

    return (
      <Container className="pt-3">
        <div className="card text-center">
          <h4>Current Trip: </h4>
          <h5>(Alarm Dispatch Location)</h5>
          <h5>(Expected Arrival Time)</h5>
          <Alert variant="danger">Arrived Safe - Cancel Alarm</Alert>
          <hr />

          <h4>New Alarm (Location and Time)</h4>
          <br />
          <Form>
            <Form.Group className="px-1">
            <Form.Control 
            type="address"
            name="address" 
            placeholder="Address"
            onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group className="px-1">
            <Form.Control 
            type="city"
            name="city"
            placeholder="City"
            onChange={this.handleChange} />
            </Form.Group>

            <Form.Group className="px-1">
            <Form.Control 
            type="state" 
            name="state"
            placeholder="State"
            
            onChange={this.handleChange} />
            </Form.Group>

            <Form.Group className="px-1">
            <Form.Control 
            type="zipcode" 
            name="zip"
            placeholder="Zipcode"
            
            onChange={this.handleChange} />
            </Form.Group>

            <Form.Group className="px-1">
            <Form.Control 
            type="arrival" 
            name="tripEndDateTime"
            placeholder="Expected Arrival"
            
            onChange={this.handleChange}
            />
            </Form.Group>

            <Form.Group className="px-1">
            <Form.Control 
            type="PIN" 
            name="pin"
            placeholder="PIN code"
            
            onChange={this.handleChange} />
            </Form.Group>
            </Form>

            <Button variant="info" className="btn btn-sm">Submit</Button>

        </div>
      </Container>
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






// <div className="landing-copy">
// <h4 className>
//   <b>Hey there,</b> {user.name.split(" ")[0]}!
//   <p className="">
//     You're logged in!
//   </p>
// </h4>
// <Button variant="info"
// onClick={this.onLogoutClick} className="btn btn-lg logout">Logout
// </Button>
// </div>