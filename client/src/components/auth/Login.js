import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Particles from 'react-particles-js';
import { Card, Form, Button } from "react-bootstrap";
import "./login.css"


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
      <div className="background-sky">
        <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 300,
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

          <Card className="text-center bckgrnd w-50 mx-auto mt-4 regg">
              <h4>
                Log in below
              </h4>
              <p className="">
              Don't have an account? <Link to="/register">Register</Link>
              </p>
              </Card>
            <Card className="bckgrnd w-50 mx-auto mt-4 regg">
            <Form className="text-center mx-2 mt-2" noValidate onSubmit={this.onSubmit}>

            <Form.Group className="">
              <Form.Control 
                  placeholder="Email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}/>
                  <label htmlFor="email"></label>
                <span className="">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </Form.Group>

              <Form.Group className="">
              <Form.Control 
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}/>
                 <label htmlFor="password"></label>
                 <span className="">
                  {errors.password}
                  {errors.passwordincorrect}
                 </span>
              </Form.Group>

              <div className="col s12">
                <Button
                  block
                  style={{color: "white"}}
                  variant="outline-dark"
                  type="submit"
                  className="logBtn mb-3">
                  Login
                </Button>
              </div>
            </Form>
            </Card>
            </div>
            </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
