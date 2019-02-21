import React, { Component } from 'react';
import {SiteConsumer} from '../SiteContext';

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

export default () => (
  <SiteConsumer>
    {({siteAssets, siteContent}) => (
      <Project siteAssets={siteAssets} siteContent={siteContent}/>
    )}
  </SiteConsumer>
)
