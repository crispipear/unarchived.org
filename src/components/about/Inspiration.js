import React, { Component } from 'react';
import {connect} from 'react-redux';

class Inspiration extends Component {
  render() {
    return (
      <div className='about-inspiration'>
        <div className='info'>
            <h2>{this.props.siteContent.about_ins_title}</h2>
            <p>{this.props.siteContent.about_ins_desc}</p>
        </div>
        <div className='image' style={{backgroundImage:  `url(${this.props.siteAssets.about_inspiration}`}}/>
      </div>  
    );
  }
}

const mapStateToProps = state => ({
  siteContent: state.site.siteContent,
  siteAssets: state.site.siteAssets
})

export default connect(mapStateToProps, null)(Inspiration)