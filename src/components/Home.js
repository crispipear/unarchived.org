import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';

class Home extends Component {
  render() {
    return (
      this.props.siteContent ?
          <div className='home container'>
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
    {({siteContent}) => (
      <Home siteContent={siteContent}/>
    )}
  </SiteConsumer>
)
