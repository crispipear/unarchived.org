import React, {Component} from "react";
import {SiteConsumer} from './SiteContext';
import {Link} from "react-router-dom";
import '../styles/menu.scss';

class Menu extends Component {
    render(){
        return(
          <div className="menu">
            <div className="logo">
                {this.props.siteAssets && <img src={`https:${this.props.siteAssets.logo}`}/>}
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/map">Map</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </div>
          </div>
        )
    }
}

export default () => (
    <SiteConsumer>
      {({siteAssets, match}) => (
        <Menu match={match} siteAssets={siteAssets}/>
      )}
    </SiteConsumer>
  )
  