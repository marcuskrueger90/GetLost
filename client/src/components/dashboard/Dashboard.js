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

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

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
            <Form.Control type="address" placeholder="Address" />
            </Form.Group>

            <Form.Group className="px-1">
            <Form.Control type="city" placeholder="City" />
            </Form.Group>

            <Form.Group className="px-1">
            <Form.Control type="state" placeholder="State" />
            </Form.Group>

            <Form.Group className="px-1">
            <Form.Control type="zipcode" placeholder="Zipcode" />
            </Form.Group>

            <Form.Group className="px-1">
            <Form.Control type="arrival" placeholder="Expected Arrival" />
            </Form.Group>

            <Form.Group className="px-1">
            <Form.Control type="PIN" placeholder="PIN code" />
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