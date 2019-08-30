import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/map.scss';
import Districts from './map/Districts';
import POIView from './map/POIView';
import {togglePOIInfo} from '../actions/mapActions';

import {updateCurDistrict} from '../actions/mapActions';

class Explore extends Component {
  state = {
    poi: false,
    poiName: ''
  }

  setPoiView = cmd => {
    this.setState({
      poi: cmd
    })
  }

  componentDidMount(){
    let districtName = this.props.match.params.district
    let poiName = this.props.match.params.poi
    if (districtName) {
      this.props.updateCurDistrict(districtName)
      this.setState({
        poi: true
      })
      if(poiName == "" || poiName == null){
        this.props.togglePOIInfo(false)
      }
    }
    if (poiName) {
      this.setState({
        poi: true,
        poiName
      })
    }
    if (districtName == "" || districtName == null){
      this.setPoiView(false)
      this.props.togglePOIInfo(false)
    }
  }

  render() {
    return (
      <div className='map container'>
        {
          this.state.poi
          ? <POIView setPoiView={this.setPoiView} poiName={this.state.poiName}/>
          : <Districts setPoiView={this.setPoiView}/>
        }
      </div>  
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCurDistrict,
    togglePOIInfo
  }, dispatch)
}
const mapStateToProps = state => ({
  blogs: state.site.blogs
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore);