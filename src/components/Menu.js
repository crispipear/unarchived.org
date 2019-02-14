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
  componentDidMount(){
    console.log(process.env.PUBLIC_URL)
  }
  render(){
        return(
          <div className="menu">
            <div className="logo">
                {this.props.siteAssets && <img src={this.props.siteAssets.logo}/>}
            </div>
            <div className="links">
                {
                  routes.map((r, key) => 
                    <Link 
                      key={key} 
                      to={process.env.PUBLIC_URL + r.path}
                      className={window.location.pathname == process.env.PUBLIC_URL+r.path ? "active" : ""}
                    >
                      {r.name}
                    </Link>
                  )
                }
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
  