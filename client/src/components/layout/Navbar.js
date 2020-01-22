import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./nav.css"
// import Dashboard from "../dashboard/Dashboard";



function Navigation() {
  return (
    <Navbar bg="secondary" expand="lg">
      <img className="pic" src={require('../../images/logo.svg')} alt="dawn pic" />
  <Navbar.Brand href="/">Get Lost</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav mr-auto">
  <Nav className="ml-auto">
      <Nav.Link className="navItem" href="/register">Register</Nav.Link>
      <Nav.Link className="navItem" href="/login">Log In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigation;


// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class Navbar extends Component {
//   render() {
//     return (
//       <div className="">
//         <nav className="">
//           <div className="">
//             <Link to="/" className="">Get Lost</Link>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navbar;