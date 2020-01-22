import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Container>
        <div className="">
          <div className="landing-copy">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}!
              <p className="">
                You're logged in!
              </p>
            </h4>
            <Button variant="info"
            onClick={this.onLogoutClick} className="btn btn-lg logout">Logout
            </Button>
          </div>
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
