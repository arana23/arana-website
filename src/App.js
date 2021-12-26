import React from "react";
import sample from './components/landingbackground.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './AboutMe/AboutMe';
import Blog from './Blog/Blog';
import Resume from './Resume/Resume';
import Typewriter from 'typewriter-effect';

export default function App() {
  return (
    <Router>
      <div>
      <h2><Typewriter
        options={{
          strings: ['Hello There!','I am Aparajita, welcome to my website :)'],
          autoStart: true,
          loop: true,
        }}
      /></h2>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/">
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}