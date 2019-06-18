import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/map.scss';
import Districts from './map/Districts';
import POIView from './map/POIView';

class Explore extends Component {
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}
const mapStateToProps = state => ({
  blogs: state.site.blogs
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore);