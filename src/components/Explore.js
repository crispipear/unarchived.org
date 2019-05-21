import React, { Component } from 'react';
import '../styles/map.scss';
import Districts from './map/Districts';

export default class Map extends Component {
  render() {
    return (
      <div className='map container'>
        <Districts/>
      </div>  
    );
  }
}
