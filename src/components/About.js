import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/about.scss';

class About extends Component {
  render() {
    return (
      <div className='about container'>
        <div className='about-header' style={{backgroundImage: `url(${this.props.siteAssets.about_first_image})`}}>
          <div/>
          <h1>{this.props.siteContent.about_title}</h1>
        </div>
        <div className='about-content-row'>
          <h1>{this.props.siteContent.about_proj_title}</h1>
          <p>{this.props.siteContent.about_proj_des}</p>
        </div>
        <div className='about-header' style={{backgroundImage: `url(${this.props.siteAssets.about_second_image})`}}/>
        <div className='about-content-row'>
          <h1>{this.props.siteContent.about_ins_title}</h1>
          <p>{this.props.siteContent.about_ins_des}</p>
        </div>
        <div className='about-header' style={{backgroundImage: `url(${this.props.siteAssets.about_third_image})`}}/>
        <div className='about-content-row'>
          <h1>{this.props.siteContent.about_fut_title}</h1>
          <p>{this.props.siteContent.about_fut_des}</p>
        </div>
      </div>  
    );
  }
}

const mapStateToProps = state => ({
  siteContent: state.site.siteContent,
  siteAssets: state.site.siteAssets
})

export default connect(mapStateToProps, null)(About)