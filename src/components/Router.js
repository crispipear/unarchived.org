import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Explore from './Explore';
import Blog from './Blog';
import BlogView from './BlogView';
import Menu from "./Menu";
import Projects from './Projects';
import ProjectView from './ProjectView';
import Team from './Team';
import Video from './Video';

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
    path: "/projects/:title",
    main: ProjectView
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
  {
    path: "/blog/:title",
    main: BlogView
  }
];
class Navigation extends Component {
  render(){
    return (
      <Router>
        <div className="app">
          {
            this.props.video && <Video/>
          }
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
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}
const mapStateToProps = state => ({
  video: state.site.video
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);