import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import '../styles/home.scss';

class Home extends Component {
  render() {
    return (
      this.props.siteContent ?
          <div className='home container'>
            <h1>{this.props.siteContent.project_name}</h1>
            <p>{this.props.siteContent.project_tagline}</p>
            <video autoPlay muted loop className="home-vid" src={this.props.siteAssets.videoBg}/>
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
