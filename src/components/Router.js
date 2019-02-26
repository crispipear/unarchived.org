import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Map from './Map';
import Blog from './Blog';
import Menu from "./Menu";

const routes = [
  {
    path: "/",
    main: Home
  },
  {
    path: "/about",
    main: About
  },
  {
    path: "/map",
    main: Map
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
        <div style={{ marginLeft: '9vw'}}>
          {routes.map((route, index) => (
            <Route
              exact
              key={index}
              path={route.path}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default Navigation;