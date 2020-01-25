import React, { Component } from "react";
import "./Landing.css"
import Particles from 'react-particles-js';

// import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div >
        <div className="background-sky">
        <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 200,
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
           <div className="">
             <h4>
               This is the Landing/Home Page
             </h4>
             <p>
               Full-stack MERN app with user authentication via
               passport and JWTs
             </p>
            <br />
            {/* <img className="background-pics" src={require('../../images/sky.png')} alt="dawn pic"></img> */}
            {/* <div className="">
              <Link to="/register"className="">Register</Link>
            </div>
            <div className="">
              <Link to="/login" className="">Log In</Link>
    </div> */}
          </div>
         </div>
       </div>
    );
  }
}

export default Landing;
