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
import {ReactComponent as MENUICON} from '../assets/menu.svg';

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
    path: "/explore/:district",
    main: Explore
  },
  {
    path: "/explore/:district/:poi",
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
  state = {
    openedMenu: false
  }
  toggleMenu = () => {
    this.setState({
      openedMenu: !this.state.openedMenu
    })
  }

  render(){
    return (
      <Router>
        <div className="app" onClick={() => {(this.props.view == 2 && this.state.openedMenu) && this.toggleMenu()}}>
          {
            this.props.video && <Video/>
          }
          {
            this.props.view == 2 && <MENUICON className="menu-trigger" onClick={this.toggleMenu}/>
          }
          <Menu openedMenu={this.state.openedMenu} toggleMenu={this.toggleMenu}/>
          
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
  return bindActionCreators({
  }, dispatch)
}
const mapStateToProps = state => ({
  video: state.site.video,
  view: state.site.view
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);