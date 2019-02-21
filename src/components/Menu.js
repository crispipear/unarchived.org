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
                {<img src={this.props.siteAssets.logo}/>}
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
            <div className="icon">
                <a href='mailto: abrahamavnisan@gmail.com'>{<img src={this.props.siteAssets.contact}/>}</a>
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
  