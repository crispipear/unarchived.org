import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Map from './Map';
import Blog from './Blog';
import Menu from "./Menu";

const routes = [
  {
    path: "/",
    exact: true,
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
        <div style={{ marginLeft: '125px'}}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={process.env.PUBLIC_URL + route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default Navigation;