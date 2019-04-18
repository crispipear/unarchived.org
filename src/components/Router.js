import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Explore from './Explore';
import Blog from './Blog';
import Menu from "./Menu";
import Projects from './Projects';
import Team from './Team';

const routes = [
  {
    path: "/",
    main: Home
  },
  {
    path: "/explore",
    main: Explore
  },
  {
    path: "/projects",
    main: Projects
  },
  {
    path: "/about",
    main: About
  },
  {
    path: "/team",
    main: Team
  },
  {
    path: "/blog",
    main: Blog
  },
];

function Navigation() {
  return (
    <Router>
      <div className="app">
        <Menu/>
          <Switch>
            {routes.map((route, index) => (
              <Route
                exact
                key={index}
                path={route.path}
                component={route.main}
              />
            ))}
          </Switch>
      </div>
    </Router>
  );
}

export default Navigation;