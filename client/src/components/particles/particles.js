import React, { Component } from "react";
import { Particles } from 'react-particles-js';


class Stars extends Component{
  
    render(){
        return (
            <Particles
                params={{
                "particles": {
                    "number": {
                    "value": 135,
                        "density": {
                        "enable": false,
                        "value_area": 135
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
                }}
            />
        );
    };
 
}

export default Stars;