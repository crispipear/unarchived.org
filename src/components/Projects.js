import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/about.scss';

class About extends Component {
  render() {
    return (
      <div className='about container'>
        <div className='about-block'>
          <h1 className='mtt'>Projects info page</h1>
          <h2>{this.props.siteContent.about_title}</h2>
          <p>{this.props.siteContent.about_short_desc}</p>
        </div>
      </div>  
    );
  }
}

const mapStateToProps = state => ({
  siteContent: state.site.siteContent,
  siteAssets: state.site.siteAssets
})

export default connect(mapStateToProps, null)(About)