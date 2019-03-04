import React, { Component } from 'react';
import {connect} from 'react-redux';

class Project extends Component {
  render() {
    return (
      <div className='about-project'>
        <div className='image' style={{backgroundImage:  `url(${this.props.siteAssets.about_project}`}}/>
        <div className='info'>
            <h2>{this.props.siteContent.about_proj_title}</h2>
            <p>{this.props.siteContent.about_proj_desc}</p>
        </div>
      </div>  
    );
  }
}

const mapStateToProps = state => ({
  siteContent: state.site.siteContent,
  siteAssets: state.site.siteAssets
})

export default connect(mapStateToProps, null)(Project)
