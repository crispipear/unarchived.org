import React, { Component } from 'react';
import GoogleMap from './map/GoogleMap';
import Info from './map/Info';
import '../styles/map.scss';

export default class Map extends Component {
  render() {
    return (
      <div className='map container'>
        <Info/>
        <GoogleMap/>
      </div>  
    );
  }
}
