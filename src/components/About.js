import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';

class About extends Component {
  render() {
    return (
      <div className='about container'>
        <h1>
          About
        </h1>
      </div>  
    );
  }
}

export default () => (
  <SiteConsumer>
    {({siteContent}) => (
      <About siteContent={siteContent}/>
    )}
  </SiteConsumer>
)
