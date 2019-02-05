import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';

class Map extends Component {
  render() {
    return (
      <div className='map container'>
        <h1>
          Map
        </h1>
      </div>  
    );
  }
}

export default () => (
  <SiteConsumer>
    {({siteContent}) => (
      <Map siteContent={siteContent}/>
    )}
  </SiteConsumer>
)
