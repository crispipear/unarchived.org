import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import '../styles/home.scss';

class Home extends Component {
  render() {
    return (
      this.props.siteContent ?
          <div className='home container'
               style={this.props.siteAssets && {backgroundImage: `url(${this.props.siteAssets.lp_bg})`}}
          >
            <h1>{this.props.siteContent.project_name}</h1>
            <p>{this.props.siteContent.project_short_des}</p>
          </div>        
        :
        <div className='home'/>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({siteContent, siteAssets}) => (
      <Home siteContent={siteContent} siteAssets={siteAssets}/>
    )}
  </SiteConsumer>
)
