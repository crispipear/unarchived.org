import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';

class Blog extends Component {
  render() {
    return (
      <div className='blog container'>
        <h1>
          Blog
        </h1>
      </div>  
    );
  }
}

export default () => (
  <SiteConsumer>
    {({siteContent}) => (
      <Blog siteContent={siteContent}/>
    )}
  </SiteConsumer>
)
