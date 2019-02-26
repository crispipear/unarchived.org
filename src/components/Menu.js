import React, {Component} from "react";
import {SiteConsumer} from './SiteContext';
import {Link} from "react-router-dom";
import '../styles/menu.scss';

const routes = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/map",
    name: "Map"
  },
  {
    path: "/blog",
    name: "Blog"
  },
];

class Menu extends Component {
  componentWillReceiveProps(){
    console.log(window.location.hash)
  }
  render(){
        return(
          <div className="menu">
            <div className="logo">
                {<img src={this.props.siteAssets.logo}/>}
            </div>
            <div className="links">
                {
                  routes.map((r, key) => 
                    <Link 
                      key={key} 
                      to={r.path}
                      className={window.location.hash === '#'+r.path ? "active" : ""}
                    >
                      {r.name}
                    </Link>
                  )
                }
            </div>
            <div className="icon">
                <a href='mailto: unarchived.org@gmail.com'>{<img src={this.props.siteAssets.contact}/>}</a>
            </div>
          </div>
        )
    }
}

export default () => (
    <SiteConsumer>
      {({siteAssets}) => (
        <Menu siteAssets={siteAssets}/>
      )}
    </SiteConsumer>
  )
  