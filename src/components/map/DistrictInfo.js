import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateCurDistrict, toggleDistrictInfo} from '../../actions/mapActions';

class DistrictInfo extends Component {
  _back = () => {
    this.props.toggleDistrictInfo(false)
    this.props.updateCurDistrict("")
  }
  render() {
    return (
      <div className='district_info'>
        <div className="backButton" onClick={this._back}><span>&larr; back</span></div>        
        <div className='district_info_bg' style={{backgroundImage: `url(${this.props.district.thumbnail})`}}/>
        <h1>{this.props.district.name}</h1>
        <p>{this.props.district.shortDesc}</p>
        <h3>"{this.props.district.quote}" <br/>
          <span>- {this.props.district.quoteAuthor}</span>
        </h3>
        <p>{this.props.district.longDesc}</p>
      </div>  
    );
  }
}


const mapStateToProps = state => {
  let district = state.map.districts && state.map.districts[state.map.curDistrict]
  return {
    district
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    updateCurDistrict,
    toggleDistrictInfo
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(DistrictInfo)
