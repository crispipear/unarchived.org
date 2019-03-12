import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateCurDistrict, toggleDistrictInfo} from '../../actions/mapActions';
import DisritctInfo from './DistrictInfo';

class Districts extends Component {
  _handleClick = name => {
    console.log(name)
    this.props.updateCurDistrict(name)
    this.props.toggleDistrictInfo(true)
  }
  render() {
    return (
      <div className='districts'>
        {
          this.props.info
          ?
            <DisritctInfo/>
          :
          Object.keys(this.props.districts).map((d, key) => 
            <div 
              key={key}
              className = 'district_card'
              onClick={() => this._handleClick(this.props.districts[d].collectionId)}
            >
              <div className = 'district_bg' style={{backgroundImage: `url(${this.props.districts[d].thumbnail})`}}/>
              <h1>{this.props.districts[d].name}</h1>
            </div>
          )
        }
      </div>  
    );
  }
}


const mapStateToProps = state => ({
  districts: state.map.districts,
  info: state.map.districtInfo
})

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    updateCurDistrict,
    toggleDistrictInfo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Districts)
