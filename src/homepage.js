import React from "react";
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";

    function homepage() {
        return (
          <div class = "home">
            <h1>Aparajita Rana</h1>
            <h2><Typewriter
            options={{
              strings: ['Hello There!','Welcome to my website :)'],
              autoStart: true,
              loop: true,
            }}
            /></h2>
            <Link to="/AboutMe">
            <div class="glowbox">
              <button>
              click to explore...
              </button>
            </div>
            </Link>
          </div>
        );

    }

    export default homepage;