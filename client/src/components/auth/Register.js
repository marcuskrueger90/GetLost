import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Particles from 'react-particles-js';
import "./register.css"
import { Card, Form, Button} from "react-bootstrap";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      telephone: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      telephone: this.state.telephone,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
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
                Register below
              </h4>
              <p className="">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
              </Card>
              <Card className="bckgrnd w-50 mx-auto mt-4 regg">
            <Form className="text-center mx-2 mt-3" noValidate onSubmit={this.onSubmit}>

              <Form.Group className="mb-0">
              <Form.Control placeholder="Name"
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}/>
                  <label htmlFor="name"></label>
                  <span className="">{errors.name}</span>
              </Form.Group>

              <Form.Group className="mb-0">
              <Form.Control 
                  placeholder="Email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}/>
                   <label htmlFor="email"></label>
                <span className="">{errors.email}</span>
              </Form.Group>

              <Form.Group className="mb-0">
              <Form.Control 
                  placeholder="Phone #"
                  onChange={this.onChange}
                  value={this.state.telephone}
                  error={errors.telephone}
                  id="telephone"
                  type="text"
                  className={classnames("", {
                    invalid: errors.telephone
                  })}/>
                   <label htmlFor="number"></label>
                <span className="">{errors.telephone}</span>
              </Form.Group>


              <Form.Group className="mb-0">
              <Form.Control 
                 placeholder="Password"
                 onChange={this.onChange}
                 value={this.state.password}
                 error={errors.password}
                 id="password"
                 type="password"
                 className={classnames("", {
                   invalid: errors.password
                 })}/>
                    <label htmlFor="password"></label>
                <span className="">{errors.password}</span>
              </Form.Group>

              <Form.Group className="mb-3">
              <Form.Control 
                placeholder="Confirm Password"
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}/>
                    <label htmlFor="password2"></label>
                <span className="">{errors.password2}</span>
              </Form.Group>

                <Button style={{color: "white"}} variant="outline-dark"
                  block
                  type="submit"
                  className="regBtn">
                  Sign up
                </Button>
                <Button href="/" className="regBtn my-3" block>
                 Back to home
                </Button>
            </Form>
            </Card>
            </div>
            </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));






