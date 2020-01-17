import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          <div className="">
            <h4>
              This is the Landing/Home Page
            </h4>
            <p>
              Full-stack MERN app with user authentication via
              passport and JWTs
            </p>
            <br />
            <div className="">
              <Link
                to="/register"
                className=""
              >
                Register
              </Link>
            </div>
            <div className="">
              <Link
                to="/login"
                className=""
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
