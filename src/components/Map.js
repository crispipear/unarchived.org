import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import GoogleMap from './map/GoogleMap';
import Info from './map/Info';
import '../styles/map.scss';

class Map extends Component {
  render() {
    return (
      <div className='map container'>
        <Info/>
        <GoogleMap/>
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
