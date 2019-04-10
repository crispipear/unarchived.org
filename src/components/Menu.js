import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../styles/menu.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateSiteLocation} from '../actions/siteActions'

const routes = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/explore",
    name: "Explore"
  },
  {
    path: "/projects",
    name: "Projects"
  },
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/blog",
    name: "Blog"
  },
];

class Menu extends Component {
  updateLoc = path => {
    this.props.updateSiteLocation(path)
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
                      replace
                      key={key} 
                      to={r.path}
                      onClick={() => this.updateLoc(r.path)}
                      className={this.props.siteLoc === r.path ? "active" : ""}
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

const mapStateToProps = state => ({
  siteAssets: state.site.siteAssets,
  siteLoc: state.site.siteLoc
})

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    updateSiteLocation
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
  