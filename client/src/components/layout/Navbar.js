import {React, Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button} from "react-bootstrap";
import "./nav.css"
// import Dashboard from "../dashboard/Dashboard";



function Navigation() {
  return (
    <Navbar expand="lg" bg="warning" className="navy">
      <img className="pic" src={require('../../images/logo.svg')} alt="dawn pic" />
  <Navbar.Brand href="/" className="brand"> Get Lost</Navbar.Brand>
  <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav mr-auto">
  <Nav className="ml-auto">
  <Button variant="info"
onClick={this.onLogoutClick} className="btn btn-lg logout">Logout
</Button>
      {/* <Nav.Link className="navItem" href="/register">Register</Nav.Link>
      <Nav.Link className="navItem" href="/login">Log In</Nav.Link> */}
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