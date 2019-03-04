import React, { Component } from 'react';
import {connect} from 'react-redux';
// import Belltown from '../../assets/belltown.png';
// import Georgetown from '../../assets/georgetown.png';
// import LakeUnion from '../../assets/lakeunion.png'

// const neighborhoods = [
//   {
//     name: 'Belltown',
//     img: Belltown
//   },
//   {
//     name: 'Georgetown',
//     img: Georgetown
//   },
//   {
//     name: 'Lake Union',
//     img: LakeUnion
//   }
// ]

class Districts extends Component {
  _handleClick = () => {
    alert("feature still under development")
  }
  render() {
    return (
      <div className='districts'>
        {
          Object.keys(this.props.districts).map((d, key) => 
            <div 
              key={key}
              className = 'neighborhood_card' style={{backgroundImage: `url(${this.props.districts[d].thumbnail})`}}
              onClick={this._handleClick}
            >
              <h1>{this.props.districts[d].name}</h1>
            </div>
          )
        }
      </div>  
    );
  }
}


const mapStateToProps = state => ({
  districts: state.map.districts
})

export default connect(mapStateToProps, null)(Districts)
