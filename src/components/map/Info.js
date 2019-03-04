import React, { Component } from 'react';
import Districts from './Districts'

export default class Map extends Component {
  render() {
    return (
      <div className='info'>
        <Districts/>
      </div>  
    );
  }
}
