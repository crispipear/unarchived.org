import React, { Component } from 'react';
import '../styles/map.scss';
import Districts from './map/Districts';
import POIView from './map/POIView';

export default class Map extends Component {
  state = {
    poi: false
  }

  setPoiView = cmd => {
    this.setState({
      poi: cmd
    })
  }

  render() {
    return (
      <div className='map container'>
        {
          this.state.poi
          ? <POIView setPoiView={this.setPoiView}/>
          : <Districts setPoiView={this.setPoiView}/>
        }
      </div>  
    );
  }
}
