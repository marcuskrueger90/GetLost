import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Stars from "../particles/particles"
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
        <Stars />
          </div>
          <div className="background-mountain">

          <Card className="text-center bckgrnd mx-auto logform">
              <h4>
                Log in below
              </h4>
              <p className="">
              Don't have an account? <Link to="/register">Register</Link>
              </p>
              </Card>
            <Card className="bckgrnd mx-auto mt-4 logform">
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

              <div className="">
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
