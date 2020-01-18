import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="">
        <nav className="">
          <div className="">
            <Link
              to="/"
              className=""
            >
              Get Lost
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
